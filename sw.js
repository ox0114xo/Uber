// Service Worker 核心邏輯
const CACHE_NAME = 'ue-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// 必須有 fetch 事件，安裝視窗才會彈出
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
