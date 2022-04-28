/*Solicita al usuario que elija entre la opción 1 o 2:
Se le debe pedir dos número al usuario e indicar si son pares y múltiplos de 7 ambos, uno de ellos o ninguno.
Se le debe pedir una palabra y comprobar si empieza o termina por a
*/


let opcion;
let n1;
let n2;
let palabra;
let letra;

opcion = prompt("pulsa 1 o 2");

if (opcion == 1) {
    let n1 = prompt("dime el primer numero");
    let n2 = prompt("dime el segundo numero");
    if (0 == n1 % 2 && 0 == n1 % 7 && 0 == n2 % 2 && 0 == n2 % 7) {
        alert("los 2 numeros son pares y multiplos de 7");

    } else if ((0 != n1 % 2 || 0 != n1 % 7) && (0 == n2 % 2 && 0 == n2 % 7)) {
        alert("el primer numero no es par y multiplo de 7");
    } else if ((0 != n2 % 2 || 0 != n2 % 7) && 0 == n1 % 2 && 0 == n1 % 7) {
        alert("el segundo numero no es par y multipla de 7");
    }
    if ((0 != n2 % 2 || 0 != n2 % 7) && (0 != n1 % 2 || 0 != n1 % 7)) {
        alert("ningun numero es par y multiplo de 7");
    }


}else if(opcion=2){
    palabra = prompt("dime una palabra");
    let i=palabra.length -1;
    let k=palabra.length[0]
        if(letra==palabra.charAt(i)){
            alert("termina por a")
        }else if(letra==palabra.charAt[0]) {
           alert("empieza por a")
        }
      
    
    

}