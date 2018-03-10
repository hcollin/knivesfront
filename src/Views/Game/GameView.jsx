import React from 'react';
import {observer} from 'mobx-react';

import MapView from '../Map/MapView';
import MapControlsView from '../Map/MapControls';
import ControlView from '../Control/ControlView';

import './gameview.scss';
export default class GameView extends React.Component {

    render() {
        return (
            <div className="gameview">
                <div className="controlpanel">
                    <ControlView />
                </div>
                <div className="mainview">

                    <div className="container">
                        <MapView />
                    </div>
                    <MapControlsView/>

                </div>

            </div>
        );
    }
}

