import React from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

import ThomasBar from './components/ThomasBar';
import Searcher from './components/Searcher';
import CardRow from './components/CardRow';
import './app.css';

class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			restaurants: [],
			searchtext : "",
			search : false
		}

		this.searchRestaurants = this.searchRestaurants.bind(this);
	}

	searchRestaurants(searchtext) {
		console.log("searching for:", searchtext);
		this.setState({
			searchtext : searchtext,
			search : true
		})
		axios.post('http://localhost:4000/search', {
			text: searchtext
		})
		.then( (response) => {
			console.log(response.data);
			this.setState({
				restaurants : response.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {

		const { restaurants, search, searchtext } = this.state;
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
				<ThomasBar search={search} searchtext={searchtext} onSearch={this.searchRestaurants}/>
				<Searcher search={search} searchtext={searchtext} onSearch={this.searchRestaurants}/>
				<div className="container">
						<div className="row">
							<Button className="sort-button">Grade  &#9650;</Button>
							<Button className="sort-button">Price  &#9660;</Button>
							<div>Viewing 1-30 of 260</div>
						</div>
					{CardRows}
				</div>
				<ThomasBar/>
			</div>
		);
	}
}

export default Main;