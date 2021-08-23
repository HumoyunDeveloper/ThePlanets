var lang;
lang = document.getElementById('lang');

const MODE = ['MODE_UZB', 'MODE_ENG'];
var currentMode = localStorage.getItem('lang') || 'uz';

const uz = {
    using: "Foydalanish...",
    using_id: 'using',
    using_about_id: 'usingabout',
    using_about: `Bizning dastur 3D obyektlarni faqat onLine bo'lgandagina ishga tushiradi.  Bu degani siz faqatgina internet bor bo'lsagina sayyoralarning 3D tuzilishini ko'rishingiz   mumkin...Biz bu muommoni bartaraf qilish uchun ishlayapmiz, shunday ekan siz dasturning yangi     versiyasini o'tkazib yubrmaslik uchun bizning saytdagi      "Notifications" Bo'limini yoqib qo'yishingizni mumkin...`,
    features_id: 'feat',
    features: 'Dastur hususiyatlari',
    fetures_about_id: 'featabout',
    fetures_about: `Bu dastur PWA hisoblanadi, shu sababli siz uni bemalol android yoki o'z kompyuteringizga dastur sifatida yuklab olishingiz mumkin vaagar siz offline bolsangiz dastur avtomatik ravishda "offline" rejimga o'tadi.`,
    used_id: "used",
    used: "Foydalanilgan manbalar",
    olish_id: 'olish',
    olish: "Siz bu saytlardan koproq malumotlar olishingiz mumkin.",
    dres_id: "dres",
    dres: 'Dasturdagi sayyoralar rasmlarini tortib olish (yuklash) <button id="dbtn">Yukla</button>',
    contact: "Iltimos agar sizda savol yoki takliflar bolsa men bilan bog'laning",
    contact_id: "contact",
    change: "Tilni tanlang : ",
    change_id: "choose",
    cont: "Bog'lanish",
    cont_id: "cont",
    sysreq_id: 'sysreq',
    sysreq: 'agarda dasturda xatolikni payqasangiz biz bilan boglaning yoki dasturni refresh qiling yani (yangilash - ctrl + r)',

};
const eng = {
    using: "Using...",
    using_id: 'using',
    using_about_id: 'usingabout',
    using_about: `Our program runs when you are online. Because we are work on the server and we are going to create new version of this app, so please enable "Notifications" in your browser if you want to get Notifications from this site`,
    features_id: 'feat',
    features: 'Features',
    fetures_about_id: 'featabout',
    fetures_about: `This app is PWA (progressive web app), so you can use this web site as an application! install it your own pc or android. This app does not work if you are offline, So we added some offline features to this app`,
    used_id: "used",
    used: "Used resources",
    olish_id: 'olish',
    olish: "In these sites you can get more informations about solar system .",
    dres_id: "dres",
    dres: 'If you want to download some Image resources of planets  <button id="dbtn">Download</button>',
    contact: "Please contact me if you have an issue or something else ",
    contact_id: "contact",
    change: "choose language : ",
    change_id: "choose",
    cont: "Contact",
    cont_id: "cont",
    sysreq_id: 'sysreq',
    sysreq : 'Please refresh the page (ctrl + r) if there is an error or contact us.'
};

function modeUZB() {
    idx(uz.contact_id, uz.contact);
    idx(uz.dres_id, uz.dres);
    idx(uz.features_id, uz.features);
    idx(uz.fetures_about_id, uz.fetures_about);
    idx(uz.olish_id, uz.olish);
    idx(uz.used_id, uz.used);
    idx(uz.using_id, uz.using);
    idx(uz.using_about_id, uz.using_about);
    idx(uz.cont_id, uz.cont);
    idx(eng.change_id, eng.change);
    idx(uz.change_id, uz.change);
    
    idx(uz.sysreq_id, uz.sysreq);
}
function modeENG() {
    idx(eng.contact_id, eng.contact);
    idx(eng.dres_id, eng.dres);
    idx(eng.features_id, eng.features);
    idx(eng.fetures_about_id, eng.fetures_about);
    idx(eng.olish_id, eng.olish);
    idx(eng.used_id, eng.used);
    idx(eng.using_id, eng.using);
    idx(eng.using_about_id, eng.using_about);
    idx(eng.change_id, eng.change);
    idx(eng.cont_id, eng.cont);
    idx(eng.sysreq_id, eng.sysreq);
}

function idx(id, txt) {
    return document.getElementById(id).innerHTML = txt;
}

lang.onchange = (val) => {
    value = lang.value;
    switch (value) {
        case 'eng':
            localStorage.setItem('lang', 'eng');
            modeENG();
            break;
        default:
            localStorage.setItem('lang', 'uz');
            modeUZB();
            break;
    }
};

function init() {
    var lang_name = localStorage.getItem('lang');
    loadPage();
    if (lang_name) {
        switch (lang_name) {
            case 'eng':
                lang.value = 'eng';
                modeENG();
                break;
            default:
                lang.value = 'uz';
                modeUZB();
                break;
        }
    }
    else {
        lang.value = 'uz';
        modeUZB();
    }
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
    showLoading();
    var tme = setTimeout(function () {
        hideLoading();
    }, 8000);
}

var sound = new Audio();
sound.src = './res/sounds/button-3.wav';
function playSound(){
    sound.play();
}
window.onload = init;
window.onclick = playSound;