let date = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds')

var futureDate = new Date('2021-10-29T11:30:00');

function startCounting() {
    var currentDate = new Date();
    const target = futureDate - currentDate;

    const day = Math.floor(target / 1000 / 60 / 60 / 24)
    const hour = Math.floor(target / 1000 / 60 / 60) % 24
    const min = Math.floor(target / 1000 / 60) % 60
    const sec = Math.floor(target / 1000) % 60
    
    date.innerHTML = day
    hours.innerHTML = hour
    minutes.innerHTML = min
    seconds.innerHTML = sec
}

setInterval(startCounting, 1000);




