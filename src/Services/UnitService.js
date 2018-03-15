import GameDataStore from '../Stores/GameDataStore';
import ClientStore from '../Stores/ClientStore';


class UnitService {

    getById(id) {
        return GameDataStore.state.units.find(unit => {
            return unit.id === id;
        });
    }

    getByCoord(x, y) {
        return GameDataStore.state.units.find(unit=> {
            return unit.x === x && unit.y === y;
        });
    }

    isMyUnit(unit) {
        return unit.owner && ClientStore.activeEmpireId === unit.owner;
    }
}


export default new UnitService();