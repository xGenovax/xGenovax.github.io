self.addEventListener('install', function(event) { 

  // Service worker being installed

  event.waitUntil( 

    // We can also cause the 'install' stage to extend 
    // until a promise is fulfilled

  );
});

self.addEventListener('activate', function(event) {

  // Code for when service woker is activated

  event.waitUntil( 

    // We can also cause this stage to extend 
    // until a promise is fulfilled

  );
});