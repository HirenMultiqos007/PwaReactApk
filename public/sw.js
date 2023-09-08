// const cacheData = 'appV1';

// this.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(cacheData).then((cache) => {
//       // You don't need to add anything to cache during installation
//       return;
//     })
//   );
// });

// this.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((cachedResponse) => {
//       if (cachedResponse) {
//         // If a cached response is found, return it
//         return cachedResponse;
//       }

//       // If not found in cache, fetch the request from the network
//       return fetch(event.request).then((response) => {
//         // Clone the response to store it in the cache
//         const clonedResponse = response.clone();

//         caches.open(cacheData).then((cache) => {
//           cache.put(event.request, clonedResponse);
//         });

//         return response;
//       }).catch(() => {
//         // If fetch fails (e.g., when offline), you can return a custom offline page or a fallback response
//         // For example:
//         return caches.match('/offline.html'); // Replace with your offline page URL
//       });
//     })
//   );
// });
// install service worker
// self.addEventListener("install", (evt) => {
//   console.log("service worker has been installed");
// });
// //active service worker
// self.addEventListener("activate", (evt) => {
//   console.log("service worker has been activated");
// });
// // fetch event
// self.addEventListener("fetch", (evt) => {
//   console.log("fetch event", evt);
// });
