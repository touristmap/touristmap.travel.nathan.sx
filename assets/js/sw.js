self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('touristmap').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/assets/images/twitter/card.png',
       '/assets/images/favicons/apple-touch-icon.png',
       '/assets/images/favicons/favicon-32x32.png',
       '/assets/images/favicons/favicon-16x16.png',
       '/assets/images/favicons/manifest.json',
       '/favicon.png',
       '/assets/images/favicons/browserconfig.xml',
       '/assets/css/responsive.css',
       '/assets/css/jquery-jvectormap.css',
       '/assets/js/jquery-jvectormap-2.0.3.min.js',
       '/assets/js/jquery-jvectormap-world-mill.js',
     ]);
   })
 );
});

