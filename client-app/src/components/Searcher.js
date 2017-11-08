import React from 'react';
import {Jumbotron, Button, InputGroup, InputGroupAddon, Input} from 'reactstrap';

import bgimage from '../images/image_5.jpg';

class Searcher extends React.Component {
	render() {
		if (this.props.search) {

			var bgStyle = {
				backgroundImage : "url(" + bgimage + ")",
				backgroundPositionY: "60%"
			}

			return (
				<Jumbotron className="searcher" style={bgStyle}>
				</Jumbotron>
			);
		}
		else {
			return (
				<Jumbotron className="gradience searcher">
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
}

export default Searcher;


