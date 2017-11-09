import React, { Component } from 'react';
import {Navbar, InputGroup, InputGroupAddon, Input} from 'reactstrap';
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

		const {searchtext} = this.state;

		if (this.props.search) {
			return (
				<Navbar style={{background: "#06344e"}}>
					<div className="container">
						<img style={{width:"185px"}} src={logo} alt="logo"/>
						<InputGroup style={{width:"33%"}}>
							<Input placeholder={this.props.searchtext} onChange={this.handleInputChange}/>
							<InputGroupAddon onClick={this.handleSubmit}><img style={{width:"15px"}} src={search} alt="search"/></InputGroupAddon>
						</InputGroup>
					</div>
				</Navbar>
			);
		}
		else {
			return (
				<Navbar style={{background: "#06344e"}}>
					<div className="container">
						<img style={{width:"180px"}} src={logo} alt="logo"/>
					</div>
				</Navbar>
			);
		}
	}
}

export default ThomasBar;


