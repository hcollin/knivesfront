
import { defaultTechTree } from '../Data/Tech/default';

import GameStore from '../Stores/GameStore';
import EmpireStore from '../Stores/EmpireStore';

class TechService {

    constructor(techTree) {
        this.techTree = techTree;
    }

    startResearch(techId) {
        GameStore.activeEmpire.setResearch(this.techTree[techId]);
    }

    getAvailableTech() {
        const myTech = this.getMyTech();
        const techKeys = Object.keys(this.techTree);

        return techKeys.reduce((arr, key) => {
            const tech = this.techTree[key];
            let available = true;


            if(available) {
                arr.push(tech)
            }
            return arr;
        }, []);
    }

    getMyTech() {
        return GameStore.activeEmpire.techs.reduce((arr, cur) => {
            const tech = this.techTree[cur];
            arr.push(tech);
            return arr;
        }, [])
    }

}

export default new TechService(defaultTechTree);