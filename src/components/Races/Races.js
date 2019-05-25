import React, {Component} from 'react';
import {syncRaces} from 'utils/racesUtils';

class Races extends Component {

  syncRaces = () => {
    syncRaces();
  }

  render() {
    return (
      <div>
        Races component
        <button onClick={this.syncRaces}>Sync</button>
      </div>
    );
  }
}

export default Races;
