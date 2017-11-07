import React from 'react';

import RestaurantEntry from './RestaurantEntry';
import './app.css';

class CardRow extends React.Component {
	render() {

		const restaurants = this.props.restaurants;

		var Restaurants = restaurants.map((restaurant) => {
				return <RestaurantEntry key={restaurant.id} {...restaurant}/>
		});

		return (
			<div className="card-deck">
				{Restaurants}
			</div>
		);
	}
}

export default CardRow;


