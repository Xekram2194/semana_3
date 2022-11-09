function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
       segundo = "0" + segundo

    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
       minuto = "0" + minuto

    str_hora = new String (hora)
    if (str_hora.length == 1)
       hora = "0" + hora

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}
function actual(){
    fecha = new Date();
    hora = fecha.getHours();
    minuto = fecha.getMinutes();
    segundo = fecha.getSeconds();
    if(hora<10){
        hora="0"+hora;
    }
    if(minuto<10){
        minuto="0"+minuto;
    }
    if(segundo<10){
        segundo="0"+segundo;
    }
    //ver en el recuadro del reloj
    mireloj = hora + " : "+minuto+" : "+segundo;
    return mireloj;
}

function actualizar(){
    mihora=actual();
    mireloj = document.getElementById("reloj");
    mireloj.innerHTML=mihora;
}

setInterval(actualizar,1000);
