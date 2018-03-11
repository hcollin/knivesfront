import { observable, action} from 'mobx';

import MapStore from './MapStore';
import CityStore from "./CityStore";
import EmpireStore from "./EmpireStore";
import HexStore from "./HexStore";
import CityService from '../Services/CityService';

class GameStore {

    @observable turn = 0;

    @observable selectedHex = null;
    @observable empires = [];
    @observable map = null;

    @observable activeEmpire = null;

    @observable status = "NEW";

    @action
    createGameFromData(data) {

        // Create map
        MapStore.createMapFromData(data.map);
        this.map = MapStore;

        // Add cities
        data.cities.forEach(city => {
             MapStore.addCity(new CityStore(city));
        });

        // Create empires and set active empire
        data.empires.forEach(empireData => {
            const empire = new EmpireStore(empireData);
            const capital = CityService.getByName(empireData.capital);
            capital.setOwner(empire);
            empireData.cities.forEach(cityName => {
               const city = CityService.getByName(cityName);
               city.setOwner(empire);
            });

            this.empires.push(empire);
        });
        this.activeEmpire = this.empires[0];


    }

    @action
    setStatus(newStatus) {
        this.status = newStatus;
    }

    @action
    setTurn(turn) {
        this.turn = turn;
    }

    @action
    setSelectedHex(hex) {
        this.selectedHex = hex;
    }

    @action
    setActiveEmpire(empire) {
        this.activeEmpire = empire;
    }

    @action
    addEmpire(empire) {
        this.empires.push(empire);
    }

}

export default new GameStore();