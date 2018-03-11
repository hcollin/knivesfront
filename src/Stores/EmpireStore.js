import { observable, action, computed} from 'mobx';
import uuid from 'uuid';

export default class EmpireStore {

    @observable name = "";
    @observable units = [];
    @observable color = "gray";
    @observable bgColor = "white";

    @observable gold = 999;

    @observable commandHistory = [];

    constructor(options) {
        this.id = uuid.v4();
        this.color = options.color;
        this.bgColor = options.bgColor;
        this.name = options.name;

    }

    @computed get colorScheme() {
        return {
            color: this.color,
            backgroundColor: this.bgColor
        };
    }
}