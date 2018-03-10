import React from 'react';
import { observer } from 'mobx-react';

import './hextile.scss';

@observer
export default class Hex extends React.Component {


    render() {

        const classes = ["hextile", this.props.className, this.props.hex.type, this.props.hex.active ? "active": ""].join(" ");

        return (
            <div className={classes} onClick={this.props.handleClick}>
                <p className="coord">
                    {this.props.hex.x}, {this.props.hex.y}
                </p>
            </div>
        )
    }
}