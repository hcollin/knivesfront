
import GameDataStore from '../Stores/GameDataStore';
import ClientStore from "../Stores/ClientStore";

export default class CityService {


    static getById(id) {
        return GameDataStore.state.cities.find(cs => {
            return cs.id === id;
        });
    }

    static getByCoord(x, y) {
        return GameDataStore.state.cities.find(cs => {
            return cs.x === x && cs.y === y;
        });
    }

    static getByName(name) {
        return GameDataStore.state.cities.find(cs => {
            return cs.name === name;
        });
    }

    static command(id) {
        return GameDataStore.state.commands.find(cmd => {
            return cmd.to === id;
        });
    }

    static isMyCity(city) {
        return city.owner && ClientStore.activeEmpireId === city.owner;
    }


}