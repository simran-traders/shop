'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ddf70908ec43671205be078ad691f8de",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/lib/assets/icons/add_to_cart.svg": "0eb1a5e481ee24dba9de843a9dacdde1",
"assets/lib/assets/icons/back.svg": "1b13e0b59c27ec75d6f5051e5d66e8d9",
"assets/lib/assets/icons/bag_1.svg": "63e5245b06f0a2341dba8d0d9f81014b",
"assets/lib/assets/icons/cart.svg": "fd320d807686c8432b2e449a583296b1",
"assets/lib/assets/icons/heart.svg": "1c996a5addb1570d53d2093a229b8ac8",
"assets/lib/assets/icons/search.svg": "654e22ab2ad459d56cff69b1e077c53f",
"assets/lib/assets/images/bag_1.png": "e9506b6861af2660221107684bbebd97",
"assets/lib/assets/images/bag_2.png": "1d5fd0aaf3e6cbf6b8fa23aed72b0523",
"assets/lib/assets/images/bag_3.png": "d069787fd88889b6d9c0d3b7a054e0bd",
"assets/lib/assets/images/bag_4.png": "0d85b194c8a5c71c60f84d899de86c31",
"assets/lib/assets/images/bag_5.png": "3144272695836710191b7f953cc6fb7e",
"assets/lib/assets/images/bag_6.png": "c51f90dc78a7bc817fd14f20d6567d94",
"assets/lib/assets/stocks/chilly_cutters/ct1.png": "cd2eb064fe1dfb6734d3caff9e99ca35",
"assets/lib/assets/stocks/chilly_cutters/ct2.png": "504aa1e8dacf041f4c8413115052b23f",
"assets/lib/assets/stocks/chilly_cutters/ct3.png": "95c8dc0882f658fd2c8f22a34ed3d6ae",
"assets/lib/assets/stocks/chilly_cutters/ct4.png": "13c34454943641fbfed01b47dc734483",
"assets/lib/assets/stocks/chilly_cutters/ct5.png": "120bd57a3b3ff34b25f31957165f5fca",
"assets/lib/assets/stocks/chilly_cutters/ct6.png": "d332256e96c6bf1aa3313eae314d2ff9",
"assets/lib/assets/stocks/dori_choppers/dc1.png": "d1a4d406de213a0240bc1ec54662b332",
"assets/lib/assets/stocks/dori_choppers/dc2.png": "3c38a8b3ae99071ea70ffdc475142b91",
"assets/lib/assets/stocks/dori_choppers/dc3.png": "9398be8877bcc336fe81a325e032e963",
"assets/lib/assets/stocks/dori_choppers/dc4.png": "0a5b356dba60c1de27863a9f4feaeccc",
"assets/lib/assets/stocks/dori_choppers/dc5.png": "207165cbdabd674b98d6fe25dadc1bbb",
"assets/lib/assets/stocks/dori_choppers/dc6.png": "dc6a7935f32db170550e695845c3f38d",
"assets/lib/assets/stocks/dori_choppers/dc7.png": "7bb4be4ffaa421f42e60c816465f8d15",
"assets/lib/assets/stocks/knives/knv1.png": "4de20e5eb1cc24c998a194ef57777a30",
"assets/lib/assets/stocks/knives/knv2.png": "325f8604e07bd0ba23f7e4fc90b6ab6f",
"assets/lib/assets/stocks/locks/lock1.png": "6fcf1f6506b904aae63c1e5efe9cac18",
"assets/lib/assets/stocks/locks/lock10.png": "04e971c1b382dfdce6d44371bcd2e287",
"assets/lib/assets/stocks/locks/lock11.png": "8fb174a9ac42296fe14275631ad3c653",
"assets/lib/assets/stocks/locks/lock12.png": "8a91cbfd7e3dd59321498b7d5dc2d798",
"assets/lib/assets/stocks/locks/lock13.png": "354440767b2f79597bc81b7a30d5363e",
"assets/lib/assets/stocks/locks/lock14.png": "938dd20cf0d0d35f56164d9dd2d7d13d",
"assets/lib/assets/stocks/locks/lock15.png": "d635f47b0e92722f7bda1e20c1fc9fb3",
"assets/lib/assets/stocks/locks/lock16.png": "432f9597e946e4f66d96d21abf6c1537",
"assets/lib/assets/stocks/locks/lock17.png": "7bd61352d4211a9e7eb83b8535c803db",
"assets/lib/assets/stocks/locks/lock18.png": "9ad032dc2251262d249c273985c126d9",
"assets/lib/assets/stocks/locks/lock19.png": "b1560ce3394afc8887ca939510b4a22f",
"assets/lib/assets/stocks/locks/lock2.png": "cc3d98ceb815ce9137378e878bad799e",
"assets/lib/assets/stocks/locks/lock20.png": "c00efe807773ee497a72c431c2ba89cc",
"assets/lib/assets/stocks/locks/lock21.png": "a4f6b5ae5615c8a19d94b52c2968bfc6",
"assets/lib/assets/stocks/locks/lock22.png": "b55d4a70bb6fafbe19ebb86e99097834",
"assets/lib/assets/stocks/locks/lock23.png": "4d795bbdb6acbe65798ae7525e822261",
"assets/lib/assets/stocks/locks/lock3.png": "f917b37f27d83e1249763e970bdbdd94",
"assets/lib/assets/stocks/locks/lock4.png": "945fcb340f4952aa213285663cac720b",
"assets/lib/assets/stocks/locks/lock5.png": "4a069767a1205fc9e63c0cf0af01c02e",
"assets/lib/assets/stocks/locks/lock6.png": "f9ddbe98056a32760ff5d7ba6f91dd85",
"assets/lib/assets/stocks/locks/lock7.png": "25d3b4700e06ab7231b728024f2cd0c0",
"assets/lib/assets/stocks/locks/lock8.png": "b48319ff3741c1b07bb68eef68ff1a64",
"assets/lib/assets/stocks/locks/lock9.png": "d5f0d5b3cb914c99a41e3389b911046b",
"assets/lib/assets/stocks/phenyle/py1.png": "a8a775c9e54f0adb3830bb338c8f7b0e",
"assets/lib/assets/stocks/rubber_bands/rb1.png": "e8b9b263f06afb58c553db94e2e947ea",
"assets/lib/assets/stocks/rubber_bands/rb2.png": "07ad3d67bf4fe56a15634c1b7036b231",
"assets/lib/assets/stocks/rubber_bands/rb3.png": "07ad3d67bf4fe56a15634c1b7036b231",
"assets/lib/assets/stocks/rubber_bands/rb4.png": "4bf43fa0e3abf4f50ae7dfe0bf7aa0a4",
"assets/lib/assets/stocks/rubber_bands/rb5.png": "5fa9e53349b367547e051b5adfe3bdb7",
"assets/lib/assets/stocks/steel_wool/sw1.png": "5fa9e53349b367547e051b5adfe3bdb7",
"assets/lib/assets/stocks/unknowns/uk1.png": "a6d23b10e8bfb602ca098836b86666a6",
"assets/NOTICES": "ff912cf5e3209363f15424f310502a64",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f2c87cd46d729b4d89f2106ab74ea46d",
"/": "f2c87cd46d729b4d89f2106ab74ea46d",
"main.dart.js": "5767cbb043bc0e4894c6224b3d6d92fb",
"manifest.json": "faeedeb14b194b580840cbf22e1a3bb4",
"version.json": "cb5f5508185642c43db2b6a00dc5044d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
