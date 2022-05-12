function horario() {
    let realTime = document.getElementById('realTime')
    let now = new Date()
    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()
    let clock = document.createElement('p')
    let welcome = document.getElementById('welcome')

    if (hour >= 6 && hour < 12) {
        welcome.innerHTML = `Bom dia, Convidado`
    } else if (hour >= 12 && hour < 18) {
        welcome.innerHTML = `Boa tarde, Convidado`
    } else {
        welcome.innerHTML = `Boa noite, Convidado`
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

function showMessage() {
    let msg = document.getElementById('message')
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