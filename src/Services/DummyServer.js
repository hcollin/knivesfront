
import { defaultMap } from '../Data/Maps/default';

class DummyServer {

    constructor() {
        this.turn = 0;
        this.currentCommands = [];
        this.commandHistory = [];
        this.turnConfirmations = [];

        this.gameState = null;
        this.newState = null;
    }


    createGame() {
        return new Promise((res, rej) => {
           res(defaultMap);
        });

    }

    joinGame() {

    }

    startGame(state) {
        return this.saveState(state);
    }

    saveState(state) {
        return new Promise((res, rej) => {
            if(this.gameState === null) {
                this.gameState = state;
                res();
            } else {
                rej();
            }
        })


    }




    /**
     * Submit a command to the server
     *
     * @param command
     * @returns {Promise}
     */
    submitCommand(command) {
        return new Promise((resolve, reject) => {
            console.log("SERVER:OK: new command", command);
            this.currentCommands.push(command);
            resolve();
        });
    }


    /**
     * Remove non confirmed command to the server
     *
     * @param commandId
     * @returns {Promise}
     */
    cancelCommand(commandId) {
        return new Promise((resolve, reject) => {
            const commandIndex = this.currentCommands.findIndex(cmd => {
                return cmd.id === commandId;
            });
            if (commandIndex > -1) {
                this.currentCommands = this.currentCommands.splice(commandIndex, 1);
                resolve();
            } else {
                reject();
            }
        });
    }

    /**
     * Get game data
     *
     * @returns {Promise}
     */
    getGameData() {
        return new Promise((resolve, reject) => {

            const doneEmpires = this.turnConfirmations.reduce(
                (arr, cur) => {
                    arr.push(cur.name);
                    return arr;
                }, []);

           resolve({
               turn: this.turn,
               empiresDone: doneEmpires
           });


        });
    }

    /**
     * Confirm commands for this turn.
     *
     * @param empire
     * @returns {Promise}
     */
    confirmTurn(empire) {
        return new Promise((resolve, reject) => {
            if(this.turnConfirmations.findIndex(emp => emp.id === empire.id) === -1) {
                this.turnConfirmations.push(empire);
                console.log("SERVER:OK; Turn confirmed by " + empire.name);
                this._processTurn();
                resolve();
            } else {
                console.warn("SERVER:ERROR: Cannot confirm again by" + empire.name);
                reject();
            }
        });
    }

    /**
     * Process Turn
     *
     * @private
     */
    _processTurn() {
        if(this.turnConfirmations.length === 3) {
            console.log("SERVER:OK:Prosessing turn...", this.currentCommands, this.gameState);


            this.newState = Object.assign({}, this.gameState);
            console.log("NEW STATE", this.newState);
            this._processCommands();
            this.commandHistory.push(this.currentCommands);
            this.currentCommands = [];
            this.turn++;
            this.turnConfirmations = [];
            console.log("SERVER:OK: Starting turn " + this.turn);
        }
    }

    _processCommands() {

        // this.newState = Object.assign({}, this.gameState);
        const cmdOrder = [
            {type: "INFRA", processor: this._cmdCityInfra.bind(this)}
        ];


        cmdOrder.forEach(cmd => {
            const cmds = this.currentCommands.filter(cmd => cmd.type ===cmd.type);
            cmds.map(command=> {
                console.log(this.newState);
                cmd.processor(command);

            });
        })

    }

    _cmdCityInfra(command) {
        console.log("SERVER:CMD:INFRA", command.to.name);
        console.log("NEW STATE", this.newState);
        const cityStore = this.newState.map.cities.find(city => city.id === command.to.id);
        cityStore.size++;
    }


}

export default new DummyServer();