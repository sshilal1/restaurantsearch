import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

import seal from '../images/seals/Nyc-seal-blue.png';

class RestaurantEntry extends Component {
	render() {

		const { name,cuisine,street,phone,grade,building,zipcode,imageUrl } = this.props;

		var standard = grade === 'Not Yet Graded' ? 'GP' : grade;

		var rank = require('../images/letters/'+standard.toLowerCase()+'.png');
		var dollars = '$'.repeat(3);

		var textStyle = {
			fontSize: ".9em",
    	marginBottom: ".2em"
		}

		return (
			<Card style={{maxWidth:"400px"}}>
				<div style={{width:"100%",maxHeight:"200px"}}>
					<CardImg className="wide" src={imageUrl} alt="Card image cap" />
				</div>
				<CardBody>
					<h6 style={{fontWeight:"bold",color:"#14608a"}}>{name}</h6>
					<CardText style={{...textStyle, color:"grey"}}>{cuisine} &middot; {dollars}</CardText>
					<CardText style={textStyle}>{street}</CardText>
					<CardText style={textStyle}>{phone}</CardText>
					<div className="rank-box">
						<img className="rank-img" src={seal} alt="search"/>
						<img className="rank-img" src={rank} alt="search"/>
						<div className="inspection-date">07 &middot; 12 &middot; 2017</div>
					</div>
				</CardBody>
				
			</Card>
		);
	}
}

export default RestaurantEntry;