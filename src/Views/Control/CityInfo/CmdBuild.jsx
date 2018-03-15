import React from 'react';

import iconInf from '../../../imgs/iconInfantry.svg';
import iconFle from '../../../imgs/iconCruiser.svg';
import iconFgh from '../../../imgs/iconFighter.svg';

import iconTnk from '../../../imgs/iconTank.svg';
import iconBts from '../../../imgs/iconBattleship.svg';
import iconBmb from '../../../imgs/iconBomber.svg';


import './cmdstyle.scss';

export default class CmdBuild extends React.Component {

    render() {

        //TODO: CONTINUE FROM HERE

        if(this.props.to) {
            return (
                <div className="commandinfo build">

                    <div className="buttongrid">
                        <button><img src={iconInf} /></button>
                        <button><img src={iconFle} /></button>
                        <button><img src={iconFgh} /></button>
                        <button><img src={iconTnk} /></button>
                        <button><img src={iconBts} /></button>
                        <button><img src={iconBmb} /></button>
                    </div>


                </div>
            )
        }


        return(
            <div className="commandinfo build">
                <h1>Building unit</h1>
            </div>
        )
    }
}