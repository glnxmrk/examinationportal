const CACHE_NAME = 'quiz-portal-v1';

// Install event - no assets to precache for "not offline" requirement
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Fetch event - pure network strategy (no caching) to satisfy PWA requirements
// while ensuring data always stays fresh and "not offline" as requested.
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).catch(() => {
            // Optional: return a minimal offline page if desired, 
            // but "not offline" usually means don't serve stalled content.
            return null;
        })
    );
});
