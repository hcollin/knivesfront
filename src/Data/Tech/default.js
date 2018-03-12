
const defaultTechTree = {
    "a001": {
        id: "a001",
        name: "Fighter Air unit",
        prereq: [],
    },
    "a010": {
        id: "a010",
        name: "Air unit range +2",
        prereq: ["a001"]
    },
    "a011": {
        id: "a011",
        name: "Air unit range +4",
        prereq: ["a010"]
    },
    "a020": {
        id: "a020",
        name: "Fighter power +1",
        prereq: ["a001"]
    },
    "a021": {
        id: "a021",
        name: "Fighter power +2",
        prereq: ["a020"]
    }
};

export { defaultTechTree };