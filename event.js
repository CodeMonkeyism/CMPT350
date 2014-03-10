var event = {
    "eventSpace"         : [],
    "eventRoom"          : [],
    "eventWanderingShip" : [],

    "init"               : function (){
        event.queue = new Array().concat(
            event.eventSpace,
            event.eventWanderingShip,
            event.eventRoom)
    }

    "createRandomEvent"  : function ( type ) {
        switch(type){
            case "space" :
                return event.createSpaceEvent();
                break;
            case "room" :
                return event.createRoomEvent();
                break;
            case "wander" :
                return event.createShipEvent();
                break;
            default :
                console.log("unknown event type:" + type);
        }
    },

    "createShipEvent"   : function () {
        console.log("Create a ship event. So what should be on the ship?")
    },

    "createRoomEvent"   : function () {
        console.log("Create a room event. So what should be on the room?")
    },

    "createSpaceEvent"  : function () {
        console.log("Create a space event. So what should be in the space?")
    },
}