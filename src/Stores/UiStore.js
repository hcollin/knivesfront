import {observable, action} from 'mobx';

class UiStore {

    @observable activeView = "MAINMENU";

    @action
    setView(newMainView) {
        this.activeView = newMainView;
    }

}


export default new UiStore();