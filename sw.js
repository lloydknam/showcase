// 최소 서비스 워커: 설치 가능 조건 충족용(캐시 없이 네트워크 그대로 사용)
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",()=>{});
