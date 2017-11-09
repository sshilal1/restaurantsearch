function titleCase(str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
	}
	return str.join(' ');
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

module.exports = { titleCase, getDateObj };