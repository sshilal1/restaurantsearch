import React, { Component } from 'react';
import {Navbar, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import logo from './thomas_logo.png';
import search from './images/glyphicons-28-search.png';
import './app.css';

class ThomasBar extends Component {
	render() {

		if (this.props.search) {
			return (
				<Navbar style={{background: "#06344e"}}>
					<div className="container">
						<img style={{width:"185px"}} src={logo} alt="logo"/>
						<InputGroup style={{width:"33%"}}>
							<Input placeholder="Amount"/>
							<InputGroupAddon><img style={{width:"15px"}} src={search} alt="search"/></InputGroupAddon>
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


