import React from 'react';

import './controlview.scss';

import KnivesLogo from '../../Components/KnivesLogo/KnivesLogo';

import MyEmpireView from './MyEmpire/MyEmpireView';
import CityInfoView from './CityInfo/CityInfoView';
import HexInfoView from './AreaInfo/HexInfoView';
import EmpireListView from './EmpireList/EmpireListView';
import TechInfoView from './TechInfo/TechInfoView';
import NextTurnView from "./TurnInfo/NextTurnView";
import UnitInfoView from "./UnitInfo/UnitInfoView";

import ClientStore from '../../Stores/ClientStore';

import CityService from '../../Services/CityService';
import MapStore from '../../Stores/MapStore';


export default class ControlView extends React.Component {


    render() {


        const areaSelected = ClientStore.selectedArea !== null;

        return (
            <div className="controlview">
                <div className="knives">
                    <KnivesLogo className="small"/>
                </div>
                <MyEmpireView />
                {/*<HexInfoView />*/}
                <CityInfoView />
                <UnitInfoView/>
                <TechInfoView />
                <EmpireListView />


                <div className="filler" />

                <NextTurnView/>
            </div>
        )
    }



}