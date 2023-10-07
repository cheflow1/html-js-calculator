//let contador = 0;
//while (contador < 10) {
//    console.log (contador);
 //   contador = contador + 1;
//}

//for (let i = 0; i < 10; i ++) {
    //console.log (i);
//}


//function saludar (nombre, edad) {
 //   console.log ('Hola. Mi nombre es: ' + nombre);
 //   console.log ('y mi edad es: ' + edad);
//}

//saludar ('Jose', 28);

// Arreglo o Arrays

//let miArreglo = ['Jose', 'Kevin', 'David', 'Carla']; 

//for (let i = 0; i < 4; i++) {
//    console.log ('Accediendo al indice: ' + i)
//    let mostrar = miArreglo[i]
//    console.log (mostrar)
//}


//Objetos

//let persona = {
  //  nombre: 'Jose',
  //  edad: 28,
   // masculino: true
//}

//console.log (persona);


//let persona2 = {
//    nombre: 'Kevin',
//    edad: 24,
//    masculino: false
//}

//persona.nombre = 'Mi nombre ahora es Kevin';
//console.log (persona);

//let arregloDeObjeto = [persona, persona2]


const txtOp1 = document.getElementById ('op1')
const txtOperacion = document.getElementById ('operacion')
const txtOp2 = document.getElementById ('op2')
const btnCalcular = document.getElementById ('calcular')
const pResultado = document.getElementById ('resultado')

btnCalcular.addEventListener ('click', calcular)

function calcular () {
    const operacion = txtOperacion.value
    const op1 = parseFloat (txtOp1.value)
    const op2 = parseFloat (txtOp2.value)

    if (operacion == '+' ||  operacion == '-' ||  operacion == '/' || operacion == '*' &&
     !isNaN(op1) && !isNaN(op2) ) {


        let resultado;
        switch (operacion) {
            case '+':
            resultado = op1 + op2
                break;

            case '-':
            resultado = op1 - op2
            break

            case '*':
            resultado = op1 * op2
            break

            case '/':
            resultado = op1 / op2
            break

        }

        pResultado.style = 'color:black'
        pResultado.innerText = '= ' + resultado
} else {
    pResultado.style = 'color:red'
   pResultado.innerText = 'calculo imposible'
}
}
