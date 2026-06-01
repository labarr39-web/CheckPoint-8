/*
Cree un bucle for en JS que imprima cada nombre 
en esta lista. 
miLista = “velma”, “exploradora”, “jane”, “john”, “harry”
*/

const miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
};

console.log("\nFin del bucle for\n");


/*
Cree un bucle while que recorra la misma lista y 
también imprima los nombres. 
Nota: Recuerda crear un contador para que el ciclo 
no sea infinito.
*/

let contador = 0;

while (contador < miLista.length) {
    console.log(miLista[contador]);
    contador++;
}

console.log("\nFin del bucle while\n");

/*
Cree una función de flecha que devuelva "Hola mundo".
*/

const saludar = () => "Hola mundo";
console.log(saludar());


