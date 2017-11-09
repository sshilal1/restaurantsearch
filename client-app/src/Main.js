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
	}

	// This function returns the user to the home page by clearing all state variables
	returnHome() {
		this.setState({
			restaurants: [],
			searchtext : "",
			search : false
		})
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
		

		return (
			<div>	
				<ThomasBar search={search} searchtext={searchtext} onSearch={this.searchRestaurants} returnHome={this.returnHome}/>
				<Searcher search={search} searchtext={searchtext} onSearch={this.searchRestaurants}/>
				<MiddlePage search={search} restaurants={restaurants}/>
				<ThomasBar returnHome={this.returnHome}/>
			</div>
		);
	}
}

export default Main;

//<button style={{width: "100px", height: "100px"}} onClick={this.searchRestaurants}/>