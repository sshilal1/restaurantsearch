import React, { Component } from 'react';
import {Navbar, InputGroup, InputGroupAddon, Input, Form} from 'reactstrap';
import logo from '../images/thomas_logo.png';
import search from '../images/glyphicons-28-search.png';

class ThomasBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			searchtext: this.props.searchtext
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.returnToHome = this.returnToHome.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			searchtext : event.target.value
		})
	}

	handleSubmit(event) {
		var searchtext = this.state.searchtext;
		event.preventDefault();
		this.props.onSearch(searchtext);
	}

	// This function returns the user to the home page
	returnToHome() {
		this.props.returnHome();
	}

	render() {

		const {searchtext} = this.state;

		if (this.props.search) {
			return (
				<Navbar style={{background: "#06344e"}}>
					<div className="container">
						<img style={{width:"180px",cursor:"pointer"}} src={logo} alt="logo" onClick={this.returnToHome}/>	
						<Form inline className="flex justify-content-center" style={{width:"33%"}} onSubmit={this.handleSubmit}>
							<InputGroup>
								<Input placeholder={searchtext} onChange={this.handleInputChange}/>
								<InputGroupAddon onClick={this.handleSubmit}><img style={{width:"15px"}} src={search} alt="search"/></InputGroupAddon>
							</InputGroup>
						</Form>
					</div>
				</Navbar>
			);
		}
		else {
			return (
				<Navbar style={{background: "#06344e"}}>
					<div className="container">
						<img style={{width:"180px",cursor:"pointer"}} src={logo} alt="logo" onClick={this.returnToHome}/>
					</div>
				</Navbar>
			);
		}
	}
}

export default ThomasBar;