import React, {Component} from 'react';

class Races extends Component {
  
  syncRaces = () => {

  }

  render() {
    return (
      <div>
        Races component
        <button onClick={this.syncRaces}>Sync</button>
      </div>
    )
  }
}

export default Races;
