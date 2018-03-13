import { observable, action } from 'mobx';

import CommandStore from '../Stores/CommandStore';
import GameStore from '../Stores/GameStore';
import DummyServer from "./DummyServer";
import ClientStore from "../Stores/ClientStore";
import GameDataStore from "../Stores/GameDataStore";
import DummyDataServer from "./DummyDataServer";
import CityService from "./CityService";




class CommandService {


    @observable currentCommands = [];


    getCommand(to) {
        return this.currentCommands.find(cmd => {
            return cmd.to === to;
        });
    }


    @action
    saveCommands() {

    }

    // CITY COMMANDS

    growInfra(targetCity) {

        if(ClientStore.iAmDone) {
            return;
        }

        console.log("CITY", targetCity);
        if(CityService.isMyCity(targetCity)) {
            const cmd = this._createCommandObject("CITY_INFRA", targetCity.id);
            DummyDataServer.addCommand(cmd).then(
                action(res => {
                    console.log("Command added", res);
                    cmd.id = res;
                    this._addCurrentCommand(cmd);
                }),
                action(err => {
                    console.log("All fail", err);
                })
            );
        }
    }






    // UNIT COMMANDS



    // PRIVATE COMMANDS

    _createCommandObject(type, to, params={}) {
        return {
            type: type,
            to: to,
            by: ClientStore.activeEmpireId,
            params: params
        }
    }

    @action
    _addCurrentCommand(cmd) {
        this.currentCommands.push(cmd);
    }



}

export default new CommandService();