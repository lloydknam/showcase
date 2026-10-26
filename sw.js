// 설치 가능(PWA) 조건용 최소 서비스 워커 — 캐시 없이 네트워크 그대로 사용
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
