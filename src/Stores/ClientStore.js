import { observable, action, computed } from 'mobx';


class ClientStore {

    @observable activeEmpire = null;
    @observable selectedArea = null;
    @observable viewMode = "GAMEVIEW";

    @observable iAmDone = false;

    @action
    setSelectedArea(area) {
        if(area=== null) {

        }
        this.selectedArea = area;
    }

    @action
    setActiveEmpire(empire) {
        this.activeEmpire = empire;
    }

    @action
    setViewMode(mode) {
        this.viewMode = mode;
    }

    @action
    setIAmDone(to=true) {
        this.iAmDone = to;
    }

    @computed get activeEmpireId() {
        return this.activeEmpire.id;
    }
}

export default new ClientStore();