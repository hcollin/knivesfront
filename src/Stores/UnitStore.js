import { observable, action} from 'mobx';
import uuid from 'uuid';

export default class UnitStore {

    @observable name = "";

    constructor() {
        this.id = uuid.v4();
    }
}