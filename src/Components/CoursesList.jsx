import React from 'react';

import Draggable from './Draggable';
import Course, {CoursePromoLabel, CourseDetails} from './Course';

const CoursesList = ({list}) => (
	<div>
		<h1> Kursy </h1>
		<hr />
		<div>
			{list.map((data) => <Draggable key={data.id} data={data} image={data.image}>
					<Course data={data} Details={CourseDetails}>
			  		{/* Promotion */}
		  			<CoursePromoLabel data={data} />

			  		{/* Course Actions 
			  		<CourseActions data={data} />*/}
				</Course>
			</Draggable>)}
		</div>
	</div>
)

export default CoursesList;