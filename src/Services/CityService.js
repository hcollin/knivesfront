
import GameDataStore from '../Stores/GameDataStore';

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

}