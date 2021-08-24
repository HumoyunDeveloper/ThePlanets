const files = [
    './',
    './cjs/main.js',
    './js/app.js',
    './js/three.module.js',
    './js/VRButton.js',
    './res/sounds/button-3.wav',
    './res/sounds/fast-pace-Typing-on-mechanical-keyboard-1-www.FesliyanStudios.com (1).mp3',
    './res/sounds/melodyloops-preview-healing-and-meditation-mood-2m30s (1).mp3',
    './res/used/3347243-200.png',
    './res/used/logo (1).png',
    './res/used/logo.png',
    './res/used/noun_Earth_269596.png',
    './res/used/noun_Jupiter_3430653.png',
    './res/used/noun_Mars_2183543.png',
    './res/used/noun_Mercury_3394733.png',
    './res/used/noun_Moon_315723.png',
    './res/used/noun_Pluto_3430524.png',
    './res/used/noun_Saturn_2141084.png',
    './res/used/загружено.png',
    './res/used/2k_saturn - 2021-01-27T113809.601.jpg',
    './res/used/2k_neptune - 2021-01-27T113821.440.jpg',
    './app.json',
    './styles/styles.css',
    './index.html',
    './manifest.json'
];

self.addEventListener('install', result => {
    result.waitUntil(
        caches.open('caches:11').then(cache => {
            return cache.addAll(files);
        }).then(response => {
            self.skipWaiting();
        })
    );
});

self.addEventListener("fetch", result => {
    result.respondWith(
        caches.match(result.request).then(res => {
            if(res){
                return res;
            } else {
                return fetch(result.request);
            }
        })
    );
});
