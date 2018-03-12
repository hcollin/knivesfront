
import UiStore from '../Stores/UiStore';
import GameStore from '../Stores/GameStore';
import DummyServer from '../Services/DummyServer';

// NEW BELOW

import DummyDataServer from './DummyDataServer';

import GameDataStore from '../Stores/GameDataStore';
import ClientStore from '../Stores/ClientStore';
import MapStore from '../Stores/MapStore';

import GameService from '../Services/GameService';
import EmpireService from '../Services/EmpireService';

class ActionService {

    constructor() {
        this.ponger = null;
    }


    newGame() {
        DummyDataServer.createGame().then(gameData => {
            GameDataStore.setState(gameData);
            GameService.newGame();
            // MapStore.createMapFromData(gameData.map);
            this.startGame();
        });

    }

    joinGame() {

    }

    startGame() {

        DummyDataServer.startGame(this.updateFromServer).then(res => {
            GameService.startGame();
            UiStore.setView("GAMEVIEW");
            console.log("Game started");
        }).catch(err => {
            console.error(err);
        });

    }


    changeActiveEmpire(empire) {
        GameStore.setActiveEmpire(empire);
    }

    nextTurn() {
        DummyServer.confirmTurn(GameStore.activeEmpire).then(res => {
            GameStore.activeEmpire.setDoneForTurn();
            ClientStore.setIAmDone(true);
            console.log("Turn Done");
        }).catch(err => {
            console.error("Turn confirmation failed");
        });
    }

    updateFromServer() {

        console.log("callback from server");

        // DummyServer.getGameData().then(res => {
        //
        //     if (res.turn !== GameStore.turn) {
        //         console.log("NEW TURN HAS ARRIVED!");
        //         GameStore.setTurn(res.turn);
        //         GameStore.empires.forEach(empire => {
        //             empire.prepareNewTurn();
        //         });
        //     } else {
        //         GameStore.empires.forEach(empire => {
        //             if (res.empiresDone.includes(empire.name)) {
        //                 empire.setDoneForTurn();
        //             }
        //         });
        //     }
        //
        // }).catch(err => {
        //     console.error("FAILED TO GET DATA", err);
        // });
    }

}

export default new ActionService();