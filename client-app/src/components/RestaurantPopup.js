import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

import InspectionResult from './InspectionResult';
import seal from '../images/seals/Nyc-seal-blue.png';
import {titleCase} from '../helpers';

class RestaurantPopup extends Component {
	render() {

		const { name,cuisine,street,phone,grade,building,zipcode,imageUrl,boro,inspections } = this.props;

		var standard = (grade === 'Not Yet Graded' || grade === null) ? 'GP' : grade.toLowerCase();
		var rank = require('../images/letters/'+standard+'.png');
		var dollars = '$'.repeat(3);
		var number = `(${phone.substring(0,3)}) ${phone.substring(3,6)}-${phone.substring(6,10)}`;
		var address = titleCase(`${building} ${street}, ${boro}`) + `, NY ${zipcode}`;
		var classn = `rank-img ${standard}-sm`;

		var textStyle = {
			fontSize: ".9em",
    	marginBottom: ".2em"
		}

		var Inspections = inspections.map((inspection,index) => {
				return <InspectionResult key={index} {...inspection}/>
		});

		return (
			<Card style={{border: "none"}}>
				<div className="card-image-container">
					<CardImg className="wide" src={imageUrl} alt="Card image cap" />
				</div>
				<CardBody className="card-body-text">
					<h1 style={{fontWeight:"bold",color:"#00334d"}}>{titleCase(name)}</h1>
					<CardText style={{...textStyle, color:"grey"}}>{cuisine} &middot; {dollars}</CardText>
					<CardText style={textStyle}>{address}</CardText>
					<CardText style={textStyle}>{number}</CardText>
					<div className="rank-box mini-rank-box flex" style={{boxShadow:"none",top:"calc(50% - 90px)",left: "calc(90% - 60px)"}}>
						<img className="rank-img seal" src={seal} alt="search"/>
						<img className={classn} src={rank} alt="search"/>
					</div>
					<hr/>	
				</CardBody>
				<CardBody style={{height:"300px",overflowY:"scroll"}}>
					<CardText style={{fontSize:"1.1em", color:"grey"}}>Inspections</CardText>
					{Inspections}
				</CardBody>
			</Card>
		);
	}
}

export default RestaurantPopup;