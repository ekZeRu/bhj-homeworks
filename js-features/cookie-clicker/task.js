const cookie = document.getElementById('cookie')
const clicker__counter = document.getElementById('clicker__counter')
const clicker__speed = document.getElementById('clicker__speed')
let count = 0
let lastClickDate = null
let currentClickDate = null
let speed = 0
function cookieClicker() {
    cookie.onclick = function() {
        count ++
        clicker__counter.innerHTML = count
        if (count %2 !== 0) {

        cookie.style.width = '220px'
        } else {
            cookie.style.width = '200px'
        }
        currentClickDate = new Date()
        if (lastClickDate) {
            speed = currentClickDate - lastClickDate
            if (speed < 1000) {
                clicker__speed.innerHTML = (1000 / speed).toFixed(2)
            } else {
                clicker__speed.innerHTML = 0
            }
        }
        lastClickDate = new Date()
    }
}
cookieClicker()