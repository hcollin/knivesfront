import { observable, action} from 'mobx';


class GameStore {

    @observable selectedHex = null;


    @action
    setSelectedHex(hex) {
        this.selectedHex = hex;
    }

}

export default new GameStore();