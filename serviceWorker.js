const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "https://www.culinaryschools.org/images/logo-mini.png",
  "https://www.culinaryschools.org/kids-games/jack-smith/jack-smith.jpg",
  "https://www.culinaryschools.org/kids-games/gamestylesheet.css",
  "https://connect.facebook.net/en_US/fbevents.js",
  "https://rules.quantcount.com/rules-p-31iz6hfFutd16.js",
  "https://secure.quantserve.com/quant.js",
  "https://secure.cdn.fastclick.net/js/cnvr-coreid/latest/coreid.min.js",
  "https://secure.cdn.fastclick.net/js/cnvr-launcher/latest/launcher.min.js",
  "https://cdn.hadronid.net/hadron.js?url=https%3A%2F%2Fwww.culinaryschools.org%2Fkids-games%2Fjack-smith%2F&ref=https%3A%2F%2Fwww.google.com%2F&_it=amazon&partner_id=524",
  "https://the.gatekeeperconsent.com/cmp.min.js",
  "https://c.amazon-adsystem.com/aax2/apstag.js",
  "https://www.ezojs.com/ezoic/sa.min.js",
  "https://www.culinaryschools.org/star-rating/rating.php?css",
  "https://www.culinaryschools.org/star-rating/rating.php?js",
  "https://www.culinaryschools.org/mint/?record&key=3034364d393356796f507638796151393337317a71776b68&referer=https%3A//www.google.com/&resource=https%3A//www.culinaryschools.org/kids-games/jack-smith/&resource_title=Jack%20Smith%20Game%3A%20Free%20Online%20Blacksmith%20Sim%20Video%20Game%20for%20Kids&resource_title_encoded=0&resolution=810x1080&flash_version=0&window_width=1080&window_height=707&1739839640783&serve_js",
  "https://www.ezojs.com/identity.js",
  "https://www.culinaryschools.org/kids-games/jack-smith/game.php"
];

// インストール時にキャッシュする
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// リクエストをキャッシュから返す
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 古いキャッシュを削除する
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
