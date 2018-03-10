import { observable, action} from 'mobx';
import uuid from 'uuid';

const RANDOMCITYNAMES = [
    "Helsinki",
    "Tampere",
    "Turku",
    "Espoo",
    "Oulu",
    "London",
    "Edinburgh",
    "Paris",
    "Moscow",
    "Rome",
    "Istanbul",
    "New York",
    "Washington"
];

export default class CityStore {

    @observable name = "";
    @observable size = 1;
    @observable owner = null;

    constructor(options) {
        this.id = uuid.v4();
        this.name = options.name ? options.name : RANDOMCITYNAMES[Math.floor(Math.random()*RANDOMCITYNAMES.length)];
    }
}

