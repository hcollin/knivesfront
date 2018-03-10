import React from 'react';
import {observer} from 'mobx-react';
import {observable, action} from 'mobx';

import MapStore from '../../Stores/MapStore';


import './mapcontrolsview.scss';

@observer
export default class MapControlsView extends React.Component {

    @action
    zoomIn() {
        MapStore.zoomIn();

    }

    @action
    zoomOut() {
        MapStore.zoomOut();
    }

    @action
    panLeft() {
        MapStore.pantoLeft();
    }

    @action
    panRight() {
        MapStore.pantoRight();
    }

    @action
    panUp() {
        MapStore.panToUp();
    }

    @action
    panDown() {
        MapStore.panToDown();
    }

    @action
    panCenter() {
        MapStore.panCenter();
    }


    render() {
        return(
            <div className="mapcontrolsview">
                <button onClick={() => this.zoomOut()}>+</button>
                <button onClick={() => this.zoomIn()}>-</button>

                <div className="cursors">
                    <button onClick={() => this.panUp()} className="arrow-up" />
                    <button onClick={() => this.panLeft()} className="arrow-left" />
                    <button onClick={() => this.panCenter()} className="center" />
                    <button onClick={() => this.panRight()} className="arrow-right" />
                    <button onClick={() => this.panDown()} className="arrow-down" />

                </div>

            </div>
        )
    }
}