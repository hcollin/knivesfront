import { observable, action} from 'mobx';
import uuid from 'uuid';

export default class PlayerStore {

    @observable name = "";
    @observable units = [];

    @observable commandHistory = [];

    constructor(options) {
        this.id = uuid.v4();
        this.color = options.color;
        this.name = options.name;

    }
}