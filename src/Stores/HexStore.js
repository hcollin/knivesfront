import { observable, action} from 'mobx';
import uuid from 'uuid';


export default class HexStore {

    @observable type = null;
    @observable owner = null;
    @observable unit = null;
    @observable city = null;
    @observable active = false;

    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.id = uuid.v4();
    }


    @action
    activate() {
        this.active = true;
    }

    @action
    deactivate() {
        this.active = false;
    }

    @action
    setUnit(unit) {
        this.unit = unit;
    }

    @action
    setCity(city) {
        this.city = city;
    }
}


