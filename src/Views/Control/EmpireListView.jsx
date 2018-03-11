import React from 'react';
import {observer} from 'mobx-react';

import GameStore from '../../Stores/GameStore';

import "./empirelistview.scss";

@observer
export default class EmpireListView extends React.Component {

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
                                <div className="name">
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