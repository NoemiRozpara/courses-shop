import React from 'react';
import {actions} from '../app';

export default class Rating extends React.Component{


	constructor(props, context){
		super(props, context);

		this.state = {
			value: this.props.value,
			indicator: this._makeIndicator(this.props.value, this.props.max),
			rating: this.props.value,
			courseId: this.props.courseId
		}
	};

	componentWillReceiveProps(nextProps){
		if(this.state.rating !== nextProps.value){
			this.setRating(nextProps.value)
		}
	}

	_makeIndicator(value, max){
		return [...Array(value).fill(true), ...Array(max - value).fill(false)]
	}

	setIndicator(value){
		this.setState({
			indicator: this._makeIndicator(value, this.props.max)
		})
	}

	setRating(value){
		this.setState({
			rating: value,
			value: value
		});
		this.setIndicator(value);
		this.props.onChange(value);
	}

	onMouseEnter(index){
		return() => this.setIndicator(index);
	}

	onMouseLeave(index){
		return() => this.setIndicator(this.state.rating);
	}

	onClick(index){
		return() => this.setRating(index);
	}

	render(){
		return (
			<div> 
				{this.state.indicator.map((item, index) => (
						<span key={index} 
							  className={"mdi mdi-star" + (item ? "" : "-outline")}
							  onMouseEnter={this.onMouseEnter(index + 1)}
							  onMouseLeave={this.onMouseLeave(index + 1)}
							  onClick={()=>actions.setRating(this.props.courseId, index + 1)}>
						</span>
						)
					)
				}
			</div>
		)
	}	
}

Rating.defaultProps = {
	value: 0,
	max: 5,
	onChange: function(){}
}