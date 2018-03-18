
const defaultUnits = {
    "INF": {
        name: "Infantry",
        health: 10,
        maxHealth: 10,
        power: 10,
        type: "INF",
        cost: 3,
        upkeep: 1,
        canMoveIn: ["LAND", "CITY", "CONVOY"]
    },
    "TNK": {
        name: "Tank",
        health: 20,
        maxHealth: 20,
        power: 20,
        type: "TNK",
        cost: 7,
        upkeep: 3,
        canMoveIn: ["LAND", "CITY", "CONVOY"]
    },
    "FLE": {
        name: "Destroyer",
        health: 20,
        maxHealth: 20,
        power: 10,
        type: "FLE",
        cost: 4,
        upkeep: 2,
        canMoveIn: ["WATER", "CITY"]
    },
    "BTS": {
        name: "Battleship",
        health: 30,
        maxHealth: 20,
        power: 20,
        type: "FLE",
        cost: 9,
        upkeep: 2,
        canMoveIn: ["WATER", "CITY"]

    },
    "FGH": {
        name: "Fighter",
        health: 5,
        maxHealth: 5,
        power: 5,
        type: "FGH",
        cost: 5,
        upkeep: 1,
        canMoveIn: ["CITY"]
    },
    "BMB": {
        name: "Bomber",
        health: 10,
        maxHealth: 10,
        power: 5,
        type: "BMB",
        cost: 7,
        upkeep: 2,
        canMoveIn: ["CITY"]
    }
};

export { defaultUnits };