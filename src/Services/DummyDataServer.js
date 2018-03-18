import uuid from 'uuid';

import { defaultMap } from '../Data/Maps/default';
import { testMap } from '../Data/Maps/test';
import { nordicMap } from '../Data/Maps/nordic';

const testState = nordicMap;



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


class Combat {

    constructor() {
        this.conflicts = {};
        this.units = [];
        this.supporting = [];
    }

    addUnit(unit) {
        const key = unit.x + "-"+unit.y;
        if(!this.conflicts[key]) {
            this.conflicts[key] = [];
        }
        const participant = {
            unit: unit,
            side: unit.owner,
            type: "FULL"
        };
        this.conflicts[key].push(participant);
    }

    addSupport(unit, toCoords) {
        const key = toCoords.x + "-"+toCoords.y;
        if(!this.conflicts[key]) {
            this.conflicts[key] = [];
        }
        const participant = {
            unit: unit,
            side: unit.owner,
            type: "SUPPORT"
        };
        this.conflicts[key].push(participant);

    }

    fight() {
        Object.keys(this.conflicts).map(participants => {

        })
    }



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

    openGame(listener) {

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
                    empire.doneForTurn = this.playersDone.includes(empire.id);
                });

                if(this.playersDone.length === this.currentState.empires.length) {
                    this._processTurn();
                } else {
                    this._triggerStatePush({
                        action: "UPDATE",
                        data: this.currentState.cloneMe()
                    });
                }
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
            this._removeCommandIfExists(cmd);
            cmd.id = uuid.v4();
            this.commands.push(cmd);
            resolve(cmd.id);
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
        console.log("Remove?", cmd.type, cmd.to, index, this.commands[index]);
        if (index > -1) {
            const removed = this.commands.splice(index, 1);
            console.log("\tREMOVED", removed);
            return true;
        }
        return false;
    }

    _processTurn() {
        this.currentState.commands = this.commands.concat([]);
        this.stateHistory.push(this.currentState.cloneMe());
        let newState = GameState.cloneState(this.currentState);

        newState = this._processCommands(newState);

        // Check conquered cities
        this._conquestOfCities(newState);


        // Add gold to empires
        newState.empires.forEach(empire => {
           newState.cities.map(city => {
              if(empire.cities.includes(city.id)) {
                  empire.gold += city.size;
              }
           });

        });

        // Turn count up by 1
        newState.game.turn = this.stateHistory.length + 1;

        // Reset doneForTurn for empires
        newState.empires.forEach(emp => {
            emp.doneForTurn = false;
        });

        // Reset commands
        newState.commands = [];

        this.playersDone = [];
        this.commands = [];

        this.currentState = newState.cloneMe();
        this._triggerStatePush({action: "NEWTURN", data: this.currentState.cloneMe()});
    }


    /**
     * COMBAT RESOLVER!
     * @param newState
     * @private
     */
    _combat(newState) {
        console.log("COMBAT", newState);

        const combat = new Combat();

        newState.units.map(unit => {
            combat.addUnit(unit);
        });

        combat.fight();


        // const unitsInAreas = {};
        // newState.units.map(unit => {
        //     const key = unit.x + "-"+unit.y;
        //     if(unitsInAreas[key] === undefined) {
        //         unitsInAreas[key] = [];
        //     }
        //     unitsInAreas[key].push(unit);
        // });
        //
        // const combats = [];
        //
        // Object.keys(unitsInAreas).map(key => {
        //     if(unitsInAreas[key].length > 1) {
        //         const conflict = new Combat(unitsInAreas[key], newState.units);
        //         conflict.
        //     }
        // });
        //
        // combats.map(combat => {
        //     console.log("\tUnits in combat:", combat);
        //     combat.map(attacker => {
        //         combat.forEach(defender => {
        //             if(defender.id !== attacker.id) {
        //                 defender.health -= attacker.power;
        //             }
        //         })
        //     });
        // })

    }

    /**
     * Check who controls which city
     * @param newState
     * @private
     */
    _conquestOfCities(newState) {
        // newState.units.map(unit => {
        //
        // });
    }

    // Turn processing
    _processCommands(newState) {

        console.log("\nCommands", this.commands.length, "\n", this.commands);

        // this.newState = Object.assign({}, this.gameState);
        const cmdOrder = [
            {type: "UNIT_MOVE", processor: this._cmdUnitMove.bind(this)},
            {type: "UNIT_SUPPORT", processor: this._cmdUnitSupport.bind(this)},
            {do: this._combat.bind(this)},

            {type: "CITY_HEAL", processor: this._cmdCityHeal.bind(this)},
            {type: "CITY_INFRA", processor: this._cmdCityInfra.bind(this)},
            {type: "CITY_BUILD", processor: this._cmdCityHeal.bind(this)}
        ];

        cmdOrder.forEach(commandType => {
            if(commandType.do) {
                commandType.do(newState);
            } else {
                const commandsForType = this.commands.filter(cmd => cmd.type === commandType.type);
                commandsForType.map(command => {
                    commandType.processor(command, newState);
                });
            }
        });

        return newState;
    }


    _cmdUnitMove(command, newState) {
        console.log("SERVER:CMD:MOVE", command.to);
        const unitIndex = newState.units.findIndex(unit => unit.id === command.to);
        console.log("SERVER:CMD:MOVE", command.to, unitIndex, command.params);
        newState.units[unitIndex].x = command.params.x;
        newState.units[unitIndex].y = command.params.y;
    }

    _cmdUnitSupport(command, newState) {
        console.log("SERVER:CMD:SUPPORT", command);
    }

    _cmdCityInfra(command, newState) {
        console.log("SERVER:CMD:INFRA", command.to);

        const cityIndex= newState.cities.findIndex(city => city.id === command.to);
        newState.cities[cityIndex].size++;
    }

    _cmdCityHeal(command, newState) {
        console.log("SERVER:CMD:HEAL", command.to);

        // const cityIndex= newState.cities.findIndex(city => city.id === command.to);
        // newState.cities[cityIndex].size++;
    }

    _cmdCityBuild(command, newState) {
        console.log("SERVER:CMD:BUILD", command.to, command.params);
    }

    _triggerStatePush(eventObject) {
        console.log("Push new State to clients");

        this.listeners.map( listCb => {
            if(typeof listCb === "function") {
                listCb(eventObject);
            }
        });

    }

}


export default new DummyDataServer();