import StateStore from './StateStore';
import courses_data from './Data/courses_data';

var AppState = new StateStore()
AppState.state = {
	page: 1,
	list: courses_data.slice(0,3),

	favourites_list: [],
	favourites_map: {},

	cart_list: [],
	cart_map: {},

	rating_map: courses_data.reduce((map, course)=>{
		map[course.id] = 0;
		return map
	}, {}),

	authors_map: courses_data.reduce((map, course)=>(
		(map[course.author] = course.author) && map
	), {}), 

	courses: courses_data,
	courses_map: courses_data.reduce((map, course)=>{
		map[course.id] = course;
		return map
	}, {}),

	activeTab: 'Kursy'
}

var actions = AppState.createActions({

	loadMore: function(event){
		var page = this.page + 1;
		this.page = page;
		this.list = this.courses.slice(0, this.page * 3);
	},
	addFavourite: function(id){
		this.favourites_map[id] = true;
		let index = this.courses.findIndex((course) => course.id === id)
		if(index !== -1)
			this.favourites_list.push(courses_data[index])
	},
	removeFavourite: function(id){
		this.favourites_map[id] = false;
		let index = this.favourites_list.findIndex((course) => course.id === id)
		if(index !== -1) 
			this.favourites_list.splice(index, 1)
	},
	saveCourse: function(course){
		if(undefined === typeof course.id){
			course.id = new Date();
			this.courses.push(course);
			this.courses_map[course.id] = course;
			this.list.unshift(course);
		}
		else{
			Object.assign(this.courses_map[course.id], course)
		}
	},
	addToCart: function(id){
		if(!this.cart_map[id]){
			this.cart_map[id] = 1;
			let index = this.courses.findIndex((course) => course.id == id);
			if(index !== -1){
				this.cart_list.push(courses_data[index]);
				(id) => this.removeFavourite(id);
			}
		}
		else{
			this.cart_map[id]++
		}
	},
	removeFromCart: function(id){
		this.cart_map[id] === 0 ? 0 : this.cart_map[id] = 0;
		if(!this.cart_map[id]){
			let index = this.cart_list.findIndex((course) => course.id === id)
			if(index !== -1) 
				this.cart_list.splice(index, 1)
		}
	},
	setRating: function(id, value){
		this.rating_map[id] = value
	},
	navigateTo: function(tabName){
		this.activeTab = tabName
	}
})

export {AppState, actions};
export default AppState