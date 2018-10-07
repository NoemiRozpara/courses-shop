import '../Styles/App.css';

import React from 'react';

import CoursesList from './CoursesList';
import CoursesEditor from './CoursesEditor';
import Nav from './Nav';
import TabList from './TabList';
import TabPanel from './TabPanel';
import ShoppingCartList from './Cart';
import FavouriteCoursesList from './FavouritesList';
import SearchList from './SearchList';

import {AppState, actions} from '../app';

class App extends React.Component{

	constructor(props, context) {
    	super(props, context);

    	this.state = {...this.props.store.state};
	}

	componentDidMount(){
		AppState.addListener((state) => {
			this.setState({
				page: state.page,
				list: state.list,
				favourites_list: state.favourites_list,
				activeTab: state.activeTab
			})
		})
	}

	render(){
		return (
		  <div>
			<Nav onChange={actions.navigateTo} activeTab={this.state.activeTab}></Nav>
		    <div className="container pt-3" id="mainContainer">
                <div className="col-xs-12">
					<TabList activeTab={this.state.activeTab}>
						<TabPanel name="Koszyk">
							<ShoppingCartList list={this.state.cart_list} />
						</TabPanel>
						<TabPanel name="Ulubione">
							<FavouriteCoursesList list={this.state.favourites_list} />
						</TabPanel>
						<TabPanel name="Kursy">
							<CoursesList list={this.state.list} />
				  			<button className="btn btn-dark btn-block" onClick={actions.loadMore}> Pokaż więcej ... </button>
						</TabPanel>
						<TabPanel name="Edytor">
							<h1> Edytor </h1>
							<hr />
							<CoursesEditor list={this.state.courses}></CoursesEditor>
						</TabPanel>
					</TabList>
				</div>
		    </div>
		  </div>
		)
	}
}

export default App