
function startTimer() {
    let eventDate = new Date("2023-11-04T19:58:00");
    let currentDate = new Date();
    let timeLeft = eventDate - currentDate;
    if (timeLeft >= 0) {
    const hh = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const mm = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const ss = Math.floor((timeLeft % (1000 * 60)) / 1000)
    document.getElementById("timer").innerHTML = hh.toString().padStart(2, '0') + ':' + mm.toString().padStart(2, '0') + ':' + ss.toString().padStart(2, '0')
    } else {
        alert('Вы победили в конкурсе!')
        clearInterval(timeLeft)
        const link = document.getElementById("linkNetology");
    link.click();
    }
}

setInterval(startTimer, 1000)
startTimer()