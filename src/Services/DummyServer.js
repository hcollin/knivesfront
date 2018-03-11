class DummyServer {

    constructor() {
        this.turn = 0;
        this.currentCommands = [];
        this.commandHistory = [];
        this.turnConfirmations = [];
    }

    submitCommand(command) {
        return new Promise((resolve, reject) => {
            this.commandHistory.push(command);
            resolve();
        });
    }

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


    _processTurn() {
        if(this.turnConfirmations.length === 3) {
            console.log("SERVER:OK:Prosessing turn...");
            this.commandHistory.push(this.currentCommands);
            this.currentCommands = [];
            this.turn++;
            this.turnConfirmations = [];
            console.log("SERVER:OK: Starting turn " + this.turn);
        }
    }


}

export default new DummyServer();