import React from 'react';
import {observer} from 'mobx-react';
import {observable, action } from 'mobx';

import CommandService from '../../../Services/CommandService';
import CityService from '../../../Services/CityService';
import GameStore from '../../../Stores/GameStore';

import ClientStore from '../../../Stores/ClientStore';

import EmpireService from '../../../Services/EmpireService';
import UnitService from "../../../Services/UnitService";


import GameDataStore from "../../../Stores/GameDataStore";

import './unitinfoview.scss';

@observer
export default class UnitInfoView extends React.Component {


    render() {
        if(!ClientStore.selectedArea || !ClientStore.selectedArea.unit) {
            return (
                <div className="unitinfoview">
                    <div className="title">Units in area</div>
                    <div className="message">
                        <p>No area with unit or units selected.</p>
                    </div>
                </div>
            );
        }

        const area = ClientStore.selectedArea;
        const unit = UnitService.getById(area.unit.id);

        const empire = unit.owner ? EmpireService.getById(unit.owner) : false;

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
                        <h2><span className="power">55</span><br /><span className="health">{unit.health}</span></h2>
                    </div>

                </div>
            </div>
        )

    }
}



