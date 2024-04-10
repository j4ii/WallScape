const CACHE_NAME = "WallScape-cache-v1";
const urlsToCache = [
  "https://j4ii.github.io/WallScape/index.html",
  "https://j4ii.github.io/WallScape/style.css",
  "https://j4ii.github.io/WallScape/script.js",
  "https://j4ii.github.io/WallScape/logo/icon.png",
];
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache).catch(function(error) {
        console.error('Failed to cache some or all resources:', error);
      });
    })
  );
});
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      var fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(function (response) {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(function(error) {
        console.error('Failed to fetch resource:', error);
        throw error;
      });
    })
  );
});
