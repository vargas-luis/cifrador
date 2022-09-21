function franky(){
    alert("It's alive");    }

function cleanBox(identificador) {  
    document.getElementById(identificador).value = "";
}


function cypher(cypher) {
    var secreto = document.getElementById('mensaje').value;
   

    const clave = (mensaje) => {
        const originaAlfa = ["a","e","i","o","u"];
        const cifradoAlfa = ["ai","enter","imes","ober","ufat"];
        if (cypher){
            ocultarImagenes(1);
            return mensaje.replace (/[aeiou]/gi, letra => cifradoAlfa[originaAlfa.indexOf(letra)]);
        }
        else {
            ocultarImagenes(1);
            return mensaje.replace (/ai|enter|imes|ober|ufat/gi, letra => originaAlfa[cifradoAlfa.indexOf(letra)]);
        }
    }

    document.getElementById('mensajeCifrado').value = clave(secreto);
}

function copiarTexto() {

    var content = document.getElementById('mensajeCifrado');
    content.select();
    document.execCommand('copy');
    // ocultarImagenes(2);
    // alert("Texto Copiado");
    
}

function ocultarImagenes(ocultar) {

    if (ocultar == 1) {
        document.getElementById('areaCifrado').style.visibility="visible";
        document.getElementById('doll').style.display="none";
    }

    if (ocultar == 2) {
        document.getElementById('areaCifrado').style.visibility="hidden";
        document.getElementById('doll').style.display="contents";
    }
}

// FIN