Events.random = {
    roomEvent : function(baseEvent){
        baseEvent.title = 'Noise from storage room';
        baseEvent.scenes.start.text = ["There is strange noise from your storage room.",
                                        "It sounds like eletrical spark."];
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
        baseEvent.scenes.start.notification = 'A spaceship crashed on your plant.';
        baseEvent.scenes.start.buttons = {
            'investigate' : {
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
        baseEvent.isAvailable = function(){return false;}; 
    }
}