// prompt para ingresar datos de nombre y carrera.
var nombre = prompt('Nombre: \nEscriba solo su nombre \nEjemplo:', 'Cristopher');
var apellido = prompt('Apellido: \nEscriba su apellido \nEjemplo:', 'Muñoz');
var nombreCompleto = (nombre + " " + apellido)
var carrera = prompt(`Carrera: \n${ nombreCompleto }, escriba su carrera \nEjemplo:`, `Desarrollador Front-End`);

// prompt para ingresar datos de ramos y notas.
var ramo1 = prompt(`Ramo: \n${ nombreCompleto }, Ingrese su primer ramo \nEjemplo: HTML`, 'HTML');
var nota1Ramo1 = prompt(`Nota 1: \nPrimera nota en ${ramo1} \nEjemplo: 4`, '4');
var nota2Ramo1 = prompt(`Nota 2: \nSegunda nota en ${ramo1} \nEjemplo: 5`, '5');
var nota3Ramo1 = prompt(`Nota 3: \nTercera nota en ${ramo1} \nEjemplo: 4`, '4');
var ramo2 = prompt(`Ramo: \n${ nombreCompleto }, Ingrese su segundo ramo \nEjemplo: CSS`, 'CSS');
var nota1Ramo2 = prompt(`Nota 1: \nPrimera nota en ${ramo2} \nEjemplo: 3`, '3');
var nota2Ramo2 = prompt(`Nota 2: \nSegunda nota en ${ramo2} \nEjemplo: 4`, '4');
var nota3Ramo2 = prompt(`Nota 3: \nTercera nota en ${ramo2} \nEjemplo: 5`, '5');
var ramo3 = prompt(`Ramo: \n${ nombreCompleto }, Ingrese su tercer ramo \nEjemplo: Javascript`, 'Javascript');
var nota1Ramo3 = prompt(`Nota 1: \nPrimera nota en ${ramo3} \nEjemplo: 2`, '2');
var nota2Ramo3 = prompt(`Nota 2: \nSegunda nota en ${ramo3} \nEjemplo: 6`, '6');
var notaArrastrando = prompt(`${ nombreCompleto } \n¿Cuál es su nota mínima de aprobación, de ${ramo3}? \nEjemplo: 4`, '4');

// parseInt y convertir notas (string) a enteros (int).
nota1Ramo1 = parseInt(nota1Ramo1);
nota2Ramo1 = parseInt(nota2Ramo1);
nota3Ramo1 = parseInt(nota3Ramo1);
nota1Ramo2 = parseInt(nota1Ramo2);
nota2Ramo2 = parseInt(nota2Ramo2);
nota3Ramo2 = parseInt(nota3Ramo2);
nota1Ramo3 = parseInt(nota1Ramo3);
nota2Ramo3 = parseInt(nota2Ramo3);

// calcula promedio de notas Ramo 1, lo asigna a variable (promRamo1) dejando 2 decimales despues del punto.
var promRamo1 = (nota1Ramo1 + nota2Ramo1 + nota3Ramo1) / 3;
var promRamo1 = promRamo1.toFixed(2);

// calcula promedio de notas Ramo 2, lo asigna a variable (promRamo2) dejando 2 decimales despues del punto.
var promRamo2 = (nota1Ramo2 + nota2Ramo2 + nota3Ramo2) / 3;
var promRamo2 = promRamo2.toFixed(2);

// calcula promedio de notas Ramo 3, lo asigna a variable (notaX) dejando 2 decimales despues del punto.
var notaX = ((parseFloat(notaArrastrando)*3)-(parseFloat(nota1Ramo3)+parseFloat(nota2Ramo3)));
var notaX = notaX.toFixed(2);


document.write(`
<section class="container py-5">
        <div class="row mb-2">
                <h1 class="col-10">Notas finales</h1>
                <img class="col-2" src="assets/img/logo-desafio-latam.png" alt="Logo">
        </div>
        <div class="row mb-4">
                <dt class="mb-2 col-3">Nombre:</dt><p class="col-9 text-muted">${nombreCompleto}</p>
                <div class="w-100"></div>
                <dt class="col-3">Carrera:</dt><p class="col-9 text-muted">${carrera}</p>
        </div>      
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Ramo</th>
                    <th scope="col">Nota 1</th>
                    <th scope="col">Nota 2</th>
                    <th scope="col">Nota 3</th>
                    <th scope="col">Promedio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${ramo1}</th>
                    <th>${nota1Ramo1}</th>
                    <th>${nota2Ramo1}</th>
                    <th>${nota3Ramo1}</th>
                    <th>${promRamo1}</th>
                </tr>
                <tr>
                    <th scope="row">${ramo2}</th>
                    <th>${nota1Ramo2}</th>
                    <th>${nota2Ramo2}</th>
                    <th>${nota3Ramo2}</th>
                    <th>${promRamo2}</th>
                </tr>
                <tr>
                    <th scope="row">${ramo3}</th>
                    <th>${nota1Ramo3}</th>
                    <th>${nota2Ramo3}</th>
                    <th>-</th>
                    <th>-</th>
                </tr>
            </tbody>
        </table>
        <tr>
            <td>Para aprobar el ramo ${ramo3} con nota 4, necesitas obtener un ${notaX} en la nota 3.</td>
        </tr>
    </section>
`);

// Alerta Con MUCHO TEXTO, para practicar mas las variables y sentirme orgulloso de mi trabajo hecho...
alert(`-${ nombreCompleto }, Aun le falta su tercera nota en ${ramo3}.\n-Con este script JS, hecho por Cristopher Munoz, clase 18.\n-Le ayudare a determinar que nota necesita para aprobar su ramo ${ramo3}:`);


// Profesor se nota que me amaneci, es simple mi script, empeze por el diseño en el index, hasta que me quedara igual, 
// Aprendi bien sobre los col de bootstrap (col sm-md-lg) y el grid,
// luego lo puse en un solo document write, meta cumplida y probe el script una y otra vez, 
// jugue mucho con el texto sorry...