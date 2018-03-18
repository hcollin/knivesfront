import React from 'react';
import { observer } from 'mobx-react';

import UnitIcon from '../../Components/UnitIcon/UnitIcon';

import EmpireService from '../../Services/EmpireService';

import './hextile.scss';
import CityService from "../../Services/CityService";
import UnitService from "../../Services/UnitService";



@observer
export default class Hex extends React.Component {


    render() {

        const city = this.props.hex.city ? CityService.getById(this.props.hex.city.id) : false;
        // const unit = this.props.hex.unit ? UnitService.getById(this.props.hex.unit.id) : false;


        const unit = UnitService.getByCoord(this.props.hex.x, this.props.hex.y);

        const classes = [
            "hextile",
            this.props.className,
            this.props.hex.type,
            this.props.hex.active ? "active": "",
            city ? "city": "",
            this.props.highlighted ? "highlight" : ""
        ].join(" ");


        const cityOwner = city && city.owner ? EmpireService.getById(city.owner) : { color: "white", bgColor: "#444444" };
        const unitOwner = unit ? EmpireService.getById(unit.owner) : {color: "white", bgColor: "#444444"};

        return (
            <div className={classes} onClick={this.props.handleClick}>
                {city &&
                    <div className="city" style={{color: cityOwner.color, backgroundColor: cityOwner.bgColor}}>
                        <label>{city.name}</label>
                        <span>{city.size}</span>
                    </div>
                }
                {unit &&
                    <div className="unit">
                        <UnitIcon unit={unit} owner={unitOwner} />
                    </div>
                }
            </div>
        )
    }
}