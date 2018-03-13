import React from 'react';
import {observer} from 'mobx-react';


import CommandService from '../../../Services/CommandService';
import CityService from '../../../Services/CityService';
import GameStore from '../../../Stores/GameStore';

import ClientStore from '../../../Stores/ClientStore';

import EmpireService from '../../../Services/EmpireService';

import CmdInfra from './CmdInfra';

import './cityinfoview.scss';
import GameDataStore from "../../../Stores/GameDataStore";

@observer
export default class CityInfoView extends React.Component {

    commandInfra() {
        CommandService.growInfra(ClientStore.selectedArea.city);
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



        const city = CityService.getById(ClientStore.selectedArea.city.id);

        const showActions = city.owner && city.owner === ClientStore.activeEmpireId;
        const submitted = EmpireService.isDoneForTurn();
        const empire = city.owner ? EmpireService.getById(city.owner) : false;

        const command = CommandService.getCommand(city.id);

        let commandInfo = null;
        if(command) {
            switch(command.type) {
                case "CITY_INFRA":
                    commandInfo = <CmdInfra/>;
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
                    </div>
                    <div className="size">
                        <h2>{city.size}</h2>
                    </div>
                </div>

                {showActions &&
                <div className="commands">
                    <div className="buttons">
                        <button className={"build" + (command && command.type==="BUILD" ? " current": "")} disabled={EmpireService.isDoneForTurn()}>Build</button>
                        <button className={"heal" + (command && command.type==="HEAL" ? " current": "")} disabled={EmpireService.isDoneForTurn()}>Heal</button>
                        <button className={"infra" + (command && command.type==="INFRA" ? " current": "")} onClick={() => this.commandInfra()} disabled={EmpireService.isDoneForTurn()}>Grow</button>
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