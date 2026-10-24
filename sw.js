// Tosun Paşa Çiftliği - Service Worker (sw.js)
// Sürüm 2.0.4 - Kullanım Kılavuzu Başlık Güncellemesi
const CACHE_NAME = 'tosun-pasa-v2.0.4';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './noto-ox.svg',
  './icon-192.png',
  './icon-512.png'
];

// Install Event: Cache assets and force activate
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW v2.0.4] Yeni önbellek yükleniyor:', CACHE_NAME);
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event: Delete ALL old caches immediately and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Eski önbellek temizleniyor:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      console.log('[SW v1.3.0] Kontrol devralındı.');
      return self.clients.claim();
    })
  );
});

// Fetch Event:
// HTML & Navigations: NETWORK-FIRST (Always get latest version if online, fallback to cache if offline)
// Static Assets: STALE-WHILE-REVALIDATE (Serve fast, update in background)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  const isHtml = event.request.mode === 'navigate' || 
                 (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) ||
                 url.pathname.endsWith('index.html') ||
                 url.pathname.endsWith('/');

  if (isHtml) {
    // Network-First for HTML to ensure user gets latest updates immediately
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline: Serve cached HTML
        return caches.match('./index.html').then((cached) => {
          return cached || caches.match(event.request);
        });
      })
    );
  } else {
    // Stale-While-Revalidate for CSS, JS, Images
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Network fail, return nothing (cachedResponse handled below)
        });

        return cachedResponse || fetchPromise;
      })
    );
  }
});

// Message listener for manual cache purge / skip waiting
self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'CLEAR_CACHE') {
    caches.keys().then((names) => Promise.all(names.map((n) => caches.delete(n))));
  }
});
