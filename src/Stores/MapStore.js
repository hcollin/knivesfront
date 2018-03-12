import { observable, action} from 'mobx';


import HexStore from './HexStore';
import CityStore from './CityStore';
import EmpireStore from './EmpireStore';
import UnitStore from './UnitStore';


class MapStore {

    @observable hexes = [];
    @observable width = 0;
    @observable height = 0;
    @observable cities = [];

    @observable currentZoom = 2;
    @observable panx = 0;
    @observable pany = 0;

    @action
    createNewRandomMap(widthHexes=10, heightHexes=10) {

        this.width = widthHexes;
        this.height = heightHexes;

        const types = [
            "LAND",
            "LAND",
            "LAND",
            "LAND",
            "LAND",

            "WATER",
            "WATER",
            "MOUNTAIN"

        ];

        const hexMap = [];
        for(let h = 0; h < heightHexes; h++) {
            const row = [];
            for(let w = 0; w < heightHexes; w++) {
                row.push(new HexStore(w, h, types[Math.floor(Math.random() * types.length)]));
            }
            hexMap.push(row);
        }
        this.hexes = hexMap;
    }

    @action
    createMapFromData(mapObject) {
        const rows = mapObject;
        // const rows = mapObject.split("|");

        this.height = rows.length;
        this.width = rows[0].length;

        const types = {
            L: "LAND",
            W: "WATER",
            M: "MOUNTAIN",
            C: "COAST"
        };

        const hexMap = [];
        for(let h = 0; h < this.height; h++) {
            const row = [];
            const tiles = rows[h].split("");

            for(let w = 0; w < this.width; w++) {
                row.push(new HexStore(w, h, types[tiles[w]]));
            }
            hexMap.push(row);
        }
        this.hexes = hexMap;

        // mapObject.cities.forEach(city => {
        //    this.addCity(new CityStore(city));
        // });
        //
        // mapObject.empires.forEach(empireData => {
        //     const empire = new EmpireStore(empireData);
        //
        //     console.log(empire);
        // });

    }


    @action
    addCity(city) {
        this.cities.push(city);
        this.hexes[city.y][city.x].setCity(city);
    }

    @action
    zoomIn() {
        if(this.currentZoom > 0) {
            this.currentZoom--;
        }
    }

    @action
    zoomOut() {
        if(this.currentZoom < 5) {
            this.currentZoom++;
        }

    }

    @action
    pantoLeft() {
        this.panx--;
    }

    @action
    pantoRight() {
        this.panx++;
    }

    @action
    panToUp() {
        this.pany--;
    }

    @action
    panToDown() {
        this.pany++;
    }

    @action
    panCenter() {
        this.panx = 0;
        this.pany = 0;
    }

}

export default new MapStore();