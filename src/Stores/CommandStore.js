import {observable, action} from 'mobx';
import uuid from 'uuid';

export default class CommandStore {

    @observable type = null;
    @observable to = null;
    @observable who = null;
    @observable turn = null;
    @observable confirmed = false;
    @observable params = {};


    constructor(type, to, who, params) {
        this.type = type;
        this.to = to;
        this.who = who;
        this.params = params;
        this.id =  uuid.v4();
    }


    @action
    setConfirmed() {
        this.confirmed = true;
    }

}