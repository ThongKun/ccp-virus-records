const STATIC_CACHE_STORE = 'static-cache-v23';
const DYNAMIC_CACHE_STORE = 'dynamic-cache';
var urlsToCache = [
    '/',
    '/style/modal.css',
    '/style/style.css',
    // '/js/google-map-style.js',
    '/js/index.js',
    '/js/modal.js',
    '/js/link-image.js',
    '/reload.js',
    // '/font/D-DINCondensed.woff',
    // 'https://kit.fontawesome.com/c939d0e917.js',
    // 'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js',
    // 'https://kit-free.fontawesome.com/releases/latest/css/free-v4-shims.min.css',
    // 'https://kit-free.fontawesome.com/releases/latest/css/free-v4-font-face.min.css',
    // 'https://kit-free.fontawesome.com/releases/latest/css/free.min.css',
    // 'https://corona.lmao.ninja/v2/countries'
];

self.addEventListener('install', function(evt) {
    console.log('service worker has been installed')
    evt.waitUntil(
        self.skipWaiting(),
        caches.open(STATIC_CACHE_STORE)
        .then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', (evt) => {
    console.log('activate');
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== STATIC_CACHE_STORE)
                .map(key => caches.delete(key))
            )
        })
    )
});

self.addEventListener('fetch', (evt) => {
    // console.log('fetch event', evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                // return caches.open(DYNAMIC_CACHE_STORE).then(cache => {
                //     if (evt.request.url.match('https://corona.lmao.ninja/assets/img/flags/+(.jpg|png)')) {
                //         cache.put(evt.request.url, fetchRes.clone());
                //     }
                //     return fetchRes
                // })
                return fetchRes
            })
        })
    )
})