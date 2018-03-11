import React from 'react';

import './controlview.scss';

import MyEmpireView from './MyEmpireView';
import CityInfoView from './CityInfoView';
import HexInfoView from './HexInfoView';

import CityService from '../../Services/CityService';
import MapStore from '../../Stores/MapStore';

export default class ControlView extends React.Component {


    render() {


        const currentCity = MapStore

        return (
            <div className="controlview">
                <div className="knives">
                    <span className="name">Knives</span>
                </div>
                <MyEmpireView />
                <HexInfoView />
                <CityInfoView />
            </div>
        )
    }



}