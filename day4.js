const md5 = require('md5');
const secretKey = 'bgvyzdsv';
let found = false;

for (i = 0; found = true; i++) {
	let zeroes = md5(`${secretKey}${i}`).slice(0, 5);
	if (zeroes === '00000') {
	console.log(i);
	found = true;
	break;
	}
}

//Possible updates: 
//1. Accept input from user in secretKey. 
//2. Accept input on number of zeroes. 
//3. if statement check might cause a bit of difficulty. 1. and 2. should be easy.