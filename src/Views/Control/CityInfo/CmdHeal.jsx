import React from 'react';


import './cmdstyle.scss';

export default class CmdHeal extends React.Component {

    render() {
        return(
            <div className="commandinfo heal">
                <h1>Heal units</h1>
                <p>Heal all friendly unit in this city or it's neighboring areas.</p>
            </div>
        )
    }
}