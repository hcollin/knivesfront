import React from 'react';
import KnivesLogo from '../../Components/KnivesLogo/KnivesLogo';

import ActionService from '../../Services/ActionService';

import './mainmenuview.scss';

export default class MainMenuView extends React.Component {


    createNewGame() {
        ActionService.newGame();
    }

    render() {
        return (
            <div className="mainmenuview">
                <div className="menu">

                    <KnivesLogo/>

                    <ul>
                        <li onClick={() => this.createNewGame()}>New Game</li>
                    </ul>
                </div>

            </div>
        )
    }
}