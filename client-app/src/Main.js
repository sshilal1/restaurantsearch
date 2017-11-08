import React from 'react';

import ThomasBar from './components/ThomasBar';
import Searcher from './components/Searcher';
import CardRow from './components/CardRow';
import './app.css';

import {Jumbotron} from 'reactstrap';

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
			},
			{
				id: 65462,
				name: "kkkkkk",
				address: "251 W 5th st, New York, NY",
				num: "(845)-436-4593",
				type: "Mexican",
				price: 1,
				rating: "A"
			},
			{
				id: 15327,
				name: "Dos Caminos",
				address: "251 W 800th, New York, NY",
				num: "(845)-fdf-4593",
				type: "Mexican",
				price: 3,
				rating: "B"
			}]
		}
	}
	render() {

		const { restaurants } = this.state;
		const len = restaurants.length;

		var CardRows = [];
		var Restaurants = [];
		for (let i=0; i<len; i++) {
			Restaurants.push(restaurants[i]);
			if (i%3 === 2 || i === (len-1)) {
				CardRows.push(<CardRow restaurants={Restaurants}></CardRow>)
				Restaurants = [];
			}
		}

		return (
			<div>
				<ThomasBar search={false}/>
				<Searcher/>
				<div className="container">
					{CardRows}
				</div>
				<ThomasBar/>
			</div>
		);
	}
}

export default Main;