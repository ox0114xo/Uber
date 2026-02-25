// 安裝 Service Worker
self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('Service Worker: 已安裝');
});

// 啟用 Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
    console.log('Service Worker: 已啟用');
});

// 攔截請求 (確保 PWA 離線可用性，滿足 Chrome 安裝要求)
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});

