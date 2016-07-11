
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('shubhsblog').then(cache => {
      return cache.addAll([
        '/',
        '/style.css'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

// If contents are in cache show them else fetch from network
self.addEventListener('fetch', event => {
 event.respondWith(
   caches.match(event.request).then(response => {
     return response || fetch(event.request);
   })
 );
});




