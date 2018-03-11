import React from 'react';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';

import GameStore from '../../Stores/GameStore';
import MapStore from '../../Stores/MapStore';
import HexTile from '../../Components/HexTile/HexTile';

import './mapview.scss';

@observer
export default class MapView extends React.Component {

    @observable activeHex = null;

    @action
    hexClick(hex) {
        console.log("Clicked hex", hex.x, hex.y);
        if(this.activeHex) {
            const oldId = this.activeHex.id;
            this.activeHex.deactivate();
            if(oldId === hex.id) {
                this.activeHex = null;
                GameStore.setSelectedHex(null);
                return;
            }
        }
        hex.activate();
        this.activeHex = hex;
        GameStore.setSelectedHex(hex);
    }

    render() {

        if(MapStore.hexes.length === 0) {
            return null;
        }

        const ZOOMLEVELS = [
            "zoom-further",
            "zoom-far",
            "zoom-normal",
            "zoom-near",
            "zoom-nearer",
            "zoom-nearest"
        ];

        const style = {
            marginTop: (MapStore.currentZoom * 50)*MapStore.pany,
            marginLeft: (MapStore.currentZoom * 50)*MapStore.panx
        };


        return (
            <div className={"mapview " + ZOOMLEVELS[MapStore.currentZoom]} style={style}>

                {MapStore.hexes.map((row, r) => {

                    return (
                        <div className="row" key={r}>
                            {row.map((hex, hi) => (
                                <HexTile key={hi} hex={hex} handleClick={() => this.hexClick(hex)}/>
                            ))}
                        </div>
                    )
                })}

            </div>
        )
    }
}