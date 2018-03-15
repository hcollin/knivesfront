
import MapStore from '../Stores/MapStore';
import GameDataStore from '../Stores/GameDataStore';
import ClientStore from '../Stores/ClientStore';
import EmpireService from "./EmpireService";
import CityService from './CityService';

class GameService {

    newGame() {

        MapStore.createMapFromData(GameDataStore.state.map);

        // Add cities
        GameDataStore.state.cities.map(city => {
             MapStore.addCity(city);
        });

        GameDataStore.state.units.map(unit => {
            MapStore.addUnit(unit);
        });

        // Create empires and set active empire
        GameDataStore.state.empires.forEach(empireData => {
            empireData.cities.map(cityId => {
                const city = CityService.getById(cityId);
            });
        });
    }

    updateState(newStateData) {
        GameDataStore.setState(newStateData);
        ClientStore.setActiveEmpire(EmpireService.getById(ClientStore.activeEmpireId));

    }

    newTurnState(newStateData) {
        console.log("NEW TURN STATE!", newStateData);
        GameDataStore.setState(newStateData);
        ClientStore.setActiveEmpire(EmpireService.getById(ClientStore.activeEmpireId));
        if(ClientStore.selectedArea) {
            ClientStore.selectedArea.deactivate();
            ClientStore.setSelectedArea(null);
        }


    }

    startGame() {
        ClientStore.setActiveEmpire(EmpireService.getFirst());
    }

}


export default new GameService();