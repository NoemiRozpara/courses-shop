import React from 'react'; 

const Droppable = (props) => {
	function onDragOver(e){
		e.preventDefault();
	}

	function onDrop(e){
		let data = e.dataTransfer.getData('application/x-edukursy-kurs');
		props.onDrop(data, e);
	}

	return <div onDragOver={onDragOver} onDrop={onDrop}>{props.children}</div>
}

export default Droppable