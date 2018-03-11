import GameStore from '../Stores/GameStore';
import DummyServer from '../Services/DummyServer';

class ActionService {

    constructor() {
        this.ponger = setInterval(() => {
            this.updateFromServer();
        }, 1000);
    }

    changeActiveEmpire(empire) {
        GameStore.setActiveEmpire(empire);
    }

    nextTurn() {
        DummyServer.confirmTurn(GameStore.activeEmpire).then(res => {
            GameStore.activeEmpire.setDoneForTurn();
            console.log("Turn Done");
        }).catch(err => {
            console.error("TUrn confirmation failed");
        });
    }

    updateFromServer() {
        DummyServer.getGameData().then(res => {

            if (res.turn !== GameStore.turn) {
                console.log("NEW TURN HAS ARRIVED!");
                GameStore.setTurn(res.turn);
                GameStore.empires.forEach(empire => {
                    empire.prepareNewTurn();
                });
            } else {
                GameStore.empires.forEach(empire => {
                    if (res.empiresDone.includes(empire.name)) {
                        empire.setDoneForTurn();
                    }
                });
            }


            console.log("RES", res);
        }).catch(err => {
            console.error("FAILED TO GET DATA", err);
        })
    }

}

export default new ActionService();