var CACHE_NAME = 'suntime'

var urlsToCache = [
	'/',
	'/bundle.css',
	'/bundle.js',
	'/global.css',
	'/favicon.png',
	'/index.html',
];


self.addEventListener("install", event => {

	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function (cache) {
				console.log('Opened cache - test');
				return cache.addAll(urlsToCache);
			})
			.then(() => self.skipWaiting())
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
			.then(response => fetch(event.request) || response)
	);
});


self.addEventListener('activate', function (event) {

	var cacheWhitelist = [CACHE_NAME];

	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheWhitelist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName);
					}
				})
			);
		})
	);
});
