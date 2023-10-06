let day = +prompt("Please enter a number of day (1-31) ")
let month = +prompt("Please enter a number of month (1-12) ")
// let season = "";

if (!(day >= 1 && day <= 31 && month >= 1 && month <= 12)) {
	console.log("Invalid month or day. Please enter valid values.");
} else {
	if ((month >= 2) && (month <= 5)) {
		if ((month >= 3) && (month <= 4)) {
			console.log(`The season for ${month}/${day} is Spring1.`);
		} else {
			if ((month === 2 && day >= 21) || (month === 5 && day <= 31))
				console.log(`The season for ${month}/${day} is Spring2.`);
		}
	} else if ((month >= 6) && (month <= 9)) {
        if ((month >= 6) && (month <= 8)) {
			console.log(`The season for ${month}/${day} is Summer1.`);
        } else {
            if ((month === 6) || (month === 9 && day <= 21))
				console.log(`The season for ${month}/${day} is Summer2.`);
        }
    } else if ((month >= 9) && (month <= 12)) {
        if ((month >= 10) && (month <= 11)) {
			console.log(`The season for ${month}/${day} is Fall1.`);
        } else {
            if ((month === 9 && day >= 22) || (month === 12 && day <= 20))
				console.log(`The season for ${month}/${day} is Fall2.`);
        }
}



// september october november december 
//  9          10      11       12        
// if (month === (10 || 11 || 12)) {
// }

// december january february
//   12        1        2
// if (((month === 2 ) && (day >= 21)) || ((month === 5 ) && (day <= 31)))
