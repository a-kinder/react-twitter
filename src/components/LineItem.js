import React from 'react';
class LineItem extends React.Component {
	constructor() {
		super();
		this.renderLineItemForm = this.renderLineItemForm.bind(this);

    this.state = {
      // initial state
      lineItems: {}
    };
	}

	renderLineItemForm(key) {
		// const lineItem = this.props.lineItems[key];
		return(
			<div className="line-item-edit" key={key}>
				<input type="text" name="name" placeholder="Line Item Name"/>
				<input type="text" name="url" placeholder="Video URL"/>
				<button onClick={() => this.props.addLineItem(key)}>Add Line Item</button>
			</div>
		)
	}

	render() {
		return(
			<div>
				<h3>Line Items</h3>
				{ this.renderLineItemForm() }
			</div>
			)
	}
}

export default LineItem;