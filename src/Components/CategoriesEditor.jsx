import React from 'react';

export default class CategoriesEditor extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			categories: this.props.categories
		}

		this.onAdd = this.onAdd.bind(this);
		this.addCategory= this.addCategory.bind(this);
		this.removeCategory= this.removeCategory.bind(this);
	};

	componentWillReceiveProps(nextProps){
		this.setState({
			categories: nextProps.categories
		})
	}

	onAdd(){
		this.addCategory(this.refs.addCat.value)
	}

	addCategory(cat){
		let categories = [...this.state.categories]
		let index = categories.indexOf(cat);
		if (index !== -1){
			return
		}
		this.setState({
			categories: [...categories, cat]
		}, ()=>this.props.onChange(this.state.categories))
	}

	removeCategory(cat){
		let categories = [...this.state.categories]
		let index = categories.indexOf(cat);
		if (index === -1){
			return
		}
		categories.splice(index,1)
		this.setState({
			categories: categories
		}, ()=>this.props.onChange(this.state.categories))
	}

	render(){

		return(
			<div>
				<ul className="nav">
					{this.state.categories.map((cat) =>
							<li key={cat}>
								<button className="btn btn-xs" onClick={e=>this.removeCategory(cat)}>&times;</button>
								<span>{cat}</span>
							</li>
						)
					}
				</ul>
				<div className="form-group">
					<input type="text" className="form-control" ref="addCat"/>
					<input type="button" value="Dodaj" className="btn btn-default" onClick={this.onAdd}/>
				</div>
			</div>
		)
	}
}