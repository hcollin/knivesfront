import React from 'react';

import './controlview.scss';

import CityInfoView from './CityInfoView';
import HexInfoView from './HexInfoView';

import CityService from '../../Services/CityService';
import MapStore from '../../Stores/MapStore';

export default class ControlView extends React.Component {


    render() {


        const currentCity = MapStore

        return (
            <div className="controlview">
                <div className="logo">
                    Knives
                </div>
                <HexInfoView />
                <CityInfoView />
            </div>
        )
    }



}