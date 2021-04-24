var textoTemp = '######'; // Texto a ser alterado

var indiceTexto = 0;

nick = document.getElementById("nick");

nick.innerHTML = textoTemp;

function ativaTexto()
{
    let iteracao = 0;
    let texto = defineTexto();
    let i;
    var timer2 = setInterval( escreveCaracteres, 100 )
    function escreveCaracteres()
    {
        for ( i = 0; i < texto.length; i++ )
        {
            if ( iteracao == 65 )
            {
                clearInterval( timer2 );
                nick.innerHTML = texto;
                return;
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

setTimeout( ativaTexto, 1000 ); // Timeout pro carregamento inicial da página
setInterval( ativaTexto, 7000 ); // Ativa o intervalo pra 6s após o timeout inicial

function defineTexto()
{
    if ( indiceTexto == 3 )
    {
        indiceTexto = 0;
    }
    let texto;
    switch ( indiceTexto )
    {
        case 0:
            texto = 'victor';
            break;
        case 1:
            texto = 'campos';
            break;
        case 2:
            texto = '0xj3st';
            break;
        default:
            texto = 'victor';
            break;
    }
    indiceTexto++;
    return texto;
}

function geraCaractereAleatorio()
{
     
    // Range dos decimais para os caracteres ASCII desejados -> 33 a 125
    min = 33;
    max = 126;
    
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    random = String.fromCharCode(random);
    return random;
}

