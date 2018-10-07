import fancy_logo from '../Media/fancy_logo.png';
import '../Styles/Nav.css';

import React from 'react';

import Droppable from './Droppable';
import {AppState, actions} from '../app';

const Tab = (props) => {
	return props.children || <a className="nav-link"> {props.name} </a>
}

const TabsNav = (props) => {
	let tabs = React.Children.toArray(props.children)

	return <ul className={props.className || "navbar-nav mr-auto"}>
		{tabs.map( tab => 
			<li key={tab.props.name} 
				className={props.activeTab === tab.props.name ? 'active nav-item' : 'nav-item'}
				onClick={(e)=>props.onChange(tab.props.name, e)}>
				{tab}
			</li>)}
	</ul>
}

const Nav = (props) => {

	return( 
	<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<a className="navbar-brand">
			<img src={fancy_logo} alt="My fancy logo" />
		</a>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    	<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<TabsNav className="nav navbar-nav navbar-left" onChange={props.onChange} activeTab={props.activeTab}>
		        <Tab name="Kursy"></Tab>
		        <Tab name="Ulubione"></Tab>
		        <Tab name="Edytor"></Tab>
			</TabsNav>
			<TabsNav className="nav navbar-nav navbar-right" onChange={props.onChange} activeTab={props.activeTab}>
				<Tab name="Koszyk">
					<a>
						<Droppable onDrop={(data)=>actions.addToCart(data)}>
							<span className="glyphicon glyphicon-shopping-cart"></span> Koszyk [{AppState.state.cart_list.length}]
						</Droppable>
					</a>
				</Tab>
			</TabsNav>
		</div>
	</nav>
        
)
}

export {Tab, TabsNav, Nav};
export default Nav