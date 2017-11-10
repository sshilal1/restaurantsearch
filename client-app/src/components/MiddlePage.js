import React from 'react';
import { Button, Jumbotron, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import CardRow from './CardRow';
import bgimage from '../images/image_7.jpg';
import seal from '../images/seals/Nyc-seal-blue.png';
import a from '../images/letters/a.png';
import b from '../images/letters/b.png';
import c from '../images/letters/c.png';
import gp from '../images/letters/GP.png';

class MiddlePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			gradeorder: "asc",
			popoverOpen: false
		}

		this.sortGrade = this.sortGrade.bind(this);
	}

	sortGrade() {
		const order = this.state.gradeorder;
		var nextorder = (order === "asc" ? "desc" : "asc");

		this.setState({
			gradeorder: nextorder
		})

		this.props.sortGrade(nextorder);
	}

	render() {

		const { restaurants, search, totalresults } = this.props;
		const len = restaurants.length;

		if (search && len>0) {
			
			var CardRows = [];
			var Restaurants = [];
			for (let i=0; i<len; i++) {
				Restaurants.push(restaurants[i]);
				if (i%3 === 2 || i === (len-1)) {
					CardRows.push(<CardRow key={i} restaurants={Restaurants}></CardRow>)
					Restaurants = [];
				}
			}
			
			var gradeDirection = (this.state.gradeorder === "asc" ? String.fromCharCode(0x25BC) : String.fromCharCode(0x25B2))
			var viewString = `Viewing 1-12 of ${totalresults}`;

			return (
				<div className="container">
					<Button className="sort-button" onClick={this.sortGrade} style={{marginLeft: 0}}>Grade {gradeDirection}</Button>
					<Button className="sort-button">Price  &#9660;</Button>
					<div className="view-counter">{viewString}</div>
					{CardRows}
					<Pagination>
						<PaginationItem disabled>
							<PaginationLink previous href="#" />
						</PaginationItem>
						<PaginationItem active>1</PaginationItem>
						<PaginationItem>2</PaginationItem>
						<PaginationItem>3</PaginationItem>
					</Pagination>
				</div>
			);
		}

		else {

			var bgStyle = {
				backgroundImage : "url(" + bgimage + ")",
				backgroundPosition : "64%"
			}

			return (
				<Jumbotron className="wide home-searcher" style={bgStyle}>
					<div className="container">
						<div className="row">
							<div className="col-3 flex"><div className="big-box flex">
								<img className="big-rank-img seal" src={seal} alt="search"/>
								<img className="big-rank-img a" src={a} alt="search"/>
							</div></div>
							<div className="col-3 flex"><div className="big-box flex">
								<img className="big-rank-img seal" src={seal} alt="search"/>
								<img className="big-rank-img b" src={b} alt="search"/>
							</div></div>
							<div className="col-3 flex"><div className="big-box flex">
								<img className="big-rank-img seal" src={seal} alt="search"/>
								<img className="big-rank-img c" src={c} alt="search"/>
							</div></div>
							<div className="col-3 flex"><div className="big-box flex">
								<img className="big-rank-img seal" src={seal} alt="search"/>
								<img className="big-rank-img b" src={gp} alt="search"/>
							</div></div>
						</div>
					</div>
				</Jumbotron>
			);
		}
	}
}

export default MiddlePage;


