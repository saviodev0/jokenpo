const resulted = document.querySelector(".resulted")
const humano = document.querySelector('#numberhuman')
const maquina = document.querySelector('#numbermachine')

let h = 0
let m = 0

const playhuman = (humanchoice) => {

playgame(humanchoice, playmachine())

}

const playmachine = ()=> {
const options = ['rock', 'paper', 'scissors']

const random = Math.floor(Math.random() * 3)

return options [random]

}

const playgame = (human, machine)=> {

console.log('humano: ' + human + ' maquina: ' + machine)

if (human === machine) {
    resulted.innerHTML = 'Deu Empate!!'
} else if(human === 'paper' && machine === 'rock') {

    h++
    humano.innerHTML = h
resulted.innerHTML = 'Parabens Você Ganhou!!'
}

else if (human === 'paper' && machine === 'scissors') {

    m++
    maquina.innerHTML = m
    resulted.innerHTML = 'Você Perdeu'
} 

else if (human === 'rock' && machine === 'paper') {
    m++
    maquina.innerHTML = m
    resulted.innerHTML = 'Você Perdeu'
} 

else if(human === 'rock' && machine === 'scissors') {
    h++
    humano.innerHTML = h
    resulted.innerHTML = 'Parabens Você Ganhou!!'
} 

else if(human === 'scissors' && machine === 'rock') {
    m++
    maquina.innerHTML = m
    resulted.innerHTML = 'Você Perdeu'
} 

else if(human === 'scissors' && machine === 'paper') {
    h++
    humano.innerHTML = h
    resulted.innerHTML = 'Parabens Você Ganhou!!'
    }




}





