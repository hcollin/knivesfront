import React, { Component } from 'react';

import './App.scss';

import { defaultMap } from './Data/Maps/default';


import GameStore from './Stores/GameStore';
import MapStore from './Stores/MapStore';
import GameView from './Views/Game/GameView';

// MapStore.createNewRandomMap(15, 15);
GameStore.createGameFromData(defaultMap);
//MapStore.createMapFromData();

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
