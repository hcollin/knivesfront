import React from 'react';


import './cmdstyle.scss';

export default class CmdInfra extends React.Component {

    render() {
        return(
            <div className="commandinfo infra">
                <h1>Infrastructure</h1>
                <p>Increases the size of the city by one, until the cap of is reached.</p>
            </div>
        )
    }
}