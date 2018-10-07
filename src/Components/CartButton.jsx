import React from 'react';

import Button from './Button';

export default class CartButton extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			active: this.props.active
		}
		this.setActive = this.setActive.bind(this);
		this.setInactive = this.setInactive.bind(this);
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			active: nextProps.active
		})
	}

	setActive(){
		this.setState({
			active: true
		})
		this.props.onActivate()
	}

	setInactive(){
		this.setState({
			active: false
		})
		this.props.onDeactivate()
	}

	render(){
		return(
			this.state.active ?
			<Button className="btn btn-danger btn-block" icon="remove" label="Usuń z koszyka" onClick={this.setInactive} /> :
			<Button className="btn btn-success btn-block" icon="shopping-cart" label="Dodaj do koszyka" onClick={this.setActive} />
		)
	}
}

CartButton.defaultProps = {
	active: false,
	onActivate: function(){},
	onDeactivate: function(){}
}