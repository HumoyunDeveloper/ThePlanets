
var mercury = document.getElementById('mercury');
var mars = document.getElementById('mars');
var venus = document.getElementById('venus');
var yer = document.getElementById('yer');
var saturn = document.getElementById('saturn');
var neptun = document.getElementById('neptun');
var uran = document.getElementById('uran');
var day = document.getElementById('day');
var orbit = document.getElementById('orbit');
var diameter = document.getElementById('diameter');
var all = document.getElementById('all');
var sound = new Audio();
var soundTyping = new Audio();
var nameOfPlanet = document.getElementById('name');
var numberOfFunctions = 0;
var isTyping = false;
var lang = localStorage.getItem("lang");
var clamped = [], planets;
sound.src = './res/sounds/button-3.wav';
soundTyping.src = './res/sounds/fast-pace-Typing-on-mechanical-keyboard-1-www.FesliyanStudios.com (1).mp3';
soundTyping.volume = 0.8;

function languages() {
 
        planets = {
            mercury: {
                about: 'Mercury sayyorasi Quyoshga eng yaqin sayyora hisoblanib,  uning olchami Yerning yoldoshi bolmish oydan birozgina kattaroq,  kichik tog’li dunyo. Unda bir qancha qoramtir joylar va ko’plab kraterlar mavjud, ammo na atmosfera va na suv yo’q . Uning yuzasi oynikiga oxshash. ',
                diameter: '3,031 mil (4,872km)',
                name: 'Mercury',
                day: '58.6 kun',
                orbit: '88 kun'
            },
            venus: {
                about: 'Venus sayyorasi Quyosh sistemasidagi 2 sayyora hisoblanadi. Uning yuzasi turli xil togliklar va issiq vulqonlar bilan tola. Uning havosi hattoki Mercury sayyorasidan ham issiq (465 C). Cho’lpon tumanli dog’lardan iborat oq shar. U deyarli butunlay oq bulutlar qatlami bilan qoplangan. U yerdagi oq bulutlar suv bug’laridan emas, tuz kislotasi bug’laridan iborat. Bulutlar ostida esa tarkibi nafas olish uchun yaroqsiz karbonat angidrid gazlaridan iborat atmosfera mavjud. Bu atmosfera ko’rpa singari Quyosh nurini yutadi, natijada sayyora yuzasidagi temperatura Selsiy shkalasi bo’yicha 500 darajagacha ko’tariladi. Shuning uchun ham Cho’lponda suv yo’q . Uning nomi qadimiy greklarda mashhur hisoblanadi (Qadimgi rimliklarning sevgi va gozallik ilohasi sharafiga qoyilgan)',
                diameter: '7,521mil (12,104km)',
                orbit: '225 kun',
                name: 'Venus',
                day: ' 241 kun '
            },
            earth: {
                about: 'Barchamizga ma\'lum, bizning ona sayyoramiz Yer Quyosh sistemasidagi 3-sayyora bolib, uning yuzasida turli hil quriqlik va okeanlar mavjud. yerning atmosferasi oxygen va nitrogenga boy ',
                diameter: "7,926mil (12,760km)",
                orbit: '365.24 kun',
                day: '23 soat, 56 minut',
                name: 'Yer'
            },

            mars: {
                about: 'Quyosh sistemasidagi 4-sayyora. Uning havosida chang ko\'p, . Uning yuzasi serqoya , voha va togliklar bilan oralgan. Mars undagi sahrolar rangiga qarab qizil sayyora deb ataladi. U Yerdan ikki marta kichik, uning yupqa atmosferasi karbonat angidrid gazidan tarkib topgan. Bu gazda bulut hosil bo’ladi. Marsda biror-bir hayot nishonasi yo’q. Buning sababi undagi temperatura juda sovuqligi bilan bog’liq bo’lsa kerak. Uning nomi Grekcha sozdan olingan bolib ("mars" - qadimgi rimliklarning urush hudosi)',
                diameter: "4,217mil (6,787km)",
                orbit: '687 kun',
                day: '24 soat, 37 minut',
                name: 'Mars'
            },

            jupiter: {
                about: 'Bu sayyora quyosh sistemasidagi beshinchi sayyora bolib, Bu sayyora bizning quyosh sistemamizdagi eng ogir sayyora hisoblanadi va uning tarkibida turli hil gazlar mavjud. Yupiter qadimgi Grek sozidan olingan  (Qadimgi rimliklarning adolat hukmdori) ',
                diameter: "86,881mil (139,822km)",
                orbit: '11.9 yil',
                day: '9.8 soat',
                name: 'Yupiter'
            },

            saturn: {
                about: "Saturn Quyosh sistemasidagi oltinchi sayyora bolib, Saturn ozining halqasi bilan mashhur. Saturn, asosan, suyuq vodoroddan tarkib topgan. Uning atrofida bir qancha yorqin halqalar bor. Bu halqalar son-sanoqsiz zarralardan iboratdir. Zarralar sayyora atrofidagi o’z orbitasi bo’ylab kichik oylar singari harakat qiladi. Neptun — xira yashil sayora. Pluton esa — Quyosh sistemasining eng mitti sayyorasi. Uning orbitasi cho’zinchoq ko’rinishda bo’lgani uchun ham ba'zan Neptunga nisbatan Quyoshga yaqinroq keladi. Saturn qadimgi Grek sozidan olingan  (Qadimgi rimliklarning mehnat Hudosi)",
                diameter: "74,900mil (120,500km)",
                orbit: '29.5 yil',
                day: '10.5 soat',
                name: 'Saturn'
            },
            uran: {
                about: 'Uran Quyosh sistemasidagi yettinchi sayyora bolib, uning yuzasida tarkibida hydrogen sulfid mavjud bolgan Bulutlar bor. Uran sayyorasi William Herschel tomonidan 1781yilda kashf qilingan.',
                diameter: "31,763mil (51,120km)",
                orbit: '84 yil',
                day: '18 soat',
                name: 'Uranus'
            },

            neptune: {
                about: ' Quyosh sistemasidagi sakkizinchi sayyora bolib, Uning iqlimi juda ham sovuq.Neptun 1846-yilda kashf qilingan, va uning manosi qadimgi Grek sozidan olingan  (Qadimgi rimliklarning suv hudosi)',
                diameter: "30,775mil (49,530km)",
                orbit: '165 yil',
                day: '19 soat',
                name: 'Neptun'
            },

            pluton: {
                about: 'Quyosh sistemasidagi toqqizinchi sayyora. uning iqlimi juda ham sovuq hisoblanadi.',
                diameter: "30,775mil (49,530km)",
                orbit: '248 yil',
                day: '6.4 kun',
                name: 'Pluton'
            }
        };
}

languages();

function playSound() {
    sound.play();

}

var numberOfFunctions = 0;

function waitWrite(text, id) {
    numberOfFunctions += 1;
    if (document.querySelector('#' + id)) {
        isTyping = true;
        soundTyping.play();
        var element = document.querySelector('#' + id);
        element.innerHTML = "";
        var incnum = -1;
        var array = [];
        if (numberOfFunctions >= 2) {
            numberOfFunctions = 1;
            incnum = -1;
            array = [];
            isTyping = false;
            clearInterval(interval);
        }
        function init() {
            var number = 0;
            var interval;

            for (number; number < text.length; number++) {
                array[number] = text.charAt(number);
            }

            return array;
        }

        var isArrayFull = init();

        if (isArrayFull) {
            if (incnum > -1) {
                incnum = -1;
            }
            interval = setInterval(type, 60);
        } else {
            console.warn("Array is []");
        }


    } else {
        console.error("Error: given " + id + " not found.");
    }


    function type() {

        incnum += 1;
        if (incnum >= isArrayFull.length) {
            incnum = -1;
            clearInterval(interval);
            isTyping = false;
            soundTyping.pause();
        } else {
            element.innerHTML += isArrayFull[incnum];
        }
    }
}



mercury.onclick = viewMercury;
mars.onclick = viewMars;
yer.onclick = viewYer;
saturn.onclick = viewSaturn;
neptun.onclick = viewNeptun;
uran.onclick = viewUran;
venus.onclick = viewVenus;

function viewMercury() {
    nameOfPlanet.innerText = planets.mercury.name;
    waitWrite(planets.mercury.about, 'about');
    diameter.innerHTML = planets.mercury.diameter;
    day.innerHTML = planets.mercury.diameter;
    orbit.innerHTML = planets.mercury.orbit;
}

function viewYupiter() {
    nameOfPlanet.innerText = planets.jupiter.name;
    waitWrite(planets.jupiter.about, 'about');

    diameter.innerHTML = planets.jupiter.diameter;
    day.innerHTML = planets.jupiter.diameter;
    orbit.innerHTML = planets.jupiter.orbit;

}

function viewSaturn() {
    nameOfPlanet.innerText = planets.saturn.name;

    waitWrite(planets.saturn.about, 'about');
    diameter.innerHTML = planets.saturn.diameter;
    day.innerHTML = planets.saturn.diameter;
    orbit.innerHTML = planets.saturn.orbit;

}

function viewVenus() {
    nameOfPlanet.innerText = planets.venus.name;
    waitWrite(planets.venus.about, 'about');

    diameter.innerHTML = planets.venus.diameter;
    day.innerHTML = planets.venus.diameter;
    orbit.innerHTML = planets.venus.orbit;

}

function viewNeptun() {
    nameOfPlanet.innerText = planets.neptune.name;
    waitWrite(planets.neptune.about, 'about');
    diameter.innerHTML = planets.neptune.diameter;
    day.innerHTML = planets.neptune.diameter;
    orbit.innerHTML = planets.neptune.orbit;

}

function viewYer() {
    nameOfPlanet.innerText = planets.earth.name;
    waitWrite(planets.earth.about, 'about');
    diameter.innerHTML = planets.earth.diameter;
    day.innerHTML = planets.earth.diameter;
    orbit.innerHTML = planets.earth.orbit;

}

function viewPluton() {

    nameOfPlanet.innerText = planets.pluton.name;
    waitWrite(planets.pluton.about, 'about');
    diameter.innerHTML = planets.pluton.diameter;
    day.innerHTML = planets.pluton.diameter;
    orbit.innerHTML = planets.pluton.orbit;

}

function viewMars() {
    waitWrite(planets.mars.about, 'about');
    nameOfPlanet.innerText = planets.mars.name;

    diameter.innerHTML = planets.mars.diameter;
    day.innerHTML = planets.mars.diameter;
    orbit.innerHTML = planets.mars.orbit;

}

function viewUran() {
    nameOfPlanet.innerText = planets.uran.name;

    waitWrite(planets.uran.about, 'about');
    diameter.innerHTML = planets.uran.diameter;
    day.innerHTML = planets.uran.diameter;
    orbit.innerHTML = planets.uran.orbit;
}

function showLoading() {
    var socket = document.querySelector('.socket-container');
    socket.style.display = 'block';
    var tme = setTimeout(function () {
        socket.style.opacity = '1';
        clearTimeout(tme);

    }, 50);
}
function hideLoading() {
    var socket = document.querySelector('.socket-container');
    socket.style.opacity = '0';
    var tme = setTimeout(function () {
        socket.style.display = 'none';
        clearTimeout(tme);
    }, 500);
}
function loadPage() {
    document.getElementById('bgm').play();
    soundTyping.volume = 1;
    showLoading();
    var tme = setTimeout(function () {
        hideLoading();
    }, 8000);
}

CHECK();
function CHECK() {
    if (isTyping) {
        soundTyping.play();
    }
    requestAnimationFrame(CHECK);
}


// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('./sw.js').then(function (reg) {
//         console.log('Successfully registered service worker', reg);
//     }).catch(function (err) {
//         console.warn('Error whilst registering service worker', err);
//     });
// }

window.onpageshow = loadPage;
window.onload = loadPage;
window.onclick = playSound;
