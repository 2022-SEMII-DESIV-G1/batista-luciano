
function calcular(){
    var cantidad = 1;
    var letras = [];
    var almacenar = [];
    var i = 0;

    let texto = document.getElementById("texto").value;
    texto = texto.toUpperCase().replace(/ /g, "").split("").sort();

    do{
            if(texto[i + 1] == texto[i] ){
                cantidad ++;
            }else{
                letras.push(texto[i]);
                almacenar.push(cantidad);
                cantidad = 1;
            }
            i=i+1;
            } while (i < texto.length);
    document.getElementById('limpiar').style.visibility = 'visible';

    letras.forEach((l, i) => {
        document.getElementById("respuesta").innerHTML += letras[i] + "=" + almacenar[i] + "   ";
    });

    

}

function limpiar() {
    document.getElementById("texto").value = "";
    document.getElementById('limpiar').style.visibility = 'hidden'; 
    document.getElementById("repuesta").innerHTML= " ";
  }