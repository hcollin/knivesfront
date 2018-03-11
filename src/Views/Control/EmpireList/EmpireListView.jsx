import React from 'react';
import {observer} from 'mobx-react';

import GameStore from '../../../Stores/GameStore';

import "./empirelistview.scss";
import ActionService from '../../../Services/ActionService';

@observer
export default class EmpireListView extends React.Component {


    switchEmpire(empire) {
        ActionService.changeActiveEmpire(empire)
    }

    render() {
        return (
            <div className="empirelistview">
                <div className="title">Diplomatic Relations</div>
                <div className="empirelist">
                    {GameStore.empires.map((empire, i) => {

                        if(empire.id === GameStore.activeEmpire.id) {
                            return null;
                        }

                        return (
                            <div key={empire.id} className="empire" style={empire.colorScheme}>
                                <div className={"name " + (empire.doneForTurn ? " done" : "") } onClick={() => this.switchEmpire(empire)}>
                                    {empire.name}
                                </div>
                                <div className="relations">

                                </div>
                                <div className="communication">

                                </div>
                                </div>
                        )

                    })}
                </div>

            </div>
        )
    }
}