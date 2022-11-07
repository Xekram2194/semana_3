function potenciaN(){
    numero=document.getElementById("n1").value;
    potencia=document.getElementById("n2").value;
    respuesta=Math.pow(numero,potencia);
    document.getElementById("rputa").innerHTML=respuesta;
    }
function soles(){
    soles=100;
    let a=[];
    for(let i=0;soles>2;i++){
        a[i]=soles;
        if(a[i]>=50){
            for(let j=1;a[i]>=50;j++){
                console.log("Tiene "+j+" 50");
            }
            
        }else{
            if(a[i]>=20){
                for(let k=1;a[i]>=20;k++){
                    console.log("Tiene "+k+" 20");
                }
            }else{
                if(a[i]>=10){
                    for(let l=1;a[i]>=10;l++){
                        console.log("Tiene "+l+" 10");
                    }
                }else{
                    if(a[i]>=5){
                        for(let p=1;a[i]>=5;p++){
                            console.log("Tiene "+p+" 5");
                        }
                    }else{
                        for(let o=1;a[i]>=1;o++){
                            console.log("Tiene "+o+" 1");
                        }
                    }
                }
            }

        }
        soles=soles/2;
    }
    console.log(a);
    

}
function segundos(){
    n=document.getElementById("n1").value;  
        var hour = Math.floor(n / 3600);
        hour = (hour < 10)? '0' + hour : hour;
        var minute = Math.floor((n / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var n = n % 60;
        n = (n < 10)? '0' + n : n;
        respuesta= hour + ':' + minute + ':' + n;   
        document.getElementById("rputa").innerHTML=respuesta;  
}
function money(){
        let dinero = document.getElementById("n1").value;
        //50 20 10 5 1
        let de50 = Math.floor(dinero / 50);
        dinero = dinero % 50;
        let de20 = Math.floor(dinero / 20);
        dinero = dinero % 20;
        let de10 = Math.floor(dinero / 10);
        dinero = dinero % 10;
        let de5 = Math.floor(dinero / 5);
        let de1 = dinero % 5;

        console.log(de1 + de5 * 5 + de10 * 10 + de20 * 20 + de50 * 50);
        document.getElementById("rputa50").innerHTML = "Se entregarán " + de50 + " billetes de 50";
        document.getElementById("rputa20").innerHTML = "Se entregarán " + de20 + " billetes de 20";
        document.getElementById("rputa10").innerHTML = "Se entregarán " + de10 + " billetes de 10";
        document.getElementById("rputa5").innerHTML = "Se entregarán " + de5 + " billetes de 5";
        document.getElementById("rputa1").innerHTML = "Se entregarán " + de1 + " billetes de 1";
        }
function segundos2(){
        segundo=document.getElementById("n1").value; 
        var dia = Math.floor(segundo / 86400);
        if(dia<10){dia='0'+dia;}else{dia=dia;} 
        var hora = Math.floor((segundo / 3600) % 24);
        if(hora<10){hora='0' + hora;}else{hora=hora}
        var minuto = Math.floor((segundo / 60) % 60);
        if(minuto<10){minuto='0'+minuto;}else{minuto=minuto;}
        var segundo = segundo % 60;
        if(segundo<10){segundo='0'+segundo;}else{segundo=segundo;}
        respuesta= dia + ':' + hora + ':' + minuto + ':' + segundo;   
        document.getElementById("rputa").innerHTML=respuesta;  
}