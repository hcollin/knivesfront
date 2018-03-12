
import MapStore from '../Stores/MapStore';
import GameDataStore from '../Stores/GameDataStore';
import ClientStore from '../Stores/ClientStore';
import EmpireService from "./EmpireService";
import CityService from './CityService';

class GameService {

    newGame() {

        MapStore.createMapFromData(GameDataStore.state.map);

        // Add cities
        GameDataStore.state.cities.forEach(city => {
             MapStore.addCity(city);
        });

        // Create empires and set active empire
        GameDataStore.state.empires.forEach(empireData => {

            empireData.cities.map(cityId => {
                const city = CityService.getById(cityId);


            })

            // const empire = new EmpireStore(empireData);
            // const capital = CityService.getByName(empireData.capital);
            // capital.setOwner(empire);
            // empireData.cities.forEach(cityName => {
            //     const city = CityService.getByName(cityName);
            //     city.setOwner(empire);
            // });
            //
            // this.empires.push(empire);
        });
    }

    updateState(newStateData) {
        GameDataStore.setState(newStateData);
    }

    newTurnState(newStateData) {
        GameDataStore.setState(newStateData);
    }

    startGame() {
        ClientStore.setActiveEmpire(EmpireService.getFirst());
    }

}


export default new GameService();