let $ = document
let hour = $.querySelector(".hour")
let minute = $.querySelector(".minute")
let second = $.querySelector(".second")

setInterval(() => {
    let time = new Date()
    let seconds = time.getSeconds()
    let mins = time.getMinutes()
    let hours = time.getHours()
    second.innerHTML = seconds
    minute.innerHTML = mins
    hour.innerHTML = hours
    if (seconds < 10) {
        second.innerHTML = "0" + seconds
    }
    if (seconds > 59) {
        mins++
    }
    if (mins <10) {
        minute.innerHTML = "0" + mins
    }
    if (mins > 59) {
        hours++
    }
    if (hours <10) {
        hour.innerHTML = "0" + hours
    }
    if (hours >= 24) {
        hours = 00
    }
}, 1000);