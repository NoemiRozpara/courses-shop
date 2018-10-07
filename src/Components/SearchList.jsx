import React from 'react';
import actions from '../app';

export default class SearchList extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			'query': '',
			'filteredList': []
		}

		this.filterList = this.filterList.bind(this);
	};

	filterList(event){

		event.persist();

		clearTimeout(this.search);

		this.search = setTimeout(() => {

			let query = event.target.value;

			this.setState({
				filteredList: this.props.list.filter((course) => (
					query.length >= 3 && (
					   course.title.toLowerCase().includes(query.toLowerCase())
					|| course.description.toLowerCase().includes(query.toLowerCase())
					|| course.author.toLowerCase().includes(query.toLowerCase())
					)
				))
			})
		}, 300)
	}

	render(){

		return (
			<div>
				{this.props.children}
				<input type="text" onChange={this.filterList} className="form-control" placeholder="Wyszukaj kursy" />
				<hr />
				<div className="list-group">
					{ 
						this.state.filteredList.map((course) => (
						<a className={"list-group-item" + (this.props.selected === course ? " active" : "")} 
									key={course.id} 
									onClick={()=>this.props.onSelect(course)}>
							<h4 className="list-group-item-heading">{course.title}</h4>
							<p className="list-group-item-text">{course.author}</p>
						</a>
						))
					}
				</div>
			</div>
		);
	}
}