/*Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta.*/
let frase= prompt("escribe una frase");
let espacio=" ";
let num =1;
for(let i=0;i<frase.length;i++){
    if(espacio==frase.charAt(i)){
        num++;
    }


}
alert("tu frase tiene " +  num + " palabras");
