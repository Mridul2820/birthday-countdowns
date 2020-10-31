const lang = navigator.language;

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentTime = new Date();
let currentYear = new Date().getFullYear();

const nameId = document.getElementById('name');

const name = 'Nilanjana';
const birthDate = `November 12`;

nameId.innerText = name;

const birthdayTimeCheck = new Date(`${birthDate} ${currentYear} 00:00:00`);

currentTime > birthdayTimeCheck ? currentYear += 1 : currentYear ;

const birthdayTime = new Date(`${birthDate} ${currentYear} 00:00:00`);


// birthday wish
if(birthdayTimeCheck.getMonth() == currentTime.getMonth() && birthdayTimeCheck.getDate() == currentTime.getDate() ) {
    heading.innerHTML = `🎂 Happy Birhday ${name} 🎂`;
}

// update the countdown 
function updateCountdown() {
    const currentTime = new Date();
    const timeDiff = birthdayTime- currentTime;
    
    const d = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    const h = Math.floor(timeDiff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(timeDiff / 1000 / 60 ) % 60;
    const s = Math.floor(timeDiff / 1000 ) % 60;

    // add values to DOM 
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show Spinner after loading 
setTimeout(() => {
    loading.remove();
    
    if(birthdayTimeCheck.getMonth() == currentTime.getMonth() && birthdayTimeCheck.getDate() == currentTime.getDate() ) {
        countdown.style.display = 'none';
        // Get the backGround date 
        year.innerText = `${birthDate}` ;
    }
    else {
        countdown.style.display = 'flex';
        // Get the backGround date 
        year.innerText = `${birthDate} , ${currentYear}` ;
    }

}, 1000)

// Run Every Second 
setInterval(updateCountdown, 1000);