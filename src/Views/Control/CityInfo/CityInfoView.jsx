import React from 'react';
import {observer} from 'mobx-react';
import {observable, action } from 'mobx';

import CommandService from '../../../Services/CommandService';
import CityService from '../../../Services/CityService';
import GameStore from '../../../Stores/GameStore';

import ClientStore from '../../../Stores/ClientStore';

import EmpireService from '../../../Services/EmpireService';

import CmdInfra from './CmdInfra';
import CmdHeal from './CmdHeal';
import CmdBuild from './CmdBuild';

import './cityinfoview.scss';
import GameDataStore from "../../../Stores/GameDataStore";


@observer
export default class CityInfoView extends React.Component {


    commandBuild() {

    }

    commandHeal() {
        // console.log("HEAL!", ClientStore.selectedArea.city);
        CommandService.healUnits(ClientStore.selectedArea.city);

    }

    commandInfra() {
        // console.log("INFRA!", ClientStore.selectedArea.city);
        CommandService.growInfra(ClientStore.selectedArea.city);
    }


    showAvailableUnits() {
        CommandService.showUnits(ClientStore.selectedArea.city);
    }

    render() {

        if(!ClientStore.selectedArea || !ClientStore.selectedArea.city) {
            return (
              <div className="cityinfoview">
                  <div className="title">Infrastructure</div>
                  <div className="message">
                      <p>No area with city selected.</p>
                  </div>
              </div>
            );
        }



        const area = ClientStore.selectedArea;
        const city = CityService.getById(ClientStore.selectedArea.city.id);

        const showActions = city.owner && city.owner === ClientStore.activeEmpireId;
        const submitted = EmpireService.isDoneForTurn();
        const empire = city.owner ? EmpireService.getById(city.owner) : false;

        const command = CommandService.getCommand(city.id);

        let commandInfo = null;
        if(command) {
            console.log("Command for city", command);
            switch(command.type) {
                case "TEMP_UNIT":
                    commandInfo = <CmdBuild to={city} />;
                    break;
                case "CITY_INFRA":
                    commandInfo = <CmdInfra cmd={command} />;
                    break;
                case "CITY_HEAL":
                    commandInfo = <CmdHeal cmd={command} />;
                    break;
                case "CITY_BUILD":
                    commandInfo = <CmdBuild cmd={command} />;
                    break;

            }
        }

        return (
            <div className="cityinfoview">
                <div className="title">Infrastructure</div>
                <div className="cityinfo">
                    <div>
                        <h1>{city.name}</h1>
                        <h3 className="owner">{empire ? empire.name : "Neutral"}</h3>
                        <h4>type <span>{area.type}</span>  x <span>{area.x}</span>, y <span>{area.y}</span></h4>
                    </div>
                    <div className="size">
                        <h2>{city.size}</h2>
                    </div>
                </div>

                {showActions &&
                <div className="commands">
                    <div className="buttons">
                        <button className={"build" + (command && command.type === "CITY_BUILD" ? " current": "")} onClick={() => this.showAvailableUnits()}  disabled={EmpireService.isDoneForTurn()}>Build</button>
                        <button className={"heal" + (command && command.type === "CITY_HEAL" ? " current": "")} onClick={() => this.commandHeal()} disabled={EmpireService.isDoneForTurn()}>Heal</button>
                        <button className={"infra" + (command && command.type === "CITY_INFRA" ? " current": "")} onClick={() => this.commandInfra()} disabled={EmpireService.isDoneForTurn()}>Grow</button>
                    </div>
                    <div className="current">
                        {commandInfo}
                    </div>

                </div>
                }

            </div>
        )
    }
}