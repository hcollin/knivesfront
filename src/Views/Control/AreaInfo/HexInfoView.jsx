import React from 'react';
import {observer} from 'mobx-react';


import CityService from '../../../Services/CityService';
import GameStore from '../../../Stores/GameStore';

import './hexinfoview.scss';

@observer
export default class HexInfoView extends React.Component {

    render() {

        if (!GameStore.selectedHex) {
            return (
                <div className="hexinfoview">
                    <div className="title">Area Information</div>
                    <div className="message">
                        <p>No area selected.</p>
                    </div>
                </div>
            );
        }

        const hex = GameStore.selectedHex;


        return (
            <div className="hexinfoview">
                <div className="title">Area Information</div>
                <div className="hexinfo">
                    <div>
                        <h1>{hex.type}</h1>
                    </div>
                    <div className="coords">
                        <p>X: <span>{hex.x}</span></p>
                        <p>Y: <span>{hex.y}</span></p>
                    </div>


                </div>


            </div>
        )
    }
}