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
                'vague shapes move, just out of sight.',
                'The silence and the darkness surrounded.'
                ],
            buttons: {
                'backinside': {
                    text: 'go back inside',
                    nextScene: 'end'
                }
            }
        }

        baseEvent.scenes['stuff'] = {
            reward : { res_Metal : 10, res_Fuel : 10},
            text : [
                'a broken robot lay on ground, looks old and useless.',
                'the only choice is disassemble it, maybe can find some thing useful.'
            ],
            buttons: {
                'backinside': {
                    text: 'go back inside',
                    nextScene: 'end'
                }
            }
        }

        return baseEvent;
    },
    shipEvent : function(baseEvent){
        
    },
    unknownEvent : function(baseEvent){
        baseEvent.isAvailable = function(){return false;}; 
    }
}