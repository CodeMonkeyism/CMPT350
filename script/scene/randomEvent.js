Events.random = {
    roomEvent : function(baseEvent){
        baseEvent.title = 'Noise from storage room';
        baseEvent.scenes.start.text = ["There is strange noise from your storage room.",
                                        "It sounds like eletrical spark."];
        baseEvent.isAvailable = true;//TODO
        baseEvent.scenes.start.notification = 'Strange noise in your storage room.';
        baseEvent.scenes.start.buttons = {
            'investigate' : {
                text: 'Investigate',
                nextScene: { 0.3: 'stuff', 1: 'nothing' }
            },
            'ignore': {
                text: 'Ignore it',
                nextScene: 'end'
            }
        }

        baseEvent.scenes['nothing'] = {
            text: [
                'Vague shapes move, just out of sight.',
                'The silence and the darkness surrounded.'
                ],
            buttons: {
                'backinside': {
                    text: 'Go back inside',
                    nextScene: 'end'
                }
            }
        }

        baseEvent.scenes['stuff'] = {
            reward : { res_Metal : 10, res_Fuel : 10},
            text : [
                'A broken robot lay on ground, looks old and useless.',
                'The only choice is disassemble it, maybe can find some thing useful.'
            ],
            buttons: {
                'backinside': {
                    text: 'Go back inside',
                    nextScene: 'end'
                }
            }
        }

        return baseEvent;
    },
    shipEvent : function(baseEvent){
        baseEvent.title = 'Your room rocked for a while';
        baseEvent.scenes.start.text = ["You heard a strong sound.",
                                        "Something hit your plant."];
        baseEvent.isAvailable = true;//TODO
        baseEvent.scenes.start.notification = 'A spaceship crashed on your plant.';
        baseEvent.scenes.start.buttons = {
            'investigate' : {
                sideEffect:function(){
                    console.log("Yay!")
                },
                text: 'Investigate remains',
                nextScene: { 0.3: 'stuff', 1: 'nothing' }
            },
            'ignore': {
                text: 'Ignore it',
                nextScene: 'end'
            }
        }

        baseEvent.scenes['nothing'] = {
            text: [
                'The ship exploded before your robot gets there.',
                'The silence and the darkness surrounded.'
                ],
            buttons: {
                'backinside': {
                    text: 'Go back inside',
                    nextScene: 'end'
                }
            }
        }

        baseEvent.scenes['stuff'] = {
            reward : { res_Metal : 275, res_Fuel : 290},
            text : [
                'The ship is in fire, but your robots manage to put it out.',
                'By disassembling it, maybe can find some thing useful.'
            ],
            buttons: {
                'backinside': {
                    text: 'Go back inside',
                    nextScene: 'end'
                }
            }
        }

        return baseEvent;
    },
    unknownEvent : function(baseEvent){
        baseEvent.isAvailable = false; 
        return baseEvent;
    },
    CloudEvent : function(baseEvent){
        baseEvent.title = 'Clash in the Cloud';
        baseEvent.scenes.start.text = ['we will not store your password',
                                        'but we may use it without encryption',
                                        'username and password must longer than 4 character.'];
        baseEvent.scenes.start.input = true;
        baseEvent.isAvailable = true;//TODO
        baseEvent.scenes.start.notification = 'Save or load your game on the cloud';
        baseEvent.scenes.start.buttons = {
            'register' : {
                sideEffect:function(){
                    var unm = $('#username').val();
                    var pwd = $('#password').val();
                    CloudStateManager.register(unm,pwd);
                },
                text: 'register',
                nextScene: 'end'
            },
            'save': {
                sideEffect:function(){
                    var unm = $('#username').val();
                    var pwd = $('#password').val();
                    CloudStateManager.saveState(unm,pwd);
                },
                text: 'save',
                nextScene: 'end'
            },
            'load': {
                sideEffect:function(){
                    var unm = $('#username').val();
                    var pwd = $('#password').val();
                    CloudStateManager.loadState(unm,pwd);
                },
                text: 'load',
                nextScene: 'end'
            },
            'cancel':{
                text: 'not now',
                nextScene: 'end'

            }
        }
        return baseEvent;
    }
}