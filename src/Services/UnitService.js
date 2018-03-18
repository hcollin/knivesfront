import GameDataStore from '../Stores/GameDataStore';
import ClientStore from '../Stores/ClientStore';

import { defaultUnits } from '../Data/Units/default';

class UnitService {

    getById(id) {
        return this._addStats(GameDataStore.state.units.find(unit => {
            return unit.id === id;
        }));
    }

    getByCoord(x, y) {
        return this._addStats(GameDataStore.state.units.find(unit=> {
            return unit.x === x && unit.y === y;
        }));
    }

    isMyUnit(unit) {
        return unit.owner && ClientStore.activeEmpireId === unit.owner;
    }

    // Add default parameters for unit type
    _addStats(gameUnit) {
        return Object.assign({}, defaultUnits[gameUnit.type], gameUnit);
    }

}


export default new UnitService();