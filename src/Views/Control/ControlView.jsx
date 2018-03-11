import React from 'react';

import './controlview.scss';

import MyEmpireView from './MyEmpireView';
import CityInfoView from './CityInfoView';
import HexInfoView from './HexInfoView';
import EmpireListView from './EmpireListView';

import CityService from '../../Services/CityService';
import MapStore from '../../Stores/MapStore';
import NextTurnView from "./NextTurnView";

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
                <EmpireListView />



                <NextTurnView/>
            </div>
        )
    }



}