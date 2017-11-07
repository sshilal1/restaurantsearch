import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class RestaurantEntry extends Component {
	render() {

		const { name,type,price,address,num,rating } = this.props;

		var dollars = '$'.repeat(price);

		return (
			<div class="col-4">
				<Card>
					<CardImg top width="100%" src="http://restaurants-static.tpco.info.s3-website-us-east-1.amazonaws.com/design-assets/restaurants/image_1.jpg" alt="Card image cap" />
					<CardBody>
						<h3 style={{fontWeight:"bold",color:"#14608a"}}>{name}</h3>
						<CardText>{type} - {dollars}</CardText>
						<CardText>{address}</CardText>
						<CardText>{num}</CardText>
					</CardBody>
				</Card>
			</div>
		);
	}
}

export default RestaurantEntry;