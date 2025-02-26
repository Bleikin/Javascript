// Bienvenida
let nombre = prompt('Ingrese su nombre entrador pokemon')
    alert('¡Bievenido al juego de elementos de Pokemon! ¿Listo para luchar?')
    alert('Elije con que elemento atacaras!')


// Comienzo del juego
// arrays con elecciones


let jugador = prompt('0.Fuego\n 1.Planta\n 2.Agua')
     if (jugador == 0) {
        alert('Elegiste fuego')
    }    else if (jugador == 1) {
        alert ('Elegiste planta')
    }    else if (jugador == 2) {
        alert ('Elegiste agua')
    } else {
        alert('No elegiste ningun elemento')
    }




// Ataque del contricante

let contrincante = Math.round(Math.random() * 3);
    if(contrincante == 0) {
     alert('El contrincante eligio fuego')
}   else if (contrincante == 1) {
     alert ('El contrincante eligio planta')
}   else if (contrincante == 2) {
     alert ('El contrincante eligio agua')
}



// Resultado del combate

if (jugador == contrincante) {
        alert('Empate :| estuviste cerca... sigue batallando!')
    } else if (jugador == 0 && contrincante == 1) {
       alert('Has ganado el combate con el fuego a planta! 😃')
    }  else if (jugador == 1 && contrincante == 2) {
        alert('Has ganado el combate con la planta a agua! 😃')
    } else if (jugador == 2 && contrincante == 0) {
        alert('Has ganado el combate con agua a fuego! 😃')
    } else {
        alert('Perdiste 😔')
    }


// Juego finalizado y despedida

confirmacion = window.confirm(`¿Le gusto el juego ${nombre}?`);

if (confirmacion == true) {
    alert ('Me alegro que le haya gustado, espero que siga jugando 👍👍')
} 
else {
    alert('😭😭😭');
}