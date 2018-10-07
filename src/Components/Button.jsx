import React from 'react';

const Button = (props) => ( 
	<button className="btn btn-light"  {...props}>
		{props.icon && <span className={ 'mdi mdi-'+props.icon }></span>}
		{' '}
		{props.label}
	</button>
)

export default Button