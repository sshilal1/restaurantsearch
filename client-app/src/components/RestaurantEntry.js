import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

import RestaurantPopup from './RestaurantPopup';
import seal from '../images/seals/Nyc-seal-blue.png';
import {titleCase, getDateObj} from '../helpers';

class RestaurantEntry extends Component {

	constructor() {
		super();
		this.togglePop = this.togglePop.bind(this);

		this.state = {
			popoverOpen: false
		};
	}

	togglePop() {
		this.setState({
			popoverOpen: !this.state.popoverOpen
		});
	}

	render() {

		const { name,cuisine,street,phone,grade,gradeDate,building,zipcode,imageUrl,boro } = this.props;

		var standard = (grade === 'Not Yet Graded' || grade === null) ? 'GP' : grade.toLowerCase();
		var rank = require('../images/letters/'+standard+'.png');
		var dollars = '$'.repeat(3);
		var number = `(${phone.substring(0,3)}) ${phone.substring(3,6)}-${phone.substring(6,10)}`;
		var address = titleCase(`${building} ${street}, ${boro}`) + `, NY ${zipcode}`;
		var dateobj = getDateObj(gradeDate);
		var classn = `rank-img ${standard}-sm`;

		var textStyle = {
			fontSize: ".9em",
    	marginBottom: ".2em"
		}

		if (this.state.popoverOpen) {
			var popOver = (
				<div>
					<div className="restaurant-pop">
						<RestaurantPopup {...this.props}/>
					</div>
					<div className="overlay"></div>
				</div>
			);
		}
		else {
			var popOver = null;
		}

		return (
			<Card onClick={this.togglePop} style={{maxWidth:"400px"}}>
				<div style={{width:"100%",height:"250px", overflow:"hidden"}}>
					<CardImg className="wide" src={imageUrl} alt="Card image cap" />
				</div>
				<CardBody>
					<h6 style={{fontWeight:"bold",color:"#00334d"}}>{titleCase(name)}</h6>
					<CardText style={{...textStyle, color:"grey"}}>{cuisine} &middot; {dollars}</CardText>
					<CardText style={textStyle}>{address}</CardText>
					<CardText style={textStyle}>{number}</CardText>
					<div className="rank-box flex">
						<img className="rank-img seal" src={seal} alt="search"/>
						<img className={classn} src={rank} alt="search"/>
						<div className="inspection-date">{dateobj.month} &#183; {dateobj.day} &#183; {dateobj.year}</div>
					</div>
				</CardBody>
				{popOver}
			</Card>
		);
	}
}

export default RestaurantEntry;