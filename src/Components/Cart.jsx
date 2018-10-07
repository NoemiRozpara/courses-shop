import React from 'react';

import {AppState, actions} from '../app';
import {Course, CourseActions, CourseDetails} from './Course';
import CartButton from './CartButton';

const CartDetails = (props) => (
	<div className="course_details text-center">
		<h1 className="thumbnail">{props.data.price} PLN</h1>
		<CartButton active={AppState.state.cart_map[props.data.id]} 
			onActivate={()=>actions.addToCart(props.data.id)} 
			onDeactivate={()=>actions.removeFromCart(props.data.id)}/>
	</div>
)

const ShoppingCartList = ({list}) =>(
	<div>
		<h1> Koszyk </h1>
		<hr />
		<div>
			{list.length === 0 ? <p> Koszyk jest pusty </p> : null}
			{list.map((data) => <Course data={data} key={data.id} Details={CourseDetails}>	
			</Course>)}
		</div>
	</div>
)

export {ShoppingCartList, CartDetails};
export default ShoppingCartList;