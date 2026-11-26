// Tonsa service worker: shows "طلبك جاهز" even when the phone is locked (Android Chrome).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data.json(); } catch { d = { title: 'Tonsa', body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || 'Tonsa', {
    body: d.body || '',
    icon: '/icon.png',
    badge: '/favicon.png',
    tag: 'tonsa-' + (d.order_id || d.url || ''),
    renotify: true,
    requireInteraction: true,
    vibrate: [90, 60, 90, 60, 90, 140, 600], // اهتزاز Tonsa المميز
    // تنبيهات بطاقة الولاء تجي معها رابط البطاقة
    data: { url: d.url ? d.url.replace(/^https:\/\/tonsa-app\.github\.io/, '') : '/o/?id=' + (d.order_id || '') },
    dir: 'rtl', lang: 'ar',
  }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || '/';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
    for (const c of list) if (c.url.includes(url) && 'focus' in c) return c.focus();
    return self.clients.openWindow(url);
  }));
});
