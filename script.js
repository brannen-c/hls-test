if (Hls.isSupported()) {
  const video = document.getElementById("video");
  const hls = new Hls();
  hls.loadSource("https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"); // Replace with your HLS stream URL
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    video.play();
  });
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  const video = document.getElementById("video");
  video.src = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"; // Replace with your HLS stream URL
  video.addEventListener("loadedmetadata", function () {
    video.play();
  });
} else {
  alert("Your browser does not support HLS playback.");
}
