
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


    changeActiveEmpire(empireId) {
        ClientStore.setActiveEmpire(EmpireService.getById(empireId));
    }

    nextTurn() {
        DummyDataServer.empireIsReady(ClientStore.activeEmpireId).then(res => {
            console.log("Turn Done");
            if(ClientStore.selectedArea) {
                ClientStore.selectedArea.deactivate();
                ClientStore.setSelectedArea(null);
            }
        }).catch(err => {
            console.error("Turn confirmation failed", err);
        });
    }

    updateFromServer(eventObject) {

        console.log("\n\tCALLBACK from server", eventObject);

        switch(eventObject.action) {
            case "UPDATE":
                GameService.updateState(eventObject.data);
                break;
            case "NEWTURN":
                GameService.newTurnState(eventObject.data);
                break;
        }
    }

}

export default new ActionService();