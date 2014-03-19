/**
*
*Event that may happen anytime.
*
*/
var RandomEvent = [
	{//a mystery shadow
		title: 'The Shadow',
		isAvailable: function(){ 
			return true;
			//TODO: check if power > 100 I dont know how to check it LOL
		},
		scenes: {
			'start': {
				text: [
					'a shadow seems occured and disappeared in darkness in sclience.',
					'not sure it is real, or just illusion of tired.'
				],
				notification: 'a shadow disappeared out of the corner of eye.',
				buttons:{
					'investigate': {
						text: 'investigate',
						nextScene: { 0.3: 'stuff', 1: 'nothing' }
					},
					'ignore': {
						text: 'ignore them',
						nextScene: 'end'
					}
				}
			},
			'nothing': {
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
			},
			'stuff': {
				reward: { scrap: 100, chip: 20 },
				text: [
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
		}//end of scenes
	}//end of the shadow

] 