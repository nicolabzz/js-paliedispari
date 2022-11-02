const parola = prompt('Inserisci una parola e vediamo se e\' paolindroma, dai su, vediamo...')
const output = document.getElementById('output');


if (palindroma(parola))
{
    console.log('palindroma');
    output.innerText = 'palindroma';
}
else
{
    console.log('non palindroma');
    output.innerText = 'non palindroma';
}



function palindroma(testo) {

    console.log(`La parola e\' : ${testo}`);

    
    testo = testo.toLowerCase();


    let pPalindroma = 1;


    for (let i = 0, j = testo.length - 1; i < testo.length/2 && pPalindroma == 1; i++, j--) {

        if (testo[i] != testo[j])
        {
            pPalindroma = 0;
        }

    }
    
    if (pPalindroma == 1)
    {
        return true;
    }
    else
    {
        return false;
    }

};



//------------------
//HENRY's SOLUTIUON
//------------------

/*

const word = prompt('Dammi una parola: ');

if (isPalindrom())
{
    console.log('palindroma');
}
else
{
    console.log('non palindroma');
}

function isPalindrom(testWord) {
    const invertWord = testWord.split('').reverse('').join('');

    if (testWord === invertWord)
    {
        return true;
    }
    else
    {
        return false;
    }

}

*/ 