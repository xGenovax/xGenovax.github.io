// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how 
  // long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open('cachesite').then(function(cache) {
      // And add resources to it
      return cache.addAll([
		'/',
		'/index.html',
		'/latest.html',
		'/app.js',
        '/css/style.css',
        '/js/app2.js',
		'/images/aperture.png',
		'/images/lys.png',
		'/images/push.png'				
      ]);
    })
  );
});
//ACTIVATE EVENT
self.addEventListener('activate', function(event) {
  console.log('Service Worker activating.');  
});

//EVENT FETCH
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response){
      if(response)
        return response;
      return fetch(event.request).then(function(response){
        return response;
      });
  }));
});