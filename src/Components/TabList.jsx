import React from 'react';

const TabList = (props) => {
	let tabs = React.Children.toArray(props.children)

	return <div>
		{tabs.filter( tab => props.activeTab === tab.props.name )}
	</div>
}

export default TabList;