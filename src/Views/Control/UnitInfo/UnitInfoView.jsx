import React from 'react';
import {observer} from 'mobx-react';
import {observable, action } from 'mobx';

import CommandService from '../../../Services/CommandService';
import CityService from '../../../Services/CityService';
import GameStore from '../../../Stores/GameStore';

import ClientStore from '../../../Stores/ClientStore';
import MapStore from '../../../Stores/MapStore';

import EmpireService from '../../../Services/EmpireService';
import UnitService from "../../../Services/UnitService";


import GameDataStore from "../../../Stores/GameDataStore";

import './unitinfoview.scss';

@observer
export default class UnitInfoView extends React.Component {


    commandMove(unit, hex) {
        CommandService.moveUnit(unit, hex);
    }

    showMoves(unit) {
        console.log("MOVE!", unit);
        const valids = UnitService.getValidMoveCoords(unit);
        MapStore.setHighlights(valids);
        ClientStore.setClickCallback((hex) => {
            const isValidTarget = valids.findIndex(coords => {
                return coords.x === hex.x && coords.y === hex.y;
            }) > -1;
            if(isValidTarget) {
                console.log("Move unit " + unit.name + " to hex ", hex);
                this.commandMove(unit,hex);
                ClientStore.setClickCallback(null);
            }
            return true;
        });
        console.log("Valid moves", valids);
    }




    render() {

        const area = ClientStore.selectedArea;
        const unit = area ? UnitService.getByCoord(area.x, area.y) : false;


        if(!area || !unit) {
            return (
                <div className="unitinfoview">
                    <div className="title">Units in area</div>
                </div>
            );
        }

        // const area = ClientStore.selectedArea;
        // const unit = UnitService.getById(area.unit.id);

        const empire = unit.owner ? EmpireService.getById(unit.owner) : false;


        const showActions = unit.owner && unit.owner === ClientStore.activeEmpireId;

        const command = CommandService.getCommand(unit.id);
        console.log("UNIT COMMAND", command);

        console.log("UNIT", unit);

        return (
            <div className="unitinfoview">
                <div className="title">Units in area</div>
                <div className="unitinfo">
                    <div>
                        <h1>{unit.name}</h1>
                        <h3 className="owner">{empire ? empire.name : "Neutral"}</h3>

                    </div>
                    <div className="size">
                        <h2><span className="power">{unit.power}</span><br /><span className="health">{unit.health}</span></h2>
                    </div>

                </div>
                {showActions &&
                <div className="commands">
                    <div className="buttons">
                        <button className="move" onClick={() => this.showMoves(unit)} disabled={EmpireService.isDoneForTurn()}>Move</button>
                        <button className="support">Support</button>

                        {/*<button className={"build" + (command && command.type === "CITY_BUILD" ? " current": "")} onClick={() => this.showAvailableUnits()}  disabled={EmpireService.isDoneForTurn()}>Build</button>*/}
                        {/*<button className={"heal" + (command && command.type === "CITY_HEAL" ? " current": "")} onClick={() => this.commandHeal()} disabled={EmpireService.isDoneForTurn()}>Heal</button>*/}
                        {/*<button className={"infra" + (command && command.type === "CITY_INFRA" ? " current": "")} onClick={() => this.commandInfra()} disabled={EmpireService.isDoneForTurn()}>Grow</button>*/}
                    </div>
                    <div className="current">
                        Comms
                    </div>

                </div>
                }
            </div>
        )

    }
}



