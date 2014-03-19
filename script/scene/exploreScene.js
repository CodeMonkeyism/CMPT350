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
            minGroupDefensePower : 5,
            },
        loot : [
            {
                resourceName : "res_Power",
                quantity : 20,
                rate : 1
            },
            {
                resourceName : "res_Metal",
                quantity : 20,
                rate : 1
            },
            {
                resourceName : "res_Fuel",
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
            minGroupDefensePower : 8,
            },
        loot : [
            {
                resourceName : "res_Power",
                quantity : 60,
                rate : 1
            },
            {
                resourceName : "res_Metal",
                quantity : 60,
                rate : 1
            },
            {
                resourceName : "res_Fuel",
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
            minGroupDefensePower : 8,
            },
        loot : [
            {
                resourceName : "res_Power",
                quantity : 70,
                rate : 0.9
            },
            {
                resourceName : "res_Metal",
                quantity : 70,
                rate : 1
            },
            {
                resourceName : "res_Fuel",
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
            minGroupDefensePower : 8,
            },
        loot : [
            {
                resourceName : "res_Power",
                quantity : 75,
                rate : 0.8
            },
            {
                resourceName : "res_Metal",
                quantity : 75,
                rate : 1
            },
            {
                resourceName : "res_Fuel",
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
            minGroupDefensePower : 8,
            },
        loot : [
            {
                resourceName : "res_Metal",
                quantity : 55,
                rate : 1
            },
            ]
        },
    ],
}