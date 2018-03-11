import React from 'react';

import './controlview.scss';

import KnivesLogo from '../../Components/KnivesLogo/KnivesLogo';

import MyEmpireView from './MyEmpire/MyEmpireView';
import CityInfoView from './CityInfo/CityInfoView';
import HexInfoView from './AreaInfo/HexInfoView';
import EmpireListView from './EmpireList/EmpireListView';

import CityService from '../../Services/CityService';
import MapStore from '../../Stores/MapStore';
import NextTurnView from "./TurnInfo/NextTurnView";

export default class ControlView extends React.Component {


    render() {


        const currentCity = MapStore

        return (
            <div className="controlview">
                <div className="knives">
                    <KnivesLogo className="small"/>
                </div>
                <MyEmpireView />
                <HexInfoView />
                <CityInfoView />
                <EmpireListView />

                <div className="filler" />

                <NextTurnView/>
            </div>
        )
    }



}