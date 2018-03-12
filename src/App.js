import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.scss';

import { defaultMap } from './Data/Maps/default';

import UiStore from './Stores/UiStore';
import ActionService from './Services/ActionService';

import GameView from './Views/Game/GameView';
import MainMenuView from './Views/MainMenu/MainMenuView';

// Comment this line to go to the main menu
ActionService.newGame();


@observer
class App extends Component {
  render() {

    let activeView = <MainMenuView />;
    switch(UiStore.activeView) {
        case "GAMEVIEW":
          activeView = <GameView />;
            break;
    }

    return (
      <div className="App">
          {activeView}
      </div>
    );
  }
}

export default App;
