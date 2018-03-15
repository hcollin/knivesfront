import React from 'react';

import iconInf from '../../../imgs/iconInfantry.svg';
import iconFle from '../../../imgs/iconCruiser.svg';
import iconFgh from '../../../imgs/iconFighter.svg';

import iconTnk from '../../../imgs/iconTank.svg';
import iconBts from '../../../imgs/iconBattleship.svg';
import iconBmb from '../../../imgs/iconBomber.svg';



import './cmdstyle.scss';
import CommandService from "../../../Services/CommandService";
import ClientStore from "../../../Stores/ClientStore";

export default class CmdBuild extends React.Component {


    buildUnit(type) {
        CommandService.buildUnit(ClientStore.selectedArea.city, type);
    }

    render() {


        if(this.props.to) {
            return (
                <div className="commandinfo build">

                    <div className="buttongrid">
                        <button onClick={() => this.buildUnit("INF")} ><img src={iconInf} /></button>
                        <button onClick={() => this.buildUnit("FLE")} ><img src={iconFle} /></button>
                        <button onClick={() => this.buildUnit("FGH")} ><img src={iconFgh} /></button>
                        <button onClick={() => this.buildUnit("TNK")} ><img src={iconTnk} /></button>
                        <button onClick={() => this.buildUnit("BTS")} ><img src={iconBts} /></button>
                        <button onClick={() => this.buildUnit("BMB")} ><img src={iconBmb} /></button>
                    </div>
                </div>
            )
        }


        const types = {
            "INF": {name: "Infantry Army", icon: iconInf },
            "FLE": {name: "Destroyer Fleet", icon: iconFle},
            "FGH": {name: "Fighter Squadron", icon: iconFle },
            "TNK": {name: "Tank Battalion", icon: iconTnk },
            "BTS": {name: "Battleship Fleet", icon: iconBts },
            "BMB": {name: "Bomber Wing", icon: iconBmb }
        };

        const unitInfo = types[this.props.cmd.params.unit];

        return(
            <div className="commandinfo build">
                <h1>Building unit</h1>

                <div className="pic">
                    <img src={unitInfo.icon} />
                    <p>{unitInfo.name}</p>
                </div>

            </div>
        )
    }
}