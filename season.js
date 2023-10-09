//!--------------------------------------------------------------------------!
//!                             Solved Better                               !
// -------------------------------------------------------------------------! 

const month = prompt("Which month?:");
const day = prompt("Which day?:");
let season = "";

if (
	month < 1 ||
	month > 12 ||
	day < 1 ||
	day > 31 ||
	(month === 2 && day > 29)
) {
	console.log("Invalid month or dmonth. Please enter valid values.");
} else {
	if ((month >= 3 && month <= 5) || (month === 2 && day >= 20)) {
		season = "Spring";
	} else if ((month >= 6 && month <= 8) || (month === 9 && day <= 21)) {
		season = "Summer";
	} else if ((month >= 9 && month <= 11) || (month === 12 && day <= 20)) {
		season = "Fall";
	} else {
		season = "Winter";
	}

	console.log(`The season for ${month}/${day} is ${season}.`);
}
