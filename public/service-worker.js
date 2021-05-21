var doCache = false;

var CACHE_NAME = "pwa-app-cache";

self.addEventListener("activate", event => {
    const currentCachelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(keyList =>
            Promise.all(
                keyList.map(key => {
                    if (!currentCachelist.includes(key)) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
});

self.addEventListener("install", function(event) {
    if (doCache) {
        event.waitUntil(
            caches.open(CACHE_NAME).then(function(cache) {
                fetch("asset-manifest.json")
                    .then(response => {
                        response.json();
                    })
                    .then(assets => {
                        const urlsToCache = ["/", assets["main.js"]];
                        cache.addAll(urlsToCache);
                    });
            })
        );
    }
});

self.addEventListener("fetch", function(event) {
    if (doCache) {
        event.respondWith(
            caches.match(event.request).then(function(response) {
                return response || fetch(event.request);
            })
        );
    }
});
