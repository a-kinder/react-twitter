import React from 'react'

class Target extends React.Component {

	constructor() {
		super();
		this.renderTargetForm = this.renderTargetForm.bind(this);

    this.state = {
      // initial state
      targets: {}
    };
	}

	renderTargetForm(key) {
		// const target = this.props.targets[key];
		return(
			<div className="target-edit" key={key}>
			<select type="text" name="type" placeholder="Target Type" >
					<option value="interests">Interests</option>
					<option value="gender">Gender</option>
				</select>
				<input type="text" name="value" placeholder="Target Value"/>
				<button onClick={() => this.props.addTarget(key)}>Add Target</button>
			</div>
		)
	}

	render() {
		return(
			<div>
				<h3>Targets</h3>
				{ this.renderTargetForm() }
			</div>
		)
	}
}

export default Target;