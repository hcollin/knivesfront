import { observable, action } from 'mobx';

class GameDataStore {

    @observable origState = {};
    @observable state = {};

    @action
    setState(gameState) {
        this.origState = Object.assign({}, gameState);
        this.state = Object.assign({}, gameState);
    }

}

export default new GameDataStore();