import React from 'react';
import { CardText } from 'reactstrap';

class InspectionResult extends React.Component {
	render() {
		const { date, action, violation_code, violation_desc, score, grade, grade_date, record_date, inspection_type } = this.props;

		var m_date = getDateObj(date);
		var g_date = getDateObj(grade_date);
		var r_date = getDateObj(record_date);

		var textStyle = {
			fontSize: ".8em",
    	marginBottom: ".2em"
		}

		return (
			<div>
				<CardText style={{...textStyle, fontWeight:600}}>{m_date.month} &#183; {m_date.day} &#183; {m_date.year}</CardText>
				<CardText style={textStyle}>{action}</CardText>
				<CardText style={{...textStyle, marginLeft:"20px"}}>Violation Code: {violation_code}</CardText>
				<CardText style={{...textStyle, marginLeft:"20px"}}>{violation_desc}</CardText>
				<CardText style={textStyle}>Score: {score}</CardText>
				<CardText style={textStyle}>Grade: {grade}</CardText>
				<CardText style={textStyle}>Grade Date: {g_date.month} &#183; {g_date.day} &#183; {g_date.year}</CardText>
				<CardText style={textStyle}>Record Date: {r_date.month} &#183; {r_date.day} &#183; {r_date.year}</CardText>
				<CardText style={textStyle}>{inspection_type}</CardText>
				<hr/>
			</div>
		);
	}
}

function getDateObj(datestring) {
	if (datestring != null) {
		var day = datestring.substring(8,10);
		var month = datestring.substring(5,7);
		var year = datestring.substring(0,4);

		return {
			month: month,
			day: day,
			year: year,
		};
	}
	else {
		return {
			month: "",
			day: "",
			year: "",
		};
	}
}

export default InspectionResult;