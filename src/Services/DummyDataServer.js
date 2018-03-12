import uuid from 'uuid';

import { defaultMap } from '../Data/Maps/default';

const testState = {
    game: {
        id: null,
        turn: 0
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
            size: 1,
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
            capital: "hell",
            cities: [ "hell", "turk",  "tamp" ],
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
        }
    ],
    commands: []
};




function cloneArray(arr) {
    const newArr = [];
    arr.map(val => {

        if(Array.isArray(val)) {
            newArr.push(cloneArray(val));
            return;
        }

        if(typeof val === "object") {
            newArr.push(cloneObject(val));
            return;
        }

        newArr.push(val);
    });

    return newArr;
}

function cloneObject(obj) {

    if(obj === null) {
        return null;
    }

    const newObject = {};


    const keys = Object.keys(obj);
    keys.map(key => {
        const oVal = obj[key];

        if(Array.isArray(oVal)) {
            newObject[key] = cloneArray(oVal);
            return;
        }

        if(typeof oVal === "object") {
            newObject[key] = cloneObject(oVal);
            return;
        }

        newObject[key] = oVal;

    });

    return newObject;
}


function deepishClone(orig) {
    if(Array.isArray(orig)) {
        return cloneArray(orig);
    }
    if(typeof orig === "object") {
        return cloneObject(orig);
    }
    return orig;
}


class GameState {

    game = {};
    map = [];
    empires = [];
    units = [];
    cities = [];
    commands = [];

    constructor() {

    }

    cloneMe() {
        return GameState.cloneState(this);
    }

    static cloneState(pstate) {
        const state = new GameState();

        state.game = deepishClone(pstate.game);
        state.map = deepishClone(pstate.map);
        state.empires = deepishClone(pstate.empires);
        state.units = deepishClone(pstate.units);
        state.cities = deepishClone(pstate.cities);
        state.commands = deepishClone(pstate.commands);

        return state;
    }
}



class DummyDataServer {

    constructor() {
        this.stateHistory = [];
        this.currentState = null;
        this.playersDone = [];
        this.commands = [];

        this.listeners = [];
    }

    createGame() {
        return new Promise((resolve, reject) => {
            this.stateHistory = [];
            this.currentState = GameState.cloneState(testState);
            this.currentState.game.id = uuid.v4();
            this.playersDone = [];
            this.commands = [];
            resolve(this.currentState);
        });
    }

    startGame(listener) {
        return new Promise((resolve, reject) => {
            if (typeof listener === "function") {
                this.listeners.push(listener);
                resolve();
            } else {
                reject("Provide a callback function for changes");
            }
        });
    }

    getFullState() {
        return new Promise((resolve, reject) => {
            resolve(this.currentState.cloneMe());
        });

    }

    empireIsReady(empireId) {
        return new Promise((resolve, reject) => {
            if (!this.playersDone.includes(empireId)) {
                this.playersDone.push(empireId);
                this.currentState.empires.forEach(empire => {
                    empire.doneForTurn = this.playersDone.includes(empireId);
                });
                this._triggerStatePush();
                resolve();
            } else {
                reject();
            }
        });
    }

    isEmpireReady(empireId) {
        return Promise((resolve, reject) => {
            if(this.playerDone.includes(empireId)) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    }

    addCommand(cmd) {
        return new Promise((resolve, reject) => {
            if(!this._removeCommandIfExists(cmd)) {
                cmd.id = uuid.v4();
            }
            this.commands.push(cmd);
            resolve();
        });
    }

    removeCommand(cmd) {
        return new Promise((resolve, reject) => {
            if(this._removeCommandIfExists(cmd)) {
                resolve();
            } else {
                reject();
            }
        });
    }

    _removeCommandIfExists(cmd) {
        const index = this.commands.findIndex(ocmd => {
            return ocmd.id === cmd.id || ocmd.to === cmd.to;
        });
        if (index > -1) {
            this.commands.splice(index, 1);
            return true;
        }
        return false;
    }

    _processTurn() {
        this.currentState.commands = this.commands.concat([]);
        this.stateHistory.push(this.currentState.cloneMe());
        const newState = GameState.cloneState(this.currentState);

        // RUN COMMANDS HERE!!


        newState.game.turn = this.stateHistory.length + 1;
        newState.commands = [];

        this.playersDone = [];
        this.commands = [];

        this.currentState = newState;
        this._triggerStatePush();
    }


    _triggerStatePush() {
        console.log("Push new State to clients");

        this.listeners.map( listCb => {
            if(typeof listCb === "function") {
                listCb(this.currentState);
            }
        });

    }

}


export default new DummyDataServer();