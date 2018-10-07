import React from 'react';

import Button from './Button';

export default class FavouriteButton extends React.Component{

	constructor(props, context){

		super(props, context);

		this.state = {
			active: this.props.active
		}

		this.setActive = this.setActive.bind(this);
		this.setInactive = this.setInactive.bind(this);
	};

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
			<Button className="btn btn-block btn-secondary my-1" label="Usuń z ulubionych" icon="star" onClick={this.setInactive} /> :
			<Button className="btn btn-block btn-secondary my-1" label="Dodaj do ulubionych" icon="star-outline" onClick={this.setActive} />
		)
	}
}

FavouriteButton.defaultProps = {
	active: false,
	onActivate: function(){},
	onDeactivate: function(){}
};