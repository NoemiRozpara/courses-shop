import '../Styles/Course.css'

import React from 'react';

import FavouriteButton from './FavouriteButton';
import CartButton from './CartButton';
import Rating from './Rating';
import {AppState, actions} from '../app';

const CourseDetails = ({data}) => (
	<div>
	  	<table className="table course-details">
	  		<tbody>
		  		<tr>
		  			<th>Ocena kursu</th>
		  			<td>
		  				<Rating 
		  					max={5} 
		  					value={AppState.state.rating_map[data.id]}
		  					courseId={data.id}
		  					onChange={(rating) => console.log(rating)} />
		  			</td>
	  			</tr>
		  		<tr>
		  			<th>Autor</th>
		  			<td>{data.author}</td>
	  			</tr>
		  		<tr>
		  			<th>Czas trwania</th>
		  			<td>{data.duration}</td>
	  			</tr>
		  		<tr>
		  			<th>Cena</th>
		  			<td>{data.price} PLN</td>
	  			</tr>
	  		</tbody>
	  	</table>
		<CartButton active={AppState.state.cart_map[data.id]} 
			onActivate={()=>actions.addToCart(data.id)} 
			onDeactivate={()=>actions.removeFromCart(data.id)} />
		<CourseActions data={data} />
		<div className="clear" />
	</div>
)

const CourseMedia = ({data}) => ( <img src={data.image} alt="cover" />)

const NewLabel = ({data}) => ( data.is_new? <span className="label label-default">Nowy!</span> : null)

const CoursePromoLabel = ({data}) => ( data.is_promo? <b>Kurs jest w PROMOCJI!</b> : null)

const CourseActions = ({data}) => (
	<div>
		<FavouriteButton active={AppState.state.favourites_map[data.id]} 
			onActivate={()=>actions.addFavourite(data.id)} 
			onDeactivate={()=>actions.removeFavourite(data.id)}/>
	</div>
)

const Course = (props) => {
	const {data, Details} = props;

	return (
		<div className="col-xs-12">
		  	<div className="media course">

		  		{/* Course media column */}
		  		<div className="media-left">
		  			<CourseMedia {...props} />
		  		</div>

		  		{/* Course content column */}
		  		<div className="media-body">
			  		<h3>{data.title} <NewLabel {...props} /></h3>
		  			<p>{data.description}</p>

			  		{props.children}
		  		</div>

			  	{/* Course details column */}
			  	{Details?
			  		<div className="media-right">
			  			<Details {...props} />
				  	</div> : null
				}
			</div>
			<hr />
		</div>
	)
}

export {CourseDetails, CourseMedia, NewLabel, CoursePromoLabel, CourseActions, Course};
export default Course;