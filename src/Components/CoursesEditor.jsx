import React from 'react';

import SearchList from './SearchList';
import {AppState, actions} from '../app';
import CategoriesEditor from './CategoriesEditor';

class CoursesEditor extends React.Component{

	constructor(props, context) {
    	super(props, context);

    	this.state = {
    		'selected': null
    	};

    	this.select = this.select.bind(this);
	};

	select(course){
		this.setState({
			selected: course
		})
	}

	render(){

		return(
			<div className="row">
				<div className={this.state.selected ? "col-md-4" : "col-md-12"}>
					{this.props.children}
					<SearchList list={this.props.list} onSelect={this.select} selected={this.state.selected} />
				</div>
				{this.state.selected ? 
					(<div className="col-md-8">
						<CoursesEditorForm course={this.state.selected} 
										   onSave={ (course)=>actions.saveCourse(course) } 
										   onCancel={ ()=>this.select(null) } />
					</div>) 
					: null}
			</div>
		)
	}
}

class CoursesEditorForm extends React.Component{

	constructor(props, context){
		super(props, context);

		this.state = {
			course: {...this.props.course}
		}

		this.changeCourseField = this.changeCourseField.bind(this);
		this.onSave = this.onSave.bind(this);
		this.changeCategories = this.changeCategories.bind(this);
	};

	componentWillReceiveProps(nextProps){
		this.setState({
			course: {...nextProps.course}
		})
	}

	changeCourseField(event){

		let course = {...this.state.course};
		course[event.target.name] = event.target.value;

		this.setState({
			course: course
		})
	}

	changeCategories(categories){

		this.setState({
			course: {...this.state.course, categories: categories}
		})
	}

	onSave(event){
		event.preventDefault();
		this.props.onSave(this.state.course)
	}

	render(){

		return(

			<div>
				<h3>Edytuj kurs</h3>
				<form onSubmit={this.onSave}>
					<div className="form-group">
						<label className="control-label">Tytuł kursu:</label>
						<div>
							<input type="text"
							 	   name="title" 
								   className="form-control" 
								   value={this.state.course.title} 
								   onChange={this.changeCourseField} />
						</div>
						<label className="control-label">Autor kursu:</label>
						<div>
							<select name="author" 
								    className="form-control" 
								    value={this.state.course.author} 
								    onChange={this.changeCourseField}> 
								{Object.keys(AppState.state.authors_map).map(author=>
									<option key={author} value={author}>{author}</option>
								)}
							</select>
						</div>
						<label className="control-label">Opis kursu:</label>
						<div>
							<textarea name="description" 
								   className="form-control" 
								   cols="50"
								   rows="10"
								   value={this.state.course.description }
								   onChange={this.changeCourseField} />
						</div>
						<label className="control-label">Czas trwania kursu:</label>
						<div>
							<input type="text" 
							 	   name="duration" 
								   className="form-control" 
								   value={this.state.course.duration} 
								   onChange={this.changeCourseField} />
						</div>
						<label className="control-label">Cena kursu:</label>
						<div>
							<input type="text" 
							 	   name="price" 
								   className="form-control" 
								   value={this.state.course.price} 
								   onChange={this.changeCourseField} />
						</div>
						<label className="control-label">Kategorie:</label>
						<div>
							<CategoriesEditor categories={this.state.course.categories}
							 	   			  onChange={this.changeCategories}></CategoriesEditor>
						</div>
					</div>
					<div className="form-group">
						<div className="button-group pull-right">
							<input type="button" className="btn btn-danger" value="Anuluj" onClick={this.props.onCancel} />
							<input type="submit" className="btn btn-success" value="Zapisz" />
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export {CoursesEditorForm, CoursesEditor};
export default CoursesEditor