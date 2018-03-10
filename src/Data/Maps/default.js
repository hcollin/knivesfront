


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
            size: 1
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
            size: 1
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
        }
    ],
    empires: [
        {
            name: "Finlande",
            capital: 0,
            cities: [ 1, 2 ]
        },
        {
            name: "Sverrige",
            capital: 3,
            cities: [4, 5]
        }
    ]
};

export { defaultMap };