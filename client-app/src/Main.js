import React from 'react';
import RestaurantEntry from './RestaurantEntry';
import ThomasBar from './ThomasBar';

class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			restaurants: [{
				id: 12384,
				name: "Los Tacos No. 1",
				address: "251 W 5th st, New York, NY",
				num: "(845)-436-4593",
				type: "Mexican",
				price: 1,
				rating: "A"
			},
			{
				id: 84509,
				name: "Dos Caminos",
				address: "251 W 800th, New York, NY",
				num: "(845)-fdf-4593",
				type: "Mexican",
				price: 3,
				rating: "B"
			},
			{
				id: 63439,
				name: "Sinugual",
				address: "251 W 5th st, New Jersey, NY",
				num: "(730)-436-7391",
				type: "Mexican",
				price: 2,
				rating: "C"
			}]
		}
	}
	render() {

		const { restaurants } = this.state;

		console.log(restaurants);

		const RestaurantEntries = restaurants.map((restaurant, index) => {
			return <RestaurantEntry key={restaurant.id} {...restaurant}/>
		});

		return (
			<div>
				<ThomasBar/>
				<div class="container">
					<div class="row">
						{RestaurantEntries}
					</div>
				</div>
				<ThomasBar/>
			</div>
		);
	}
}

export default Main;