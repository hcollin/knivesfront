import React from 'react';
import {observer} from 'mobx-react';


import CityService from '../../Services/CityService';
import GameStore from '../../Stores/GameStore';

import './cityinfoview.scss';

@observer
export default class CityInfoView extends React.Component {





    render() {

        if(!GameStore.selectedHex || !GameStore.selectedHex.city) {
            return (
              <div className="cityinfoview">
                  <div className="title">City Information</div>
                  <div className="message">
                      <p>No area with city selected.</p>
                  </div>
              </div>
            );
        }

        const city = GameStore.selectedHex.city;
        const showActions = city.owner && city.owner.id === GameStore.activeEmpire.id;

        return (
            <div className="cityinfoview">
                <div className="title">City Information</div>
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
                        <button className="build current">Build</button>
                        <button className="heal">Heal</button>
                        <button className="infra">Grow</button>
                    </div>
                    <div className="current">
                        Current Command
                    </div>

                </div>
                }





            </div>
        )
    }
}