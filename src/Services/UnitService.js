import GameDataStore from '../Stores/GameDataStore';
import ClientStore from '../Stores/ClientStore';
import MapStore from '../Stores/MapStore';
import { defaultUnits } from '../Data/Units/default';

class UnitService {

    getById(id) {
        return this._addStats(GameDataStore.state.units.find(unit => {
            return unit.id === id;
        }));
    }

    getByCoord(x, y) {
        if(!this.unitInCoords(x, y)) {
            return false;
        }
        return this._addStats(GameDataStore.state.units.find(unit=> {
            return unit.x === x && unit.y === y;
        }));
    }

    isMyUnit(unit) {
        return unit.owner && ClientStore.activeEmpireId === unit.owner;
    }

    unitInCoords(x, y) {
        return GameDataStore.state.units.findIndex(unit=> {
            return unit.x === x && unit.y === y;
        }) > -1;
    }

    getValidMoveCoords(unit) {
        if(!unit) return [];
        const validCoords = [];
        const xAdjust = unit.y % 2 === 0 ? -1 : 1;
        validCoords.push({x: unit.x, y: unit.y -1});
        validCoords.push({x: unit.x + xAdjust, y: unit.y -1});

        validCoords.push({x: unit.x -1, y: unit.y});
        validCoords.push({x: unit.x +1, y: unit.y});

        validCoords.push({x: unit.x, y: unit.y + 1});
        validCoords.push({x: unit.x + xAdjust, y: unit.y + 1});

        return validCoords.filter(coords => {
            return coords.x >= 0 && coords.y >= 0 && coords.x < MapStore.width && coords.y < MapStore.height && unit.canMoveIn.includes(MapStore.getHex(coords.x, coords.y).type);
        });

    }


    // Add default parameters for unit type
    _addStats(gameUnit) {
        return Object.assign({}, defaultUnits[gameUnit.type], gameUnit);
    }

}


export default new UnitService();