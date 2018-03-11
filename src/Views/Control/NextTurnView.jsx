import React from 'react';
import { observer } from 'mobx-react';

import GameStore from '../../Stores/GameStore';
import ActionServer from '../../Services/ActionService';

import './nextturnview.scss';

@observer
export default class NextTurnView extends React.Component {


    render() {

        return (
            <div className="nextturnview">
                <div className="turninfo">
                    Turn: {(GameStore.turn +1)}
                </div>
                <div className="button">
                    {!GameStore.activeEmpire.doneForTurn &&
                    <button onClick={() => ActionServer.nextTurn()}>Next turn</button>
                    }

                </div>

            </div>
        )
    }

}