const CACHE='protocol-v4';
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./'])))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(f=>{const cp=f.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return f}).catch(()=>caches.match('./'))))});