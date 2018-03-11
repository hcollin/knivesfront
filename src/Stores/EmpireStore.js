import { observable, action, computed} from 'mobx';
import uuid from 'uuid';

export default class EmpireStore {

    @observable name = "";
    @observable units = [];
    @observable color = "gray";
    @observable bgColor = "white";

    @observable gold = 999;

    @observable commands = [];
    @observable commandHistory = [];

    @observable doneForTurn = false;



    constructor(options) {
        this.id = uuid.v4();
        this.color = options.color;
        this.bgColor = options.bgColor;
        this.name = options.name;

    }

    @action
    setDoneForTurn() {
        this.doneForTurn = true;
        this.commandHistory.push(this.commands);
        this.commands = []
    }

    @action
    prepareNewTurn() {
        this.doneForTurn = false;

    }

    @computed get colorScheme() {
        return {
            color: this.color,
            backgroundColor: this.bgColor
        };
    }
}