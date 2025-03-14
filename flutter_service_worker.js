'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8963dc26985e070c076f31cad23ea566",
"version.json": "4d4e80bf5b887d8a6b823a513d9e2b69",
"index.html": "0e957d07cec8a4b29781da3e1366d4a2",
"/": "0e957d07cec8a4b29781da3e1366d4a2",
"main.dart.js": "069f4e6a441b6cb046aa551484282499",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "901d86fb8842ec0d66225a542131d689",
".git/config": "c9f105114a3cba25a51cbbf22a645e6a",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/4e1d84e81da0883c325a35b2a2a626fb05c25b": "3645b9871607dc87ccee136afdc0ef58",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/35/4f77e93921b9e549bd240fe4ec6e0d0a7777f3": "b3f7f10712e82171a526281c6f9a9f53",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/0b/075ef76e715949ba10c383aa6e3e271394c589": "ebea05f829ba15cd6e0b230f97574023",
".git/objects/34/60ad8a3546746f6ee9ce179893db639aa95e68": "fe2e52b2b37046683c614c7bdc79785d",
".git/objects/9c/fec1f22eceddbe403c190fdf350228a01e5a34": "1375357eb3e84d9e3da6027ec3130ec7",
".git/objects/9c/17db222ccef5348e2a7a9070432a16487c3ada": "1bd8ce8cebd7e42844ba17dc2d934553",
".git/objects/a4/498809ac0a3766dc6a3e0b1c3cba0fd6b2e155": "1a4113e950ec5c33953a6cae084349e5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a2/2f3d72495cc59504c3bb43c03bb72ddcfc6086": "8ada765ffc6984b67d85f48e8393b4f2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/77a7999ecd6a764c292c9f07888b90cba153a3": "0cc7fe739098531657da93e76796c7c8",
".git/objects/d8/4874e8da33b85b8751b96ed7a5174f6604fc3d": "3afa5ad13ed7ba3b5385533d143a11d6",
".git/objects/ab/0100cf486307873c9c4b1260a57d30b11a7fdd": "09ab9765f811d4df3a5b2054baf98c5f",
".git/objects/e5/c3b2ffdd5024432f9a27f60e21cb02ef87004e": "ac9e0350bc1fb2e6f26eae75d7d61ffd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0b2c533666498d25436de6e03ee7877aa04782": "059d5c736b61c63849990907b3134650",
".git/objects/f5/c66cf256e0e71d060a80273f04c0c72a668d0a": "2a9abb0fa4f599c9fc6ffa24cebfe9ab",
".git/objects/ca/2b81011365bda678e3c0c4716456fd2ddabf15": "fb1bda505c7ba581582259f455860562",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c6/5a2f00b9d53449b461a9ceea871222ff968a61": "73d9dc11daebbf96ada0f618b1533856",
".git/objects/4e/b5654c80268486100bab971098d27d10999638": "d45252007ed55ac1a31efc7435370711",
".git/objects/29/9c0c7edfb936d2aeb99963a7ef864bb679d3a9": "7dc492fef71414ae0471c5fcdf165e64",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/45/622a40e686eeadfe4e07e5d105153630641a10": "3ae2650e26615d52337f2b7f41a1580b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/c8f2eba0233f3d0a92a312ce6aa4da5e9a6aa7": "4320e2addf6e17ad6ea3c2d4f9663776",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2f/d19e60c5f1ac1d357489f60f34fb94a1360620": "57008c3e097572951e9bbc53b6b2a650",
".git/objects/2f/9e09a18655a13236e0eff8de14239d7d0d731e": "5795ed8673516da75d7bf936b1bf2213",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/b5242e7128985eda7a7bf6e63962c0d902e5c6": "2c751edd6499f5ee814e41705f77f218",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/52/f8f82afa84ba7c0674222c24eea9ed562e67ee": "d74eabcd3efb9e2f04bb105144f334c7",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/dd5449cced1082d92dbdc10311f9d14950e138": "948330748764fc698fc60ceb743f0ae5",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/b2f7c9a72e5d741d4542ddb61543f15d4a66fb": "fc94a2155c6ca6b7df2e9142f86fe394",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/3b3c1eefb3a6c2f2584f48a084752444302748": "b7d4fcd7c3b226a63786435706f8d61a",
".git/objects/d5/a699e027dd06e354590e4d5adf3293fd1db5ce": "a07623a9c9b54b2f9f52d64edf94d5d9",
".git/objects/af/a10e3061f0c1a00b3ec5c22c9bad0702afa04f": "75bb7fe0d725b19f556bd88f404cbb00",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/a8/5a2843d27d83dbbbba145b561cabb74db81fc6": "abcb60250b65974c2cc828742aaca987",
".git/objects/de/6cd85bb7dd3e154313cea0d0d9f0edb2f5ecb8": "1a8c2c749a870273f63ce0db41a0e1fc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/bbc52730a2502b818d7995f91c494f1b9e1112": "abc62612b2dab5008856ae8d10efb689",
".git/objects/cc/7e6ba91aef98bef2be77765bd510834601fbd5": "a292ce9e0843b2ffefe17f87c3f3bd47",
".git/objects/f7/65abf38bebd43844c9c96b8f1c0d924f471668": "63e8f88b4b5bc8ed11dd75aace0415c7",
".git/objects/e7/a1f567ea9b149ecab10098e979df736298d7aa": "a4b9cdf652d26454800f516a06b81851",
".git/objects/e7/411fe1887de44754b766aee0abd1a6788af6e0": "a08c9fbc7b3a0d0d8fdb64bdfcebb0a8",
".git/objects/ce/aa6381478b4158f1c917c4df6ffe374355ab74": "ce2479f67df51bc62dd58676d658780b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/b5d40710a117ba1a3c52e2aa1aa797035d0cd2": "fac632aedffa93dbc285285b1128ff4b",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/0fded00838027c528601a93cb15af1e0e548cc": "7f243842e48394a87405bca35b176ab2",
".git/objects/15/926e64c2a98ccbaa0c95d5595f0c58e182345a": "eff8875808350d47ce16eea06d530b92",
".git/objects/8c/653d7f31df1710ce7e01bc5219d2af621bc2c6": "9450e032cbd5129e9fb9ecb6700ce6b8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/a6403c2a5791fe307295d0cff15dca813fd6fc": "7d6bbddb625e9463a740d627ca08644c",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/13/61751fd5a95e9e281d690742e8bf03e670d3ef": "c9caa1b03d9703b91d37d8b28c1da64e",
".git/objects/13/214e006c0c6e5f0173d8cfcbe0503eb6408a58": "67a1dd571a99c7710cec0790ada0ac46",
".git/objects/14/77ccbfd6931f61b233f4c5a9d46bccdb0e8ae4": "f9384e8a590c214cf12a5ae5171512d7",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "984369701182f31f73222bc3dcea69a4",
".git/logs/refs/heads/main": "984369701182f31f73222bc3dcea69a4",
".git/logs/refs/remotes/origin/main": "68eef878df737210ac0eba8006edadc7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f711df838c253d060486b9d3a4eb29f7",
".git/refs/remotes/origin/main": "f711df838c253d060486b9d3a4eb29f7",
".git/index": "534e57007b814fc28f7fd850df18fb88",
".git/COMMIT_EDITMSG": "46a21a2c77f82a207da30d64a7b73fb4",
".git/FETCH_HEAD": "39887a2c362b02547d866b961dcfc71b",
"assets/AssetManifest.json": "b514f60583022d168f7a81becd947e0c",
"assets/NOTICES": "c64fe9858322b7f554a103be7a26629a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "44ca43b84b9d44388b3a0a9961456b00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6ad32bd11d5ef705a7f1a4c8780e1b88",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/owner.png": "8efe6baa5b5706eab2c20d85ed650016",
"assets/assets/warrior.jpg": "de9e5e6ea067a4522b51e3ebeb33b6bc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
