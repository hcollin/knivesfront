
const nordicMap = {
    game: {
        id: null,
        turn: 1
    },
    map: [
        "LLLLWWWWWWWWWWW",
        "LLLWWWWWLLLLLWW",
        "WWWWWWWLLLLLLLL",
        "WWWWWWLLLLLLLLL",
        "WWWWWLLLLLLLLLL",
        "WWWWLLLLWWLLLLL",
        "WWWLLLLLWWLLLLL",
        "WWLLLLLWWLLLLLL",
        "WWLLLLLWWLLLLLL",
        "WWLLLLLWWLLLLLL",
        "WWWLLLLLWWWWWWL",
        "WWWWLLLLWWLLLLL",
        "WWLLWLLLWWWLLLL",
        "WLLLWLLWWWLLLLL",
        "WWLLWWWWWWLLLLL"
    ],
    cities: [
        {
            id: "hels",
            name: "Helsinki",
            size: 2,
            x: 11,
            y: 9,
            owner: "finl"
        },
        {
            id: "tamp",
            name: "Tampere",
            size: 1,
            x: 10,
            y: 7,
            owner: null
        },
        {
            id: "turk",
            name: "Turku",
            size: 1,
            x: 9,
            y: 9,
            owner: null
        },
        {
            id: "stoc",
            name: "Stockholm",
            size: 2,
            x: 7,
            y: 10,
            owner: "sver"
        },
        {
            id: "malm",
            name: "Malmö",
            size: 1,
            x: 5,
            y: 13,
            owner: null
        },
        {
            id: "jonk",
            name: "Jonköping",
            size: 1,
            x: 5,
            y: 11,
            owner: null
        },
        {
            id: "oslo",
            name: "Oslo",
            x: 4,
            y: 10,
            size: 2,
            owner: "nors"
        },
        {
            id: "berg",
            name: "Bergen",
            x: 2,
            y: 8,
            size: 1,
            owner: null
        },
        {
            id: "ales",
            name: "Ålesund",
            x: 3,
            y: 6,
            size:1,
            owner: null
        },
        {
            id: "koph",
            name: "Köpenhagen",
            x: 3,
            y: 13,
            size: 2,
            owner: null
        },
        {
            id: "esbj",
            name: "Esbjerg",
            x: 1,
            y: 13,
            size: 1,
            owner: null
        },
        {
            id: "tall",
            name: "Tallinn",
            x: 11,
            y: 11,
            size: 1,
            owner: null
        },
        {
            id: "riga",
            name: "Riga",
            x: 10,
            y: 13,
            size: 1,
            owner: null
        },
        {
            id: "viln",
            name: "Vilnius",
            x: 13,
            y: 14,
            size: 1,
            owner: null
        },
        {
            id: "stpt",
            name: "St.Petersburg",
            x: 14,
            y: 10,
            size: 3,
            owner: null
        },
        {
            id: "mora",
            name: "Mora",
            x: 5,
            y: 8,
            size: 1,
            owner: null
        },
        {
            id: "sund",
            name: "Sundsvall",
            x: 6,
            y: 7,
            size: 1,
            owner: null
        },
        {
            id: "lule",
            name: "Lule",
            x: 7,
            y: 5,
            size: 1,
            owner: null
        },
        {
            id: "oulu",
            name: "Oulu",
            size: 1,
            x: 10,
            y: 5,
            owner: null
        },
        {
            id: "reyk",
            name: "Reykjavik",
            size: 1,
            x: 1,
            y: 1,
            owner: null
        },
        {
            id: "trom",
            name: "Tromso",
            size: 1,
            x: 7,
            y: 2,
            owner: null
        },
        {
            id: "murm",
            name: "Murmansk",
            size: 1,
            x: 14,
            y: 2,
            owner: null
        },
        {
            id: "joen",
            name: "Joensuu",
            size: 1,
            x: 13,
            y: 7,
            owner: null
        },
        {
            id: "kalmar",
            name: "Kalmar",
            size: 1,
            x: 7,
            y: 12,
            owner: null
        },
        {
            id: "rova",
            name: "Rovaniemi",
            size: 1,
            x: 11,
            y: 3,
            owner: null
        },
        {
            id: "tron",
            name: "Trondheim",
            size: 1,
            x: 5,
            y: 6,
            owner: null
        },

    ],
    empires: [
        {
            id: "finl",
            name: "Finlande",
            color: "#4444FF",
            bgColor: "#FFFFFF",
            capital: "hels",
            cities: [ "hels" ],
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
            cities: [ "stoc" ],
            gold: 5,
            techs: [],

            allies: [],
            wars: [],
            doneForTurn: false
        },
        {
            id: "nors",
            name: "Norskor",
            color: "#FFFFFF",
            bgColor: "#DD0000",
            capital: "oslo",
            cities: [ "oslo" ],
            gold: 5,
            techs: [],
            allies: [],
            wars: [],
            doneForTurn: false
        }
    ],
    units: [
        {
            id: "fi001",
            type: "INF",
            name: "Infantry",
            x: 11,
            y: 8,
            health: 10,
            flags: [],
            owner: "finl"
        },
        {
            id: "se001",
            type: "INF",
            name: "Infantry",
            x: 5,
            y: 9,
            health: 10,
            flags: [],
            owner: "sver"
        },
        {
            id: "no001",
            type: "INF",
            name: "Infantry",
            x: 3,
            y: 9,
            health: 10,
            flags: [],
            owner: "nors"
        }
    ],
    commands: []
};


export {nordicMap};