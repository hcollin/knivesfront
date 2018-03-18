import React from 'react';
import {observer} from 'mobx-react';


import CommandService from '../../../Services/CommandService';
import CityService from '../../../Services/CityService';
import GameStore from '../../../Stores/GameStore';
import TechService from '../../../Services/TechService';

import './techinfoview.scss';
import ClientStore from "../../../Stores/ClientStore";

@observer
export default class TechInfoView extends React.Component {

    render() {

        if(ClientStore.selectedArea) {
            return (
                <div className="techinfoview">
                    <div className="title">Research Department</div>
                </div>
            );
        }

        const available = TechService.getAvailableTech();
        const library = TechService.getMyTech();

        return (
            <div className="techinfoview">
                <div className="title">Research Department</div>
                {available.length > 0 &&
                <div className="research">
                    {available.map((tech, i) => (
                        <div key={i}>
                            {tech.name}
                        </div>
                    ))}
                </div>
                }

                {available.length === 0 &&
                <div className="message">
                    <p>No tech currently available for research</p>
                </div>
                }

                {library.length > 0 &&
                <div className="library">
                    {library.map((tech, i) => (
                        <div  key={i}>
                            {tech.name}
                        </div>
                    ))}
                </div>
                }
                {library.length  === 0 &&
                    <div className="message">
                        <p>No technology researched yet.</p>
                    </div>
                }


            </div>
        );


    }
}
