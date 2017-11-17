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
			totalresults : 'loading...',
			searchtext : "",
			search : false,
			page : 1
		}

		this.searchRestaurants = this.searchRestaurants.bind(this);
		this.returnHome = this.returnHome.bind(this);
		this.sortByGrade = this.sortByGrade.bind(this);
		this.changePage = this.changePage.bind(this);
	}

	// This function returns the user to the home page by clearing all state variables
	returnHome() {
		this.setState({
			restaurants: [],
			totalresults : "loading...",
			searchtext : "",
			search : false,
			page : 1
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

		this.setState({
			searchtext : searchtext
		})

		// First we get a quick response to populate the page with results
		axios.post('http://localhost:8008/search', {
			text: searchtext
		})
		.then( (response) => {
			console.log(response.data);
			this.setState({
				restaurants : response.data,
				search : true,
				page : 1
			})
			this.sortByGrade("asc");

			// THEN we query for the FULL count of results, so react can process the page numbers
			return axios.post('http://localhost:8008/count', {
				text: searchtext
			})
		})
		.then( (response) => {
			console.log(response.data);
			this.setState({
				totalresults : response.data
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	changePage(page) {
		// Generate a GET uri with query parameters
		var uri = 'http://localhost:8008/page?search=' + this.state.searchtext + '&page=' + page;
		axios.get(uri)
		.then( (response) => {
			console.log(response);
			this.setState({
				restaurants : response.data,
				page : page
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {

		const { restaurants, search, searchtext, totalresults, page } = this.state;

		return (
			<div>
				<ThomasBar search={search} searchtext={searchtext} onSearch={this.searchRestaurants} returnHome={this.returnHome}/>
				<Searcher search={search} searchtext={searchtext} onSearch={this.searchRestaurants}/>
				<MiddlePage search={search} page={page} restaurants={restaurants} totalresults={totalresults} changePage={this.changePage} sortGrade={this.sortByGrade}/>
				<ThomasBar returnHome={this.returnHome}/>
			</div>
		);
	}
}

export default Main;