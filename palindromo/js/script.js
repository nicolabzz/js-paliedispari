const parola = prompt('Inserisci una parola e vediamo se e\' paolindroma, dai su, vediamo...')
const output = document.getElementById('output');


if (palindroma(parola))
{
    console.log('palindroma');
}
else
{
    console.log('non palindroma');
}



function palindroma(testo) {

    console.log(`La parola e\' : ${testo}`);

    for (let i = 0; i < testo; i++) {
        testo.toLowerCase();
    }

    pPalindroma = 1;

    j = testo;

    for (let i = 0, j = testo - 1; i < testo/2 && pPalindroma == 1; i++, j--) {

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