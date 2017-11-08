import React from 'react';
import {Jumbotron, Button, InputGroup, InputGroupAddon, Input} from 'reactstrap';

class Searcher extends React.Component {
	render() {
		return (
			<Jumbotron className="gradience">
				<div className="container">
					<div className="col-12">
						<h1 style={{textAlign:"center", color:"white"}}>NYC Restaurants</h1>
					</div>
					<div className="flex justify-content-center">
						<Input id="search-bar"/>
						<Button id="search-button">Search</Button>
					</div>
				</div>
			</Jumbotron>
		);
}
}

export default Searcher;


