import { observable, action } from 'mobx';

class GameDataStore {

    @observable prevState = {};
    @observable origState = {};
    @observable state = {};

    @action
    setState(gameState) {
        this.prevState = gameState;
        this.origState = Object.assign({}, gameState);
        this.state = Object.assign({}, gameState);
    }

}

export default new GameDataStore();