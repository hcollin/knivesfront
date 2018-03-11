import { observable, action } from 'mobx';

import CommandStore from '../Stores/CommandStore';
import GameStore from '../Stores/GameStore';
import DummyServer from "./DummyServer";


class CommandService {


    @observable currentCommands = [];

    @action
    _addCurrentCommand(cmd) {
        this.currentCommands.push(cmd);
    }

    // CITY COMMANDS

    growInfra(targetCity) {
        if(targetCity.owner && targetCity.owner.id === GameStore.activeEmpire.id) {
            const cmd = new CommandStore("INFRA", targetCity,  targetCity.owner, {});
            DummyServer.submitCommand(cmd).then(res => {
                this._addCurrentCommand(cmd);
                console.log("Command succesfully sent");

            }).catch( err=>{
                console.log("All fail", err);
            });
        }
    }






    // UNIT COMMANDS


}

export default new CommandService();