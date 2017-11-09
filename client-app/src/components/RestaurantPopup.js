import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

import seal from '../images/seals/Nyc-seal-blue.png';

class RestaurantPopup extends Component {
	render() {

		const { name,cuisine,street,phone,grade,gradeDate,building,zipcode,imageUrl,boro } = this.props;

		var standard = grade === 'Not Yet Graded' ? 'GP' : grade.toLowerCase();
		var rank = require('../images/letters/'+standard+'.png');
		var dollars = '$'.repeat(3);
		var number = `(${phone.substring(0,3)}) ${phone.substring(3,6)}-${phone.substring(6,10)}`;
		var address = titleCase(`${building} ${street}, ${boro}`) + `, NY ${zipcode}`;
		var day = gradeDate.substring(8,10);
		var month = gradeDate.substring(5,7);
		var year = gradeDate.substring(0,4);
		var classn = `rank-img ${standard}-sm`;

		var textStyle = {
			fontSize: ".9em",
    	marginBottom: ".2em"
		}

		return (
			<Card style={{maxWidth:"400px"}}>
				<div style={{width:"100%",maxHeight:"250px", overflow:"hidden"}}>
					<CardImg className="wide" src={imageUrl} alt="Card image cap" />
				</div>
				<CardBody>
					<h6 style={{fontWeight:"bold",color:"#14608a"}}>{titleCase(name)}</h6>
					<CardText style={{...textStyle, color:"grey"}}>{cuisine} &middot; {dollars}</CardText>
					<CardText style={textStyle}>{address}</CardText>
					<CardText style={textStyle}>{number}</CardText>
					<div className="rank-box flex">
						<img className="rank-img seal" src={seal} alt="search"/>
						<img className={classn} src={rank} alt="search"/>
						<div className="inspection-date">{month} &#183; {day} &#183; {year}</div>
					</div>
				</CardBody>
				
			</Card>
		);
	}
}

function titleCase(str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
	}
	return str.join(' ');
}

export default RestaurantPopup;