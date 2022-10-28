const output = document.getElementById('output');

const numero = parseInt(prompt('Inserisci un numero'));


if (pari(numero))
{
    console.log('pari');
	output.innerText = 'PARI!'
}
else
{
	console.log('dispari');
	output.innerText = 'DISPARI!'

};


function pari(number) {
    
	console.log(number);
	
    if ((number % 2) == 0)
    {
		return true;
	}
    else
    {
		return false;
	}
    
};
