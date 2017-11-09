import React from 'react';
import {Jumbotron, Button, InputGroup, InputGroupAddon, Input, Form, FormGroup} from 'reactstrap';

import bgimage from '../images/image_5.jpg';

class Searcher extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			searchtext: ""
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			searchtext : event.target.value
		})
	}

	handleSubmit(event) {
		var searchtext = this.state.searchtext;
		console.log(searchtext)

		event.preventDefault();
		this.props.onSearch(searchtext);
	}
  
	render() {
		if (this.props.search) {

			var bgStyle = {
				backgroundImage : "url(" + bgimage + ")",
				backgroundPosition : "64%"
			}

			return (
				<Jumbotron className="wide searcher" style={bgStyle}>
					<div className="container">
						<div className="textish">Search:</div>
						<div className="textish" style={{fontStyle: "italic"}}>{this.props.searchtext.toUpperCase()}</div>
					</div>
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
						
						<Form inline className="flex justify-content-center" onSubmit={this.handleSubmit}>
        			<FormGroup>
								<Input id="search-bar" onChange={this.handleInputChange}/>
								<Button id="search-button">Search</Button>
							</FormGroup>
						</Form>
						
					</div>
				</Jumbotron>
			);
		}
	}
}

export default Searcher;


