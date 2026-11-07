// Service worker mínimo para iPhone/PC: guarda la app para usarla sin conexión y recoge las versiones nuevas.
const V = 'ascenso-cache-v5';
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(['./', './index.html', './contenido.js', './contenido-temas.js','./contenido-a2.js','./contenido-voc.js','./contenido-lect.js', './manifest.json', './icon.png']))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // red primero (para ver las novedades) y caché si no hay conexión
  e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(V).then(x => x.put(e.request, c)); return r; }).catch(() => caches.match(e.request)));
});
