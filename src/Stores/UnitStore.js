import { observable, action} from 'mobx';
import uuid from 'uuid';

export default class UnitStore {

    @observable name = "";
    @observable maxHealth = 0;
    @observable health = 0;
    @observable power = 0;
    @observable type = null;
    @observable owner = null;
    @observable cost = 0;
    @observable upkeep = 0;
    @observable x = null;
    @observable y = null;
    @observable flags = [];

    @observable command = null;

    constructor(options) {
        this.id = uuid.v4();

        // From data
        this.name = options.name ? options.name : "";
        this.maxHealth = options.maxHealth ? options.maxHealth : 0;
        this.health = options.health ? options.health : 0;
        this.power = options.power ? options.power : 0;
        this.type = options.type ? options.type : "";
        this.cost = options.cost ? options.cost : 0;
        this.upkeep = options.upkeep ? options.upkeep : 0;

        // From game
        this.owner= options.owner ? options.owner : null;
        this.x = options.x ? options.x : null;
        this.y = options.y ? options.y : null;
    }

    @action
    nextTurn() {
        this.command = null;
    }

    @action
    setOwner(empire) {
        this.owner = empire;
    }

    @action
    setCommand(cmd) {
        this.command = cmd;
    }


}