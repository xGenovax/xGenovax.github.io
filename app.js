/*
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function(reg) {
    console.log('sw registered', reg);
  }).catch(function(err) {
    console.log('sw error', err);
  });
}

if ( 'serviceWorker' in navigator && (typeof Cache !== 'undefined' && Cache.prototype.addAll) ) {
  // Yay, this is a problem we didn't need to have!
  navigator.serviceWorker.register('/sw.js');
}


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(function() {
    console.log('Service worker registered');
  }).catch(function() {
    console.log('Service worker registration failed');
  });
}
else {
  console.log('Service worker not supported');
}*/

/*
// ServiceWorker is a progressive technology. Ignore unsupported browsers
if (navigator.serviceWorker.controller) {
  // A ServiceWorker controls the site on load and therefor can handle offline
  // fallbacks.
  console.log('DEBUG: serviceWorker.controller is truthy');
  debug(navigator.serviceWorker.controller.scriptURL + ' (onload)', 'controller');
}

else {
  // Register the ServiceWorker
  console.log('DEBUG: serviceWorker.controller is falsy');
  navigator.serviceWorker.register('sw.js', {
    scope: './'
  }).then(function(reg) {
    debug(reg.scope, 'register');
  });
}*/

// ServiceWorker is a progressive technology. Ignore unsupported browsers
if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
  }, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}