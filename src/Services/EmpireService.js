
import GameDataStore from '../Stores/GameDataStore';
import ClientStore from '../Stores/ClientStore';
import DummyDataServer from "./DummyDataServer";

class EmpireService {

    list() {
        return GameDataStore.state.empires;
    }

    getById(id) {
        return GameDataStore.state.empires.find(empire => {
            return empire.id === id;
        });
    }

    getByName(name) {
        return GameDataStore.state.empires.find(empire => {
            return empire.name === name;
        });
    }

    getFirst() {
        return GameDataStore.state.empires[0];
    }

    isDoneForTurn(empireId=ClientStore.activeEmpireId) {
        const empire = this.getById(empireId);
        return empire.doneForTurn;
    }

    getActive() {
        return ClientStore.activeEmpire;
    }

    getColorScheme(empireId=ClientStore.activeEmpireId) {
        const empire = this.getById(empireId);
        return {
            color: empire.color,
            backgroundColor: empire.bgColor
        };
    }


}


export default new EmpireService();