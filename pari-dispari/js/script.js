// const output = document.getElementById('output');

// const numero = parseInt(prompt('Inserisci un numero'));


// if (pari(numero))
// {

// }



// functon pari(nPari) {
    
//     if (nPari % 2)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
    
// };


const userNumber = parseInt(prompt('dammi un numero'));

function isEven(number) {
	// console.log(number);
	if (number % 2) { // number != 0
		return false;
	} else {
		return true;
	}
}

if (isEven(userNumber)) {
	console.log('pari');
} else {
	console.log('dispari');
}