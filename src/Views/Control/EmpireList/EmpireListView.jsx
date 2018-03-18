import React from 'react';
import {observer} from 'mobx-react';

import GameStore from '../../../Stores/GameStore';

import "./empirelistview.scss";
import ActionService from '../../../Services/ActionService';
import EmpireService from "../../../Services/EmpireService";
import ClientStore from "../../../Stores/ClientStore";

@observer
export default class EmpireListView extends React.Component {


    switchEmpire(id) {
        ActionService.changeActiveEmpire(id)
    }

    render() {

        if(ClientStore.selectedArea) {
            return (
                <div className="empirelistview">
                    <div className="title">Diplomatic Relations</div>
                </div>
            );
        }


        return (
            <div className="empirelistview">
                <div className="title">Diplomatic Relations</div>
                <div className="empirelist">
                    {EmpireService.list().map((empire, i) => {

                        if(empire.id === ClientStore.activeEmpireId) {
                            return null;
                        }

                        return (
                            <div key={empire.id} className="empire" style={EmpireService.getColorScheme(empire.id)}>
                                <div className={"name " + (empire.doneForTurn ? " done" : "") } onClick={() => this.switchEmpire(empire.id)}>
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