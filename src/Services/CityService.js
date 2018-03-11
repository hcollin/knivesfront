

import MapStore from '../Stores/MapStore';


export default class CityService {


    static getById(id) {
        return MapStore.cities.find(cs => {
            return cs.id === id;
        });
    }

    static getByCoord(x, y) {
        return MapStore.cities.find(cs => {
            return cs.x === x && cs.y === y;
        });
    }

    static getByName(name) {
        return MapStore.cities.find(cs => {
            return cs.name === name;
        });
    }

}