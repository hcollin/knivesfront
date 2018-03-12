import React from 'react';
import { observer } from 'mobx-react';

import GameStore from '../../../Stores/GameStore';
import ActionService from '../../../Services/ActionService';
import CommandService from '../../../Services/CommandService';

import EmpireService from '../../../Services/EmpireService';
import ClientStore from '../../../Stores/ClientStore';

import './nextturnview.scss';

@observer
export default class NextTurnView extends React.Component {


    render() {

        const activeEmpireDone = EmpireService.isDoneForTurn(ClientStore.activeEmpireId);

        return (
            <div className="nextturnview">
                {/*<div className="turninfo">*/}
                    {/*Turn: {(GameStore.turn +1)}*/}
                {/*</div>*/}


                <div className="button">

                    <button className="save" onClick={() => CommandService.saveCommands()} disabled={activeEmpireDone}>Save</button>
                    <h1>{GameStore.turn +1}</h1>
                    <button className="next" onClick={() => ActionService.nextTurn()} disabled={activeEmpireDone}>Ready</button>


                </div>

            </div>
        )
    }

}