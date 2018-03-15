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

    growInfra(targetCity=null) {
        if(!targetCity) return;
        return this._sendCityCommand("CITY_INFRA", targetCity);
    }


    healUnits(targetCity=null) {
        if(!targetCity) return;
        return this._sendCityCommand("CITY_HEAL", targetCity);
    }

    showUnits(targetCity) {
        this.currentCommands = this.currentCommands.filter(cmd => cmd.type !== "TEMP_UNIT" && cmd.to !== targetCity.id);
        this.currentCommands.push({
            type: "TEMP_UNIT",
            to: targetCity.id
        });
    }

    buildUnit(targetCity=null, unitType=null) {
        if(!targetCity || !unitType) return;
        this.currentCommands = this.currentCommands.filter(cmd => cmd.type !== "TEMP_UNIT");
        return this._sendCityCommand("CITY_BUILD", targetCity, {unit: unitType});
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

    _sendCityCommand(type, to, params={}) {
        if(ClientStore.iAmDone) {
            return;
        }


        if(CityService.isMyCity(to)) {
            const cmd = this._createCommandObject(type, to.id, params);
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



    @action
    _addCurrentCommand(cmd) {
        const index = this.currentCommands.findIndex(cc => cc.to === cmd.to);
        if(index > -1) {
            this.currentCommands.splice(index, 1);
        }
        this.currentCommands.push(cmd);
    }



}

export default new CommandService();