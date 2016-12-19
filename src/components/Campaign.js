import React from 'react';
import LineItem from './LineItem';
import Target from './Target';
class Campaign extends React.Component {
	constructor() {
		super();
		this.renderCampaignForm = this.renderCampaignForm.bind(this);

    this.state = {
      // initial state
      lineItems: {},
      targets: {}
    };
  
	}
	addTarget()
	{
		// update our state
		const target = {};
		const targets = {...this.state.targets}; /// ... (spread) copies state
		// add in new fish
		const timestamp = Date.now();
		targets[`target-${timestamp}`] = target;
		// this.state.fishes.fish1 = fishes // not great
		// set state
		this.setState({ targets }); // or fishes: fishes
	}

	renderCampaignForm(key) {
		// const campaign = this.props.campaigns[key];
		return(
			<div className="campaign-edit" key={key}>
				<input type="text" name="name" placeholder="Campaign Name"/>
				<LineItem 
				lineItems={this.state.lineItems} />
				<Target 
				targets={this.state.targets}
				addTarget={this.addTarget} />
			</div>
		)
	}

	render() {
		return(
			<div>
				<h2>Campaigns</h2>

				{ this.renderCampaignForm() }
			</div>
			)
	}
}
export default Campaign;