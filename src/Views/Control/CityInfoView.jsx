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


        return (
            <div className="cityinfoview">
                <div className="title">City Information</div>
                <div className="cityinfo">
                    <div>
                        <h1>{city.name}</h1>
                        <h3 className="owner">{city.owner ? city.owner : "Neutral"}</h3>
                    </div>
                    <div className="size">
                        <h2>{city.size}</h2>
                    </div>
                </div>




            </div>
        )
    }
}