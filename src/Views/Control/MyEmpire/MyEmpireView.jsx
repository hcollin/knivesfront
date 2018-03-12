import React from 'react';
import { observer } from 'mobx-react';

import GameStore from '../../../Stores/GameStore';


import './myempireview.scss';
import ClientStore from "../../../Stores/ClientStore";
import EmpireService from '../../../Services/EmpireService';

@observer
export default class MyEmpireView extends React.Component {



    render() {

        if(!ClientStore.activeEmpire) {
            return (
                <div className="myempireview">
                    <h2 className="message">No active empire</h2>
                </div>
            )
        }

        return (
            <div className="myempireview" style={EmpireService.getColorScheme()}>
                <div className="name">
                    <h1>{ClientStore.activeEmpire.name}</h1>
                </div>
                <div className="gold">
                    <div className="value">
                        {ClientStore.activeEmpire.gold}
                    </div>
                    <div className="label">Gold</div>
                </div>

            </div>
        )
    }
}