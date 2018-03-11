import React from 'react';

import GameStore from '../../Stores/GameStore';


import './myempireview.scss';

export default class MyEmpireView extends React.Component {



    render() {

        if(!GameStore.activeEmpire) {
            return (
                <div className="myempireview">
                    <h2 className="message">No active empire</h2>
                </div>
            )
        }

        return(
            <div className="myempireview" style={GameStore.activeEmpire.colorScheme}>
                <div className="name">
                    <h1>{GameStore.activeEmpire.name}</h1>
                </div>
                <div className="gold">
                    {GameStore.activeEmpire.gold}
                    <label>Gold</label>
                </div>

            </div>
        )
    }
}