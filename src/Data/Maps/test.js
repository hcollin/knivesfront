
const testMap = {
    game: {
        id: null,
        turn: 1
    },
    map: [
        "WWWWWWLLLLLLWWW",
        "WWWLLLLLLLLLLWW",
        "WWLLLMMMMLLLLWW",
        "WLLLMLLMMMLLLWW",
        "LLLLLLLLLLLLLLW",
        "LLLLLLWWLLLLLLL",
        "LLLWWWWWLLLLLLL",
        "LLLLWWWWWWLLLLL",
        "LLLLLLWWWWWWLLL",
        "LLLLLLWWLLLWWWL",
        "LLLLLLWLLLLLLLW",
        "LLLLLLLLLLLLLLL",
        "LLLLLLLLLLLLLLL",
        "LLLLLLWWWLLLLLL",
        "LLLLWWWWWWLLLLL"
    ],
    cities: [
        {
            id: "hels",
            name: "Helsinki",
            size: 2,
            x: 3,
            y: 1,
            owner: "finl"
        },
        {
            id: "tamp",
            name: "Tampere",
            size: 1,
            x: 2,
            y: 3,
            owner: "finl"
        },
        {
            id: "turk",
            name: "Turku",
            size: 1,
            x: 7,
            y: 1,
            owner: "finl"
        },
        {
            id: "stoc",
            name: "Stockholm",
            size: 2,
            x: 10,
            y: 7,
            owner: "sver"
        },
        {
            id: "malm",
            name: "Malmö",
            size: 1,
            x: 13,
            y: 8,
            owner: "sver"
        },
        {
            id: "upps",
            name: "Uppsala",
            size: 1,
            x: 13,
            y: 6,
            owner: "sver"
        },
        {
            id: "berl",
            name: "Berlin",
            x: 5,
            y: 9,
            size: 2,
            owner: "germ"
        },
        {
            id: "bonn",
            name: "Bonn",
            x: 3,
            y: 8,
            size: 1,
            owner: "germ"
        },
        {
            id: "munc",
            name: "Munchen",
            x: 3,
            y: 11,
            size:1,
            owner: "germ"
        },
        {
            id: "bott",
            name: "Bottlepeck",
            x: 1,
            y: 6,
            size: 1,
            owner: null
        },
        {
            id: "loot",
            name: "Lootville",
            x: 6,
            y: 3,
            size: 1,
            owner: null
        },
        {
            id: "pill",
            name: "Pillaburg",
            x: 12,
            y: 3,
            size: 1,
            owner: null
        }
    ],
    empires: [
        {
            id: "finl",
            name: "Finlande",
            color: "#4444FF",
            bgColor: "#FFFFFF",
            capital: "hels",
            cities: [ "hels", "turk",  "tamp" ],
            gold: 5,
            techs: [],
            allies: [],
            wars: [],
            doneForTurn: false

        },
        {
            id: "sver",
            name: "Sverrige",
            color: "#FFFF44",
            bgColor: "#0000FF",
            capital: "stoc",
            cities: [ "stoc", "upps", "malm"],
            gold: 5,
            techs: [],
            allies: [],
            wars: [],
            doneForTurn: false
        },
        {
            id: "germ",
            name: "Germsmany",
            color: "yellow",
            bgColor: "red",
            capital: "berl",
            cities: ["berl", "bonn", "munc"],
            gold: 5,
            techs: [],
            allies: [],
            wars: [],
            doneForTurn: false
        }
    ],
    units: [
        {
            id: "inf1",
            type: "INF",
            name: "Infantry",
            x: 3,
            y: 1,
            health: 10,
            flags: [],
            owner: "finl"
        },
        {
            id: "inf4",
            type: "INF",
            name: "Infantry",
            x: 10,
            y: 2,
            health: 10,
            flags: [],
            owner: "finl"
        },
        {
            id: "fle1",
            type: "FLE",
            name: "Destroyer",
            x: 0,
            y: 0,
            health: 20,
            flags: [],
            owner: "finl"
        },
        {
            id: "inf2",
            type: "INF",
            name: "Infantry",
            x: 10,
            y: 7,
            health: 10,
            flags: [],
            owner: "sver"
        },
        {
            id: "inf3",
            type: "INF",
            name: "Infantry",
            x: 5,
            y: 9,
            health: 10,
            flags: [],
            owner: "germ"
        },
        {
            id: "inf5",
            type: "INF",
            name: "Infantry",
            x: 14,
            y: 14,
            health: 10,
            flags: [],
            owner: "germ"
        }
    ],
    commands: []
};


export {testMap};