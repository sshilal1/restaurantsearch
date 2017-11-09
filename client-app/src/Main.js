import React from 'react';
import axios from 'axios';

import MiddlePage from './components/MiddlePage';
import ThomasBar from './components/ThomasBar';
import Searcher from './components/Searcher';
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
		this.returnHome = this.returnHome.bind(this);
		this.sortByGrade = this.sortByGrade.bind(this);
	}

	// This function returns the user to the home page by clearing all state variables
	returnHome() {
		this.setState({
			restaurants: [],
			searchtext : "",
			search : false
		})
	}

	sortByGrade(order) {
		var restaurants = this.state.restaurants;
		if (order === "asc") {
			restaurants.sort(function(a, b) {
				var nameA = (a.grade === 'Not Yet Graded' || a.grade === null) ? 'Z' : a.grade;
				var nameB = (b.grade === 'Not Yet Graded' || b.grade === null) ? 'Z' : b.grade;
				if (nameA < nameB) { return -1; }
				if (nameA > nameB) { return 1; }
				return 0;
			});
		}
		else if (order === "desc") {
			restaurants.sort(function(a, b) {
				var nameA = (a.grade === 'Not Yet Graded' || a.grade === null) ? 'Z' : a.grade;
				var nameB = (b.grade === 'Not Yet Graded' || b.grade === null) ? 'Z' : b.grade;
				if (nameA > nameB) { return -1; }
				if (nameA < nameB) { return 1; }
				return 0;
			});
		}
		this.setState({
			restaurants : restaurants
		})
	}

	searchRestaurants(searchtext) {
		console.log("searching for:", searchtext);
		this.setState({
			searchtext : searchtext
		})
		axios.post('http://localhost:4000/search', {
			text: searchtext
		})
		.then( (response) => {
			console.log(response.data);
			this.setState({
				restaurants : response.data,
				search : true
			})
			this.sortByGrade("asc");
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {

		const { restaurants, search, searchtext } = this.state;

		return (
			<div>	
				<ThomasBar search={search} searchtext={searchtext} onSearch={this.searchRestaurants} returnHome={this.returnHome}/>
				<Searcher search={search} searchtext={searchtext} onSearch={this.searchRestaurants}/>
				<MiddlePage search={search} restaurants={restaurants} sortGrade={this.sortByGrade}/>
				<ThomasBar returnHome={this.returnHome}/>
			</div>
		);
	}
}

export default Main;

//<button style={{width: "100px", height: "100px"}} onClick={this.searchRestaurants}/>