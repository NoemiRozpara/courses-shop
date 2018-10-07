import React from 'react';

import {Course, CourseDetails, CourseActions, CoursePromoLabel} from './Course';

const FavouriteCoursesList = ({list}) => (
	<div>
		<h1> Ulubione kursy </h1>
		<hr />
		<div>
			{list.length === 0 ? <p> Brak ulubionych kursów </p> : null}
			{list.map((data) => <Course data={data} key={data.id} Details={CourseDetails}>
		  		{/* Promotion */}
	  			<CoursePromoLabel data={data} />
			</Course>)}
		</div>
	</div>
)

export default FavouriteCoursesList;