import React from 'react';
import { observer } from 'mobx-react';

import EmpireService from '../../Services/EmpireService';

import './hextile.scss';
import CityService from "../../Services/CityService";

@observer
export default class Hex extends React.Component {


    render() {

        const classes = ["hextile", this.props.className, this.props.hex.type, this.props.hex.active ? "active": ""].join(" ");
        const city = this.props.hex.city ? CityService.getById(this.props.hex.city.id) : false;

        const cityOwner = city && city.owner ? EmpireService.getById(city.owner) : { color: "white", bgColor: "#444444" };

        return (
            <div className={classes} onClick={this.props.handleClick}>
                {city &&
                    <div className="city">
                        <label style={{color: cityOwner.color, backgroundColor: cityOwner.bgColor}}>{city.name}</label>
                        <span>{city.size}</span>
                    </div>
                }
            </div>
        )
    }
}