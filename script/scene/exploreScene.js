Events.exploreScene = {
    // Tier 1: two scenes
    tier1 :[ {
        name : "Unpowered corridor",
        description : "The corridor is total dark, nothing can be seen.",
        // The time to explore in second.
        time : 30,
        // Possible loss of robots.
        lossCount : 0,
        // Possibility of loss.
        lossPossibility: 0,
        // Result descriptions
        results : ["Just a piece of cake!"],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 5,
            minDefensePower : 5,
            minHP : 5,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 20,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 20,
                rate : 1
            },
            ]
        },

        {
        name : "Unpowered storage room",
        description : "The door of the room is closed and hard to open.",
        // The time to explore in second.
        time : 45,
        // Possible loss of robots.
        lossCount : 1,
        // Possibility of loss.
        lossPossibility: 0.01,
        // Result descriptions
        results : ["Just a piece of cake!",
                "One robot is damaged by fallen piece and unable to repair."
                ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 5,
            minHP : 5,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 60,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 60,
                rate : 1
            },
            ]
        },
    ],

    // Tier 2: Three scenes
    tier2 :[ {
        name : "Damaged corridor",
        description : "The corridor is damaged, you can see sparks.",
        // The time to explore in second.
        time : 60,
        // Possible loss of robots.
        lossCount : 1,
        // Possibility of loss.
        lossPossibility: 0.02,
        // Result descriptions
        results : [
                "Just a piece of cake!",
                "One robot is damaged by electric spark. Its CPU is burnt."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 5,
            minHP : 5,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Damaged storage room",
        description : "The room is damaged and its door opens and closes randomly.",
        // The time to explore in second.
        time : 65,
        // Possible loss of robots.
        lossCount : 1,
        // Possibility of loss.
        lossPossibility: 0.05,
        results : [
                "Just a piece of cake!",
                "One robot is hit by heavy metal fragment."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 5,
            minHP : 5,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 75,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 75,
                rate : 1
            },
            ]
        },

        {
        name : "Ruined sailor room",
        description : "The room is ruined. You can see bloodstain on the remains.",
        // The time to explore in second.
        time : 55,
        // Possible loss of robots.
        lossCount : 0,
        // Possibility of loss.
        lossPossibility: 0,
        results : ["Just a piece of cake!"],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 15,
            minDefensePower : 5,
            minHP : 5,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 55,
                rate : 1
            },
            ]
        },
    ],

    // Tier 3: Four scenes
    tier3 :[
        {
        name : "Guarded corridor",
        description : "You could see the sensors flashing. The camera is monitoring the corridor.",
        // The time to explore in second.
        time : 85,
        // Possible loss of robots.
        lossCount : 2,
        // Possibility of loss.
        lossPossibility: 0.10,
        // Result descriptions
        results : [
                "You successfully disabled the sensors.",
                "One of your robots was detected by sensors and shot. It turned to scraps.",
                "Two of your robots was detected by sensors. They were destoried by rockets."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 18,
            minDefensePower : 12,
            minHP : 17,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Maintaince Room",
        description : "There are tons of stuffs. Is it possible to discover something?",
        // The time to explore in second.
        time : 75,
        // Possible loss of robots.
        lossCount : 1,
        // Possibility of loss.
        lossPossibility: 0.10,
        // Result descriptions
        results : [
                "You discovered lots of materials.",
                "One of your robots was damaged by a malfunctioning device.",
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 10,
            minHP : 10,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Area Control Room",
        description : "The light is flashing in the room. There must be more electric devices.",
        // The time to explore in second.
        time : 75,
        // Possible loss of robots.
        lossCount : 2,
        // Possibility of loss.
        lossPossibility: 0.12,
        // Result descriptions
        results : [
                "By disassembling devices, you got chips and metals.",
                "Unfortunately, one of your robot was disabled by strong electric shock in the room.",
                "Your robots triggered defense system, and two of them were shot into honeycomb."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 12,
            minHP : 15,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Area Engine Room",
        description : "Engine sound comes from the room. Is the engine running normally?",
        // The time to explore in second.
        time : 85,
        // Possible loss of robots.
        lossCount : 3,
        // Possibility of loss.
        lossPossibility: 0.15,
        // Result descriptions
        results : [
                "The engine was successfully shut down and disassembled.",
                "While shutting down the engine, one of your robots downs mysteriously.",
                "Your robots triggered defense system, and two of them were shot into honeycomb.",
                "The power engine explodes and blasts the room."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 12,
            minHP : 15,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },
    ],

    // Tier 4: Five scenes
    tier4: [
        {
        name : "Robot guarded corridor",
        description : "Couples of robots are moving in the corridor. Are they friendly?",
        // The time to explore in second.
        time : 100,
        // Possible loss of robots.
        lossCount : 3,
        // Possibility of loss.
        lossPossibility: 0.15,
        // Result descriptions
        results : [
                "Seems the guards ignored your robots.",
                "Seems only a few guards hates you. One of your robot down.",
                "Guards noticed your robots. They knocked two your robots down.",
                "It is a tough fight. It costs three robots to take all guards down."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 23,
            minDefensePower : 15,
            minHP : 19,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Weapon Room",
        description : "Guns, shields and metal fists stacks in the room. Time to harvest!",
        // The time to explore in second.
        time : 80,
        // Possible loss of robots.
        lossCount : 2,
        // Possibility of loss.
        lossPossibility: 0.17,
        // Result descriptions
        results : [
                "The weapons in the room are damaged. Your robots recycled them.",
                "One rocket exploded. One robot is torn apart.",
                "Chain explosion blasts two robots away to space."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 20,
            minHP : 15,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Zone Control Room",
        description : "It says 'Authorized Personal Only'. But robot is not human, right?",
        // The time to explore in second.
        time : 100,
        // Possible loss of robots.
        lossCount : 4,
        // Possibility of loss.
        lossPossibility: 0.15,
        // Result descriptions
        results : [
                "By disassembling devices, you got chips and metals.",
                "One device suddenly exploded and killed one robot.",
                "Your robots triggered defense system, and two of them were shot into honeycomb.",
                "Defense system is activated when your robot enters the room. Fortunately your robot shut it down before it destories more robot.",
                "The devices explodes when your robots working. Four robots are involved and killed."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 20,
            minHP : 20,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Zone Engine Room",
        description : "You could see engine running. Is it safe to shut it down?",
        // The time to explore in second.
        time : 95,
        // Possible loss of robots.
        lossCount : 3,
        // Possibility of loss.
        lossPossibility: 0.17,
        // Result descriptions
        results : [
                "The engine was successfully shut down and disassembled.",
                "While shutting down the engine, one of your robots downs mysteriously.",
                "Your robots triggered defense system, and two of them were shot into honeycomb.",
                "Defense system triggered and blasts your robots, three robots are lost."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 15,
            minDefensePower : 20,
            minHP : 20,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Mini Robot Factory",
        description : "Half assembled robots lied on groud. Is the room a small factory?",
        // The time to explore in second.
        time : 80,
        // Possible loss of robots.
        lossCount : 1,
        // Possibility of loss.
        lossPossibility: 0.15,
        // Result descriptions
        results : [
                "Harvest time!",
                "A robot occasionally down.",
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 12,
            minHP : 15,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },
    ],

    // Tier 5: Six scenes
    tier5: [
        {
        name : "Heavily guarded corridor",
        description : "Turrents, robots are seen. Can your robot take them down?",
        // The time to explore in second.
        time : 130,
        // Possible loss of robots.
        lossCount : 4,
        // Possibility of loss.
        lossPossibility: 0.27,
        // Result descriptions
        results : [
                "Seems sensors are hacked. You are safe.",
                "Your lighting strike takes down most guards.",
                "Your lighting strike might suprise human, but not robots.",
                "It is a tough fight. It costs three robots to take all guards down.",
                "Your robots are surronded. You have a heavy loss."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 33,
            minDefensePower : 28,
            minHP : 26,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Sealed Weapon Room",
        description : "A sealed weapon room. What are in the room?",
        // The time to explore in second.
        time : 100,
        // Possible loss of robots.
        lossCount : 3,
        // Possibility of loss.
        lossPossibility: 0.22,
        // Result descriptions
        results : [
                "The weapons in the room are damaged. Your robots recycled them.",
                "One rocket exploded. One robot is torn apart.",
                "Chain explosion blasts two robots away to space.",
                "Big explosion! Your robot received heavy damage."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 14,
            minDefensePower : 30,
            minHP : 28,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Secondary Control Room",
        description : "Laser turrents are guarding this room.",
        // The time to explore in second.
        time : 105,
        // Possible loss of robots.
        lossCount : 3,
        // Possibility of loss.
        lossPossibility: 0.30,
        // Result descriptions
        results : [
                "By disassembling devices, you got chips and metals.",
                "One device suddenly exploded and killed one robot.",
                "Your robots triggered defense system, and two of them were shot into honeycomb.",
                "Laser cut your robots into pieces, and the explosion destories more robots.",
                
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 15,
            minDefensePower : 28,
            minHP : 30,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Secondary Engine Room",
        description : "Huge engine! Is it main engine?",
        // The time to explore in second.
        time : 135,
        // Possible loss of robots.
        lossCount : 4,
        // Possibility of loss.
        lossPossibility: 0.35,
        // Result descriptions
        results : [
                "The engine was successfully shut down and disassembled.",
                "While shutting down the engine, one of your robots downs mysteriously.",
                "The engine's EMP wave disabled your robots.",
                "Defense system triggered and blasts your robots, three robots are lost.",
                "Strong EMP wave blasts your robots, causing a heavy damage."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 22,
            minDefensePower : 33,
            minHP : 28,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Robot Storage Room",
        description : "Some lockers are open. Where did they go?",
        // The time to explore in second.
        time : 140,
        // Possible loss of robots.
        lossCount : 2,
        // Possibility of loss.
        lossPossibility : 0.20,
        // Result descriptions
        results : [
                "Harvest time!",
                "A robot occasionally down.",
                "One locker blasts when your robot opens it. Two robots are involved."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 12,
            minDefensePower : 12,
            minHP : 15,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Yellow Security Zone",
        description : "Yellow is only less than red. Do you understand?",
        // The time to explore in second.
        time : 180,
        // Possible loss of robots.
        lossCount : 5,
        // Possibility of loss.
        lossPossibility: 0.32,
        // Result descriptions
        results : [
                "Fortunately this zone has no guards.",
                "Most guards are broken.",
                "Little damage! You lose two robots.",
                "Guards are ready for your coming. However, they are not prepared.",
                "Your robots are surronded. Fight is tough, but your robots survives.",
                "This is yellow security zone, so you know."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 36,
            minDefensePower : 34,
            minHP : 30,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },
    ],

    // Tier 6: Seven scenes
    // Most dangerous area.
    tier6: [
        {
        name : "Locked Tunnel",
        description : "The Tunnel is locked down by heave metal door.",
        // The time to explore in second.
        time : 180,
        // Possible loss of robots.
        lossCount : 5,
        // Possibility of loss.
        lossPossibility: 0.45,
        // Result descriptions
        results : [
                "Unlocking the door does not trigger an alarm.",
                "The heavy door falls and crashes one robot.",
                "The heavy door falls and crashes two robots.",
                "Alarm is triggered. The door closes again, locks three robots in.",
                "Guards comes with alarm. You are not well prepared.",
                "The tunnel collapses and buries five robots."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 45,
            minDefensePower : 38,
            minHP : 35,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Captain's office",
        description : "Do you have any question for the Captain?",
        // The time to explore in second.
        time : 190,
        // Possible loss of robots.
        lossCount : 5,
        // Possibility of loss.
        lossPossibility: 0.48,
        // Result descriptions
        results : [
                "The door silently opened. The room is so quiet...",
                "***Unknown Electromagnetic Field Detected***",
                "***Unknown Electromagnetic Field Detected***",
                "***Unknown Electromagnetic Field Detected***",
                "***Unknown Electromagnetic Field Detected***",
                "***Unknown Electromagnetic Field Detected***"
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 20,
            minDefensePower : 48,
            minHP : 39,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Main Bridge",
        description : "The heart of the plant.",
        // The time to explore in second.
        time : 200,
        // Possible loss of robots.
        lossCount : 5,
        // Possibility of loss.
        lossPossibility: 0.55,
        // Result descriptions
        results : [
                "Empty bridge. What happened to the people here?",
                "When analyzing devices here, one of your robots silently stops working.",
                "One control panel exploded. Your lose two robots.",
                "Defense system activated. Laser cuts three robots into pieces.",
                "Tentacles appear, grab four robots and disappears.",
                "***Unknown Electromagnetic Field Detected***"
                
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 15,
            minDefensePower : 50,
            minHP : 45,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Main Engine Room",
        description : "That is the biggest engine you have ever seen.",
        // The time to explore in second.
        time : 210,
        // Possible loss of robots.
        lossCount : 4,
        // Possibility of loss.
        lossPossibility: 0.60,
        // Result descriptions
        results : [
                "The engine was successfully shut down and disassembled.",
                "While shutting down the engine, one of your robots downs mysteriously.",
                "The engine's EMP wave disabled your robots.",
                "Isolating valve suddenly closed, locked three robots in.",
                "***Unknown Electromagnetic Field Detected***"
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 30,
            minDefensePower : 47,
            minHP : 48,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Vehicle Room",
        description : "All kinds of vehicles. But you see mucus...",
        // The time to explore in second.
        time : 230,
        // Possible loss of robots.
        lossCount : 6,
        // Possibility of loss.
        lossPossibility: 0.60,
        // Result descriptions
        results : [
                "Harvest time!",
                "A robot falls in a hole and never appears.",
                "Two robots fall into an acid liquid pool.",
                "A vehicle falls from sky, and hits three robots.",
                "When your robots are inspecting a robot, it explodes. Four robots involved.",
                "A strange sound causes five robots out of control.",
                "***Unknown Electromagnetic Field Detected***"
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 50,
            minDefensePower : 62,
            minHP : 48,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Specimen Room",
        description : "Flesh and mucus. You have a bad feeling about this.",
        // The time to explore in second.
        time : 230,
        // Possible loss of robots.
        lossCount : 5,
        // Possibility of loss.
        lossPossibility: 0.60,
        // Result descriptions
        results : [
                "The tissue just stays there, but...",
                "Your robot is trapped by the flesh.",
                "Your robots are trapped by the flesh.",
                "Your robots are trapped by the flesh.",
                "Your robots are trapped by the flesh.",
                "You see an alien in tank. Is it..?"
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 60,
            minDefensePower : 60,
            minHP : 50,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },

        {
        name : "Hidden Room",
        description : "You found this room behind specimen room.",
        // The time to explore in second.
        time : 300,
        // Possible loss of robots.
        lossCount : 6,
        // Possibility of loss.
        lossPossibility: 0.66,
        // Result descriptions
        results : [
                "Nothing here..?",
                "One of your robot loses control.",
                "Two of your robot lose control.",
                "Three of your robot lose control.",
                "Four of your robot lose control.",
                "Five of your robot lose control.",
                "It is you in the tank! It is too shocking! You disconnect from your robots..."
            ],
        // The minimum requirement for robot group.
        requirement : {
            minAttackPower : 80,
            minDefensePower : 80,
            minHP : 80,
            },
        loot : [
            {
                resourceName : "res_Scrap",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Lube",
                quantity : 70,
                rate : 0.8
            },
            ]
        },
    ]
}