import React from 'react';
import { observer } from 'mobx-react';

import './hextile.scss';

@observer
export default class Hex extends React.Component {


    render() {

        const classes = ["hextile", this.props.className, this.props.hex.type, this.props.hex.active ? "active": ""].join(" ");
        const cityOwner = this.props.hex.city && this.props.hex.city.owner ? this.props.hex.city.owner : { color: "white", bgColor: "#444444" };
        return (
            <div className={classes} onClick={this.props.handleClick}>
                {this.props.hex.city &&
                    <div className="city">
                        <label style={{color: cityOwner.color, backgroundColor: cityOwner.bgColor}}>{this.props.hex.city.name}</label>
                        <span>{this.props.hex.city.size}</span>
                    </div>
                }
            </div>
        )
    }
}