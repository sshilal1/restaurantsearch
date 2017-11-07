import React, { Component } from 'react';
import logo from './thomas_logo.png';

class ThomasBar extends Component {
	render() {
		return (
			<div class= "container-fluid">
				<div class="row" style={{padding: "10px",backgroundColor: "#06344e"}}>
					<div class="col" style={{textAlign:"center"}}><img src={logo} alt="logo" /></div>
					<div class="col"></div>
				</div>
			</div>
		);
	}
}

export default ThomasBar;


