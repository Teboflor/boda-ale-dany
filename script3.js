const playPauseButton = document.getElementById('play-pause');
const progressBar = document.querySelector('.progress');
const audio = document.getElementById('audio');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.classList.remove('play');
    playPauseButton.classList.add('pause');
  } else {
    audio.pause();
    playPauseButton.classList.remove('pause');
    playPauseButton.classList.add('play');
  }
});

// Actualiza la barra de progreso durante la reproducción del audio
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

// Resetea la barra de progreso y el botón cuando termine el audio
audio.addEventListener('ended', () => {
  playPauseButton.classList.remove('pause');
  playPauseButton.classList.add('play');
  progressBar.style.width = '0%';
});
