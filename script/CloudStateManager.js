var CloudStateManager = {
    baseUrl : "https://planetcloudsave.appspot.com/", // Base address of cloud save server.
    registerUrl: "register",             // Url for registering user.
    syncUrl: "sync",                     // Url for save/load.
    register: function(username, password){
        $.ajax({
            url : $CSM.baseUrl + $CSM.registerUrl,
            type : 'POST',
            data : {
                'username': username,
                'password': password,},
        }).done(function(){
            console.log("Cloud Save Registered.");
            Message.pushMessage('god say yes. you feel good.');
        }).fail(function(data){
            console.log("Cloud Save Register Failed.")
            console.log("Reason: " + data['status'])
            Message.pushMessage('no respond from cloud. maybe they do not work today?');
        })
    },
    /** Save to cloud.
    @param {String} username The user's name.
    @param {String} password The user's password
    */
    saveState: function(username, password) {
        currentData = JSON.stringify($CSM.getCurrentState())
        $.ajax({
            url : $CSM.baseUrl + $CSM.syncUrl,
            type : 'POST',
            data : {
                'username': username,
                'password': password,
                'savedata': currentData,},
        }).done(function(){
            console.log("Cloud Save Completed.")
            Message.pushMessage('Data fly to cloud. you feel good.');

        }).fail(function(data){
            console.log("Cloud Save Failed.")
            console.log("Reason: " + data['status'])
            Message.pushMessage('no respond from cloud. maybe they do not work today?');

        })
    },
    /** Load from cloud.
    @param {String} username The user's name.
    @param {String} password The user's password
    */
    loadState: function(username, password) {
        $.ajax({
            url : $CSM.baseUrl + $CSM.syncUrl,
            type : 'GET',
            data : {
                'username': username,
                'password': password,},
        }).done(function(data){
            console.log("Cloud Load Completed.")
            console.log(data)
            console.log(JSON.parse(data))
            $CSM.setCurrentState(JSON.parse(data))
            Message.pushMessage('Data flies down from cloud. world changed.');
        }).fail(function(data){
            console.log("Cloud Save Failed.")
            console.log("Reason: " + data['status'])
            Message.pushMessage('no respond from cloud. maybe they do not work today?');

        })
    },
    /**
     * Helper function: invoked by saveState only.
     * Return a dump of local storage.
     * @return {PlainObject} a dump of local storage.
     */
    getCurrentState: function(){
        var stateObject = new Object();
        for(var i=0;i<localStorage.length;i++){
            stateObject[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
        }
        return stateObject;
    },
    /**
     * Helper function: invoked by loadState only.
     * @param {PlainObject} savedata the save data to import.
     */
    setCurrentState: function(savedata){
        var data = savedata['data']
        for (var key in data) {
            var value = data[key]
            localStorage.setItem(key,value)
        };
    },
    openCloud: function(){
        var theEvent = Events.createRandomEvent("cloud");
        console.log(theEvent);
        var theScene = 'start';
        Events.loadEvent(theEvent,theScene);
    },
}

//alias
//

var $CSM = CloudStateManager;

