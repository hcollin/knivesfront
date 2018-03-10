import React, { Component } from 'react';

import './App.scss';

import MapStore from './Stores/MapStore';
import GameView from './Views/Game/GameView';

// MapStore.createNewRandomMap(15, 15);
MapStore.createMapFromData();

class App extends Component {
  render() {
    return (
      <div className="App">
          <GameView />
      </div>
    );
  }
}

export default App;
