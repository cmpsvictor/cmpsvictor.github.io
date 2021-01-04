var textoTemp = '######';
var texto = '0xj3st';
var timerId = 0;

nick = document.getElementById("nick");

nick.innerHTML = textoTemp;

function main()
{
    let i;
    var iteracao = 0; 
    for ( i = 0; i < texto.length; i++ )
    {
        timerId = setInterval( escreveCaractere, 300, i );
        function escreveCaractere(i)
        {
            if ( iteracao == 90 )
            {
                clearInterval( timerId );
                nick.innerHTML = texto;
            }
            else
            {
                iteracao++;
                let char1 = geraCaractereAleatorio();
                textoTemp = textoTemp.substring(0, i) + char1 + textoTemp.substring(i+1); 
                // se não especifica segundo valor em substring, pega dali até o final
                nick.innerHTML = textoTemp;
            }
        }
    }
}
    
setTimeout( main, 1500 );


function geraCaractereAleatorio()
{
    
    // Range dos decimais para os caracteres ASCII desejados -> 33 a 125
    
    let random = Math.floor(Math.random() * 100) + 33; // Gera int de 0 a 99, soma com 33
    if ( random > 125 ) // Tratativa de 126 a 132
    {
        random -= 7;
    }
    random = String.fromCharCode(random);
    return random;
}


// Funções wip para dar o outro efeito la

/*
function escreveCaractere(i)
{
    // Substitui caractere na string copiando o antes e depois
    // E concatenando tudo com o novo caractere
    let char1 = geraCaractereAleatorio();
    textoTemp = textoTemp.substring(0, i) + char1 + textoTemp.substring(i+1); // se não especifica segundo valor em substring vai até o final
    nick.innerHTML = textoTemp;
}

function iteraTexto()
{
    var pronto = false;
    //clearTimeout(start);
    let i;
    for ( i = 0; i < texto.length; i++ )
    {
        //var timer = setInterval(escreveCaractere, 1500, i);
        nick.innerHTML = textoTemp;
    }
    //clearInterval(timer);
}

function sleep(ms)  // Sleep improvisado 
{ 
  let data = Date.now();
  let dataAtual = null;
  do {
    dataAtual = Date.now();
  } while (dataAtual - data < ms);
}
*/

