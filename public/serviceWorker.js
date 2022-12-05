const staticDevCoffee = "jonatas-portifolio-v1";
const assets = [
  "/",
  "/index",
  "/img/icons/common/bleedAI.jpg",
  "/img/icons/common/dusecaSoftware.jpg",
  "/img/icons/common/github.svg",
  "/img/icons/common/google.svg",
  "/img/icons/common/SiM-Internet.png",
  "/img/icons/common/wapidu.jpg",
  "/img/icons/common/wapidu.png",
  "/fonts/Agustina.otf",
  "/favicon.png",
  "/lottie/coding.json",
  "/lottie/build.json",
  "/lottie/skils/cloudinfra.json",
  "/lottie/skils/ethereum.json",
  "/lottie/skils/fullstack.json",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});