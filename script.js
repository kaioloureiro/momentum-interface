function horario() {
    let realTime = document.getElementById('realTime')
    let now = new Date()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    let clock = document.createElement('p')
    let greetings = document.getElementById('greetings')

    if (hour >= 6 && hour < 12) {
        greetings.innerHTML = `Bom dia, Convidado`
    } else if (hour >= 12 && hour < 18) {
        greetings.innerHTML = `Boa tarde, Convidado`
    } else {
        greetings.innerHTML = `Boa noite, Convidado`
    }

    if (realTime.classList.contains('secondsEnabled')) {
        realTime.innerHTML = `${hour}:${min<10?'0'+min:min}:${sec<10?'0'+sec:sec}`
    } else {
        realTime.innerHTML = `${hour}:${min<10?'0'+min:min}`
    }
    realTime.appendChild(clock)
}

setInterval(horario, 100)

function showSeconds() {
    let realTime = document.getElementById('realTime')
    if (!realTime.classList.contains('secondsEnabled')) {
        realTime.classList.add('secondsEnabled')
        realTime.title = 'Ocultar Segundos'
    } else {
        realTime.classList.remove('secondsEnabled')
        realTime.title = 'Mostrar Segundos'
    }
}

document.querySelector('#realTime').addEventListener('click', showSeconds)

function showMessage() {
    let msg = document.getElementById('greetings')
    msg.style.bottom = '30px'
    msg.style.transitionDuration = '0.5s'

    let author = document.createElement('p')
    author.setAttribute('id', 'author')
    msg.appendChild(author)

}

function hideMessage() {
    let msg = document.getElementById('message')
    msg.style.bottom = '20px'
    msg.style.transitionDuration = '0.5s'
}