// Botão para mostrar ou esconder o vídeo
const botao = document.getElementById('toggleBtn');
const video = document.getElementById('meuVideo');

botao.addEventListener('click', () => {
  if (video.style.display === 'none' || video.style.display === '') {
    video.style.display = 'block';
    botao.textContent = 'Ocultar Vídeo 🎥';
  } else {
    video.style.display = 'none';
    botao.textContent = 'Mostrar Vídeo 🎥';
  }
});
