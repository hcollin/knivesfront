import React from 'react';
import {observer} from 'mobx-react';


import CommandService from '../../../Services/CommandService';
import CityService from '../../../Services/CityService';
import GameStore from '../../../Stores/GameStore';

import CmdInfra from './CmdInfra';

import './cityinfoview.scss';

@observer
export default class CityInfoView extends React.Component {

    commandInfra() {
        CommandService.growInfra(GameStore.selectedHex.city);
    }

    render() {

        if(!GameStore.selectedHex || !GameStore.selectedHex.city) {
            return (
              <div className="cityinfoview">
                  <div className="title">Infrastructure</div>
                  <div className="message">
                      <p>No area with city selected.</p>
                  </div>
              </div>
            );
        }

        const city = GameStore.selectedHex.city;
        const showActions = city.owner && city.owner.id === GameStore.activeEmpire.id;
        const submitted = GameStore.activeEmpire.doneForTurn;

        let commandInfo = null;
        if(city.command) {
            switch(city.command.type) {
                case "INFRA":
                    commandInfo = <CmdInfra/>
                    break;
            }
        }

        return (
            <div className="cityinfoview">
                <div className="title">Infrastructure</div>
                <div className="cityinfo">
                    <div>
                        <h1>{city.name}</h1>
                        <h3 className="owner">{city.owner ? city.owner.name : "Neutral"}</h3>
                    </div>
                    <div className="size">
                        <h2>{city.size}</h2>
                    </div>
                </div>

                {showActions &&
                <div className="commands">
                    <div className="buttons">
                        <button className={"build" + (city.command && city.command.type==="BUILD" ? " current": "")} disabled={GameStore.activeEmpire.doneForTurn}>Build</button>
                        <button className={"heal" + (city.command && city.command.type==="HEAL" ? " current": "")} disabled={GameStore.activeEmpire.doneForTurn}>Heal</button>
                        <button className={"infra" + (city.command && city.command.type==="INFRA" ? " current": "")} onClick={() => this.commandInfra()} disabled={GameStore.activeEmpire.doneForTurn}>Grow</button>
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