import React from 'react';

import iconInf from '../../imgs/iconInfantry.svg';
import iconFle from '../../imgs/iconCruiser.svg';
import iconFgh from '../../imgs/iconFighter.svg';

import iconTnk from '../../imgs/iconTank.svg';
import iconBts from '../../imgs/iconBattleship.svg';
import iconBmb from '../../imgs/iconBomber.svg';


export default class UnitIcon extends React.Component {

    render() {

        if(!this.props.unit) return null;

        const typeToImg = {
            "INF": iconInf,
            "FLE": iconFle,
            "FGH": iconFgh,
            "TNK": iconTnk,
            "BTS": iconBts,
            "BMB": iconBmb
        };

        const unitStyle = {
            backgroundColor: this.props.owner.bgColor,
            color: this.props.owner.color,
            borderColor: this.props.owner.color
        };

        return (
            <div className="uniticon" style={unitStyle}>
                <img src={typeToImg[this.props.unit.type]} />
            </div>
        )
    }
}