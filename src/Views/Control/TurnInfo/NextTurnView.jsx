import React from 'react';
import { observer } from 'mobx-react';

import GameStore from '../../../Stores/GameStore';
import ActionService from '../../../Services/ActionService';
import CommandService from '../../../Services/CommandService';

import './nextturnview.scss';

@observer
export default class NextTurnView extends React.Component {


    render() {

        return (
            <div className="nextturnview">
                {/*<div className="turninfo">*/}
                    {/*Turn: {(GameStore.turn +1)}*/}
                {/*</div>*/}


                <div className="button">

                    <button className="save" onClick={() => CommandService.saveCommands()} disabled={GameStore.activeEmpire.doneForTurn}>Save</button>
                    <h1>{GameStore.turn +1}</h1>
                    <button className="next" onClick={() => ActionService.nextTurn()} disabled={GameStore.activeEmpire.doneForTurn}>Ready</button>


                </div>

            </div>
        )
    }

}