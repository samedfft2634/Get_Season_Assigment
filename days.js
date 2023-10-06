let day = +prompt("Please enter a number of day (1-31) ")
let month = +prompt("Please enter a number of month (1-12) ")
// let season = "";

if (!(day >= 1 && day <= 31 && month >= 1 && month <= 12)) {
	console.log("Invalid month or day. Please enter valid values.");
} else {
	if ((month > 2) && (month <= 5)) {
			console.log(`The season for ${month}/${day} is Spring.`);
	} else if (month === 2){
        if (day <= 20) {
        console.log(`The season for ${month}/${day} is Winter`)
        } else {
        console.log(`The season for ${month}/${day} is Spring.`);
        }
    } else if ((month >= 6) && (month < 9 )) {
            console.log(`The season for ${month}/${day} is Summer`)
    } else if (month === 9){
            if (day <= 21) {
            console.log(`The season for ${month}/${day} is Summer`)
            } else {
            console.log(`The season for ${month}/${day} is Fall.`);
            }
    } else if ((month > 9 ) && (month < 12)) {
			console.log(`The season for ${month}/${day} is Fall.`);     
    } else if (month === 12){
        if (day <= 20) {
        console.log(`The season for ${month}/${day} is Fall`)
        } else {
        console.log(`The season for ${month}/${day} is Winter.`);
        }
    } else if ((month >= 1 ) && (month < 2)) {
        console.log(`The season for ${month}/${day} is Summer`)
    }
}
        
// march april may
//  3      4    5


// june july august
//  6     7     8


// september october november december 
//  9          10      11       12        
// if (month === (10 || 11 || 12)) {
// }

// december january february
//   12        1        2
// if (((month === 2 ) && (day >= 21)) || ((month === 5 ) && (day <= 31)))

// (month === 9 && day >= 22) || (month === 12 && day <= 20)

