import React, { Component } from 'react';
import Campaign from './Campaign';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      // initial state
      campaigns: { }
    };
  }

  addCampaign() {
    console.log('adding campaign');
    const campaign = { name: ''};
    const campaigns = {...this.state.campaigns}; /// ... (spread) copies state
    // add in new fish
    const timestamp = Date.now();
    campaigns[`campaign-${timestamp}`] = campaign;
    // this.state.fishes.fish1 = fishes // not great
    // set state
    this.setState({ campaigns }); // or fishes: fishes
  }

  render() {
    return (
      <div className="App">
        Create a campaign on Twitter Ads API
        <ul className="list-campaigns">

        <button onClick={() => this.addCampaign()} >Add Campaign</button>

        {Object
          .keys(this.state.campaigns)
          .map(key => <Campaign 
            key={key} 
            index={key} 
            details={this.state.campaigns[key]} 
            />)
        }   
        </ul>
      </div>
    );
  }
}

export default App;
