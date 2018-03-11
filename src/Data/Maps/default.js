


const defaultMap = {
    map:  "WWWWWWLLLLLLWWW|" +
    "WWWLLLLLLLLLLWW|" +
    "WWLLLMMMMLLLLWW|" +
    "WLLLMLLMMMLLLWW|" +
    "LLLLLLLLLLLLLLW|" +
    "LLLLLLWWLLLLLLL|" +
    "LLLWWWWWLLLLLLL|" +
    "LLLLWWWWWWLLLLL|" +
    "LLLLLLWWWWWWLLL|" +
    "LLLLLLWWLLLWWWL|" +
    "LLLLLLWLLLLLLLW|" +
    "LLLLLLLLLLLLLLL|" +
    "LLLLLLLLLLLLLLL|" +
    "LLLLLLWWWLLLLLL|" +
    "LLLLWWWWWWLLLLL",
    cities: [
        {
            name: "Helsinki",
            x: 3,
            y: 1,
            size: 2
        },
        {
            name: "Tampere",
            x: 2,
            y: 3,
            size: 1
        },
        {
            name: "Turku",
            x: 7,
            y: 1,
            size: 1
        },
        {
            name: "Stockholm",
            x: 10,
            y: 7,
            size: 2
        },
        {
            name: "Malmo",
            x: 13,
            y: 8,
            size: 1
        },
        {
            name: "Uppsala",
            x: 13,
            y: 6,
            size: 1
        },
        {
            name: "Berlin",
            x: 5,
            y: 9,
            size: 2
        },
        {
            name: "Bonn",
            x: 3,
            y: 8,
            size: 1
        },
        {
            name: "Munchen",
            x: 3,
            y: 11,
            size:1
        },
        {
            name: "Bottlepeck",
            x: 1,
            y: 6,
            size: 1
        },
        {
            name: "Lootville",
            x: 6,
            y: 3,
            size: 1
        },
        {
            name: "Pillaburg",
            x: 12,
            y: 3,
            size: 1
        }
    ],
    empires: [
        {
            name: "Finlande",
            color: "#4444FF",
            bgColor: "#FFFFFF",
            capital: "Helsinki",
            cities: [ "Turku",  "Tampere" ]
        },
        {
            name: "Sverrige",
            color: "#FFFF44",
            bgColor: "#0000FF",
            capital: "Stockholm",
            cities: ["Uppsala", "Malmo"]
        },
        {
            name: "Germsmany",
            color: "yellow",
            bgColor: "red",
            capital: "Berlin",
            cities: ["Bonn", "Munchen"]
        }
    ]
};

export { defaultMap };