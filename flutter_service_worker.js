'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d988edf6845e800ccdb60daf53b6602c",
"index.html": "dfd064138b782607f94b44df272eedd3",
"/": "dfd064138b782607f94b44df272eedd3",
"main.dart.js": "996008be35bb65e09dcce291a7559bfe",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "946a80d3560f1c71bf680487ae17083b",
".git/config": "70720d32d8220fa50e2b2ddae36ef469",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/6a/5e373a78526bce03847c3eb82ebd2898ecf1c3": "660dc91729a66139b8a12076d4815338",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/56/959770561fd8f75c636753e36dc181c712437e": "6259182060bad737a0b8b2f0e1b8e3ba",
".git/objects/3d/791c2744348b144c28f337dcf81dc8f51c6d5f": "a6b31358e4c874af167ca6b9719df562",
".git/objects/0e/9a8176c5f4a67aca40571be2755a2b17d1d52d": "53c5b20e82bbc3efa7d361272c144add",
".git/objects/33/41ce9609ccbd4e5ee18482910d9ae308e414ca": "360cab413794b6b2127a114a0dbe11f9",
".git/objects/9d/04407e6ddb666205a0d3522960a0a44994b04d": "ff4ff87d8c029411e7d1455de3455d21",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bb/f654ac458933f9fad3ba3044d5709801118a28": "f6120e5dd4a821d5b37020974e2923ff",
".git/objects/d0/8b7ab5f36b7a40b0c6169f9a62c4097dcb0024": "fbb513a30ce6b392ae611a61c2daf49d",
".git/objects/df/c7e2fc59dfbfaf577dc2777f6bb910a6d04d1f": "1a3069e2a129bcd83854f2d53efd65b2",
".git/objects/a5/e5fe2b19196dbb4f61fc6f73b23453e993fdd9": "d0ec2a79a630c3aa039b20829bcedf9a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c9/fbf0f9586665ed08cd6e5b87c84f11ac2c18a4": "5f0c608732df9fc05a6a1a365ce796e0",
".git/objects/e3/2ce4b40e769aa7c495b2c7189f8cd50108e6ca": "5c9da26fa0ca3b270c60b15a1d55c4dc",
".git/objects/cf/ef2e9a632af3eab2e9fd2db654e7549a37d689": "f9271367ebad765cf9eb6aa4f609b486",
".git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
".git/objects/c8/5aa4aeafbb7e59533afb3331f1a83c0d4e5cb8": "23872f17d662e0a4991d41fc1b9ff4dc",
".git/objects/ed/ff10c24ff698d5924b310a223d1dab68dc6777": "88196d7c87bc845e11f6948aea0f3480",
".git/objects/11/f50740f40a88f9a2f28088d391988ae0c275f5": "4386c23d5eaaf70600ad9a47f625dc09",
".git/objects/7c/90a5472ce15a1470b83af19f10b5e48cdba371": "e0bbf9f611a932d1aade20a858a3c9c7",
".git/objects/74/92de946956b7ddbc31a6a98606169d687bb70e": "2d130a53866c7e0afa54d83d7b574ef4",
".git/objects/28/cf12488e78e40d1633231af913b118275ff732": "583854ce0f4eab38f728e4ffcb397508",
".git/objects/7b/b6575c2448d79a200b5e2b50b432547f343e5e": "a4bdfe85c894ef45eb95211e81d4a87c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/9f3ac416110ed5ca834a57d08923af0d18fc88": "8d3ccc7734ddd3c3cabcd3da748e4d6f",
".git/objects/30/595072ca1015520dda6755872d1d097a81cf66": "a537e26cb8429c60ef109886181087d4",
".git/objects/06/9479a63481972e6e51586240c39f0d00f42c79": "bc0ebeeaf337cdf8c2da1f25acb11d57",
".git/objects/06/4517a63f836eb60afc0706012a155c92ac2087": "4584932ceb0ebbd1a54357b9e109dd4f",
".git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
".git/objects/ba/83b1058230643cad1483089d25b1ff730fb04d": "4fdda21ffae5cbb64eae49e1b47240e5",
".git/objects/b8/22d5c227f0e47be17e4a884dc3264ecaa1a1af": "0f51305f17a93550368943ec83f086bb",
".git/objects/b6/7359f07bfdfae23c4ae2f081811219e3556bfb": "ab024443775012f0f030218c50cb7d3b",
".git/objects/a9/ba5868054425d6399a3c4a909ca319d86e020f": "8196f3262a70a4d127222b26e3f06d09",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/9033a801f73539a025d9f4012fa823c27ff3b1": "6489b5eb717a3de0e8081066d4570d80",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/fb5650340b28079c80e340a85a7edfc68dbf03": "2ea891323cb9c98682fbd2bfaf824e20",
".git/objects/a6/260c56238047c425df068e9c620e3d6527790f": "2d35537bc4f306d70085c8d3848adeaa",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/ddc83415f34cb2ca66704126323cca45d43981": "b656859c40b233f704bed382b7882445",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/1cb9de1cd4ddaaf9a36f77275cc30c5336e349": "98307d7321a940bbf1b90abcc90f33b7",
".git/objects/f9/17757a49f2f5f818d2bae2e0b31f4bc9306ba0": "1dca5bc43efe7aa6cdd08b9b560c1d3d",
".git/objects/f9/0d2f5b1b98438a114cf08ab55bc360a5086c49": "243d4e4895654b4675988579f0c431c9",
".git/objects/c5/e96cc687690e74a589ad6bd5476062ac99657b": "84c90811f1e5e269c24c2dfd0cc4d4d0",
".git/objects/c5/dfdb7679899c895750b30e858988c4e194970f": "3fb85d43ae8865a371ac8485e2715610",
".git/objects/e9/ccc6498718b67a7cf89d9905eb57c926f79954": "9ee70f70fc4f95cf233f089be321ad61",
".git/objects/f1/b405ec4c39438da927d245184b3c567489a9e5": "727b9ae57aaf5e29df93744073f09721",
".git/objects/cb/f44db93188aa3f540453461f19b1f355e8f7f8": "f066f0813d8c013a38687ef90bc43207",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
".git/objects/15/55881838702c02f5a47bec7229ad36b3ab5a0c": "1beb490086da03bcc12ae144a94a8b30",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/71/1b00fd78143c50dc9021be3e2a6018666ed17d": "58216b321067456172e3be5f7cf1a43a",
".git/objects/76/9b5208f50e981908498809ed82de0c9af0a817": "aa29ee6f8da6d938e30df863f9324323",
".git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
".git/objects/22/7b354f0484206e2c19a9a28a10c8bcd140a3e0": "63b6636ee989448c4cf5d8625117c438",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e4290c684762e3ea7a6eab6eccb0c9f",
".git/logs/refs/heads/main": "5939483e281e340acba469af22072cad",
".git/logs/refs/remotes/origin/HEAD": "f2f63bc87b0049040f391cd393f4bb20",
".git/logs/refs/remotes/origin/main": "d45e21f2bd4730576c64d2fddbe44e3b",
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
".git/refs/heads/main": "abfb047a9e89e82be48454f702bbf513",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "abfb047a9e89e82be48454f702bbf513",
".git/index": "88777f8722702b222715f7cd6de49ffb",
".git/COMMIT_EDITMSG": "e854d4ae77d748069ffced65df9599f4",
".git/FETCH_HEAD": "4bc555421166ada5f937a130911567b7",
"assets/AssetManifest.json": "9a0bfc0ddbe1b88d73c832e18a0d621a",
"assets/NOTICES": "bdc370d5da30f4e78ad3f253d0b0b479",
"assets/FontManifest.json": "d1bd679170078332f3e6b382e26090e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/fonts/Montserrat-Light.ttf": "e65ae7ed560da1a63db603bd8584cfdb",
"assets/fonts/Montserrat-ExtraLight.ttf": "fca7947b08333e5ffcb80c069755b5c9",
"assets/fonts/Montserrat-Thin.ttf": "4b73d125bab54f94ed2510590c237f73",
"assets/fonts/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/fonts/Montserrat-SemiBold.ttf": "fb428a00b04d4e93deb4d7180814848b",
"assets/fonts/Montserrat-ExtraBold.ttf": "bd8fb30c6473177cfb9a5544c9ad8fdb",
"assets/fonts/Montserrat-Black.ttf": "9c1278c56276b018109f295c1a751a69",
"assets/fonts/Montserrat-Regular.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/login_image.svg": "72cd8a266386d36efd2534b25cdbbbfc",
"assets/assets/images/vacay_logo.png": "90a9b7b6e0813090d8c4ae8f4bedb25d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
