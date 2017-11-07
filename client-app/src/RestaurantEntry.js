import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import './app.css';

import seal from './images/seals/Nyc-seal-blue.png';

class RestaurantEntry extends Component {
	render() {

		const { name,type,price,address,num,rating } = this.props;

		var rank = require('./images/letters/'+rating.toLowerCase()+'.png');
		var dollars = '$'.repeat(price);

		return (
			<Card style={{maxWidth:"350px"}}>
				<CardImg src="http://restaurants-static.tpco.info.s3-website-us-east-1.amazonaws.com/design-assets/restaurants/image_1.jpg" alt="Card image cap" />
				<CardBody>
					<h3 style={{fontWeight:"bold",color:"#14608a"}}>{name}</h3>
					<CardText>{type} - {dollars}</CardText>
					<CardText>{address}</CardText>
					<CardText>{num}</CardText>
					<div className="rank-box">
						<img className="rank-img" src={seal} alt="search"/>
						<img className="rank-img" src={rank} alt="search"/>
						<div className="inspection-date">07 - 12 - 2017</div>
					</div>
				</CardBody>
				
			</Card>
		);
	}
}

export default RestaurantEntry;