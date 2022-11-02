const output = document.getElementById('output');

const pariDispari = parseInt(prompt('Segli: PARI o DISPARI?'));
const numero = parseInt(prompt('Inserisci un numero trai 1 e 5 compresi'));

const computer = getRandomInteger(1, 5);


if (pari(numero + computer))
{
    console.log(numero, computer, 'somma pari');
	output.innerText = 'PARI!'
}
else
{
	console.log(numero, computer, 'somma dispari');
	output.innerText = 'DISPARI!'

};

// FUNCTIONS--------------
function pari(number) {
	
    if ((number % 2) == 0)
    {
		return true;
	}
    else
    {
		return false;
	}
    
};


function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min

};
