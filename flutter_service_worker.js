'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b7c067b8d1454ab554b638591d8648e7",
"assets/AssetManifest.bin.json": "c3445d345b00c76fcf6db5eabc6ec1b2",
"assets/AssetManifest.json": "54fb1cdbebab9311e18a0bf96e4a557d",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/001-diagram-icon.png": "10a183118674c3965dfee0de05604f62",
"assets/assets/images/002-group-icon.png": "348b3a7fb1870cb4956a8c0f15098767",
"assets/assets/images/003-handshake-icon.png": "2856729a15bbdc4ba7d59f680534b126",
"assets/assets/images/004-renew-icon.png": "1e4612639135604c334f75ee281d89b3",
"assets/assets/images/005-portfolio-icon.png": "82724901055e26f59154f5bf5766d52c",
"assets/assets/images/About_US_Banner_(1).jpg": "4291405489ebb5ddd02e952fc1ca997e",
"assets/assets/images/AmazonLocker-brand-logo.png": "58a03dd841f819673dbcbbafb395de1e",
"assets/assets/images/Amazon_Locker_Partner.jpg": "55de22e40d47fa474611cd4f2c7a99ba",
"assets/assets/images/AW-MFG-coco-icon-02.png": "cbccd096c8f6b9724307a1640ed160ea",
"assets/assets/images/BK-pic-1-aspect-ratio-430-287-992x663.jpg": "926509225bf36d4c41858a08fba2258b",
"assets/assets/images/BK_LOGO_PRIMARY_BACKGROUND__ST_RGB-updated-e1678376309876.png": "d3d1dde7b1d754d627d4001482ad8b50",
"assets/assets/images/BP-logo.png": "6ceeee836f3481ea274db7aeac2554b4",
"assets/assets/images/BurgerKing_Partner.jpg": "0ed1e20cb1e8836b8070a716eab321b2",
"assets/assets/images/Careers.jpg": "09a2caafbcfd65f102dbbf1b9d7432dc",
"assets/assets/images/contact-banner.jpg": "1ec16ac9579f5193ff6c38bf7dc4190a",
"assets/assets/images/costa-brand-330x220.jpg": "a2dc39f690d14b8cf63b958e22fc7eaa",
"assets/assets/images/costa-express_logo.png": "68def6a143046e31784afa8877381df5",
"assets/assets/images/CostaExpress-brand-330x220.jpg": "44a7446a2a531644b445cf63a0f9fe4c",
"assets/assets/images/Costa_Coffee_logo2.svg.png": "777bb139e2effd691c3976d73c041319",
"assets/assets/images/Crow-Orchard-EV-Station-53-retouched-scaled-1.jpg": "c344b26671f1573107d95dd8442d5f19",
"assets/assets/images/deliveroo-brand-330x220.jpg": "3483d6b35935f130b467b96c2fc0d6e8",
"assets/assets/images/Deliveroo-brand-logo.png": "4f7f0407017133f00b4af91ba0405e15",
"assets/assets/images/esso-fuel-brand-logo.png": "dee0f036b420b144497a874f3cf47512",
"assets/assets/images/EV-Power-fuel-brand.png": "726bfa483d596ec2da4e4044eac51e97",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Greggs-330x220.jpg": "2f75621d150790cb10d66c42e88c8b1c",
"assets/assets/images/Greggs_logo.jpg": "5d0bea1f93730d5f5538e242b958f7a8",
"assets/assets/images/Grid1.jpg": "2696557c6835ecdf5d72a2befbfc7687",
"assets/assets/images/Grid2.jpg": "62108728da8434de2def81ed0ed46db7",
"assets/assets/images/Grid3.jpg": "80c230496e888b0d0eb4bb23a803b24e",
"assets/assets/images/Grid4.jpg": "9839dce83ebe47d671b70bd2e0b3a9e0",
"assets/assets/images/Grid5.jpg": "1d1f2b3ba28572ac04a8a698259a187e",
"assets/assets/images/Grid6.jpg": "b6c0c9f8da0cefd5265f3e247eedf789",
"assets/assets/images/icons8-facebook-50.png": "ad73bf7470f30ef213f08842440d145d",
"assets/assets/images/icons8-linked-in-48.png": "5826dff15cf1df9fd2740ca0fad3b397",
"assets/assets/images/icons8-twitter-50.png": "188cc19a497ca73c8e32f8fec42e9a06",
"assets/assets/images/in-post-brand.jpg": "7e9afd71b81265da10a22678047241c8",
"assets/assets/images/InPost-brand-logo.png": "a469f8cd956d604f6046748184594178",
"assets/assets/images/jet-brand-fuel-logo.png": "16e729dcba1bc1792816ee1d13da1cbc",
"assets/assets/images/just-eat-brand-330x220.jpg": "ea8b4ac18bda54a3553e917a8d5e410a",
"assets/assets/images/JustEatLogo-brand-logo.png": "42825c1c55ea3c4b7828914642704490",
"assets/assets/images/Karun.png": "e5dc1d9f5a2676fda9b4d81b43c0da13",
"assets/assets/images/londis-brand-logo.png": "b372f5ee4a519f6f6e556006d2791d00",
"assets/assets/images/londis-partner-445x297.jpg": "a5d75d1df89a7781a01fd64ac915d639",
"assets/assets/images/lottery-brand-330x220.jpg": "80d2ca75361af6ce2f66267f88ed55e6",
"assets/assets/images/Management_Team.png": "7bfb837d32561344810c0bae0d9b884d",
"assets/assets/images/MICHELLE.PNG": "b6cda486f1040ae2cebbf803ccb2987f",
"assets/assets/images/Nagendra.png": "fc0d49ae3d9c958a644e8016a968c682",
"assets/assets/images/national-lottery-vector-logo.png": "3812b12175afbafa5275f0f0a7ae0391",
"assets/assets/images/partners-image-x5-ARTWORK.jpg": "a3bd1313e20abfe2261f8cb301a474ce",
"assets/assets/images/pay-point-brand-300x200.jpg": "f7cdca811cf67943a891f269c7e50ed5",
"assets/assets/images/pay-point-brand-removebg-preview.png": "e36ddae35917cd2b032ad4c868430953",
"assets/assets/images/PayPoint-brand-logo.png": "10bbbf8de5ccbe367a86bb112ae15f56",
"assets/assets/images/Pret-A-Manger-St-Martins-Lane-992x661.jpg": "430201a4c0d0d562a6f383ee32d02c10",
"assets/assets/images/Rajesh.png": "c4354d592a5a9388bfc68aa0ab42591c",
"assets/assets/images/Screenshot_2023-09-30_220409.png": "da07b2a8958474cf90dc150795bcd119",
"assets/assets/images/Screenshot_2023-10-08_023514.png": "39711cf3f907c4b97c8ecf6f8c59a2cb",
"assets/assets/images/Screenshot_2023-10-12_225415.png": "d5e39d89183fb8319631711f457c39cb",
"assets/assets/images/Serving_our_community_(1).jpeg": "c8d0980b991f5b4f4c997cab1e0188a1",
"assets/assets/images/shell-fuel-brand.png": "3017ba4051daa8b00435442d6cf51402",
"assets/assets/images/Soujanya.png": "7839fb20d397c0860f62457b007c1126",
"assets/assets/images/Subway-brand-445x297.jpg": "51804b8dcfecf92db68aed4ccac8e3ed",
"assets/assets/images/Subway-brand-logo.jpg": "4778125c748ceabb272a262c9c590722",
"assets/assets/images/texaco-fuel-brand-logo.png": "216add001a677907d2684ab29e47cd11",
"assets/assets/images/uber-eats-brand-330x220.jpg": "d1971fba1cc3242e4a0d551606518c07",
"assets/assets/images/UberEats-Logo-TwoColor-Black-brand-logo.png": "d89c29e9b49f8a319cfee8a6aeb08416",
"assets/assets/images/Veera_Pandiyan_.png": "f54683962852876fbf035eca687ce187",
"assets/assets/images/We_power_the_future.jpeg": "9a777d3b0889cc331c84ff01ccf42279",
"assets/assets/images/WhatsApp_Image_2023-09-27_at_10.46.56_AM.jpeg": "08411eb478d62d2f429060917b5d9305",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "dedc1c9d4ecadc9155ea970a0cf2d3d3",
"assets/NOTICES": "98b0732215351533fde7116f4c188be7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "07e61653a3c818f5f0f0014d48877b0d",
"/": "07e61653a3c818f5f0f0014d48877b0d",
"main.dart.js": "a8ab4bcb675805f7dff2d43712e26b75",
"version.json": "c056abaa721cb7e2c153ad20cf7e55fc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
