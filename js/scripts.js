window.addEventListener('scroll', function() {
    var video = document.getElementById('background-video');
    var videoPosition = video.getBoundingClientRect().top;
    var windowPosition = window.innerHeight;

    if (videoPosition < windowPosition) {
      video.play();
    } else {
      video.pause();
    }
  });