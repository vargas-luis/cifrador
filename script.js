function cleanBox(identificador) {  
    document.getElementById(identificador).value = "";
    ocultarImagenes(2);
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

    document.getElementById('mensaje-encriptado').value = clave(secreto);
}

function copiarTexto() {
    var content = document.getElementById('mensaje-encriptado');
    content.select();
    document.execCommand('copy');
}

function ocultarImagenes(ocultar) {

    if (ocultar == 1) {
        document.getElementById('caja-doll').style.display="none";
        document.getElementById('caja-encriptado').style.display="contents";
    }

    if (ocultar == 2) {
        document.getElementById('caja-doll').style.display="contents";
        document.getElementById('caja-encriptado').style.display="none";
    }
}

// FIN