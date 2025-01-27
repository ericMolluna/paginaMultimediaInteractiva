document.addEventListener("DOMContentLoaded", () => {

 
        const video = document.getElementById("trailer");
        const playPauseBtn = document.getElementById("play-pause");
        const restartBtn = document.getElementById("restart");
        const endVideoBtn = document.getElementById("end-video");
      
        if (playPauseBtn) {
          playPauseBtn.addEventListener("click", () => {
            if (video.paused) {
              video.play();
              playPauseBtn.textContent = "⏸️";
            } else {
              video.pause();
              playPauseBtn.textContent = "⏯️";
            }
          });
        }
      
        if (restartBtn) {
          restartBtn.addEventListener("click", () => {
            video.currentTime = 0;
            video.play();
            playPauseBtn.textContent = "⏸️";
          });
        }
      
        if (endVideoBtn) {
          endVideoBtn.addEventListener("click", () => {
            video.currentTime = video.duration - 1; // Ajustar a casi el final del video
            video.play();
            playPauseBtn.textContent = "⏸️";
          });
        }
    
      
    const zoomInBtn = document.getElementById("zoom-in");
    const zoomOutBtn = document.getElementById("zoom-out");
    const galleryImages = document.querySelectorAll(".galeria img");
  
    console.log("Botón de agrandar imágenes:", zoomInBtn);
    console.log("Botón de reducir imágenes:", zoomOutBtn);
    console.log("Imágenes de la galería:", galleryImages);
  
    let zoomLevel = 1;
  
    if (zoomInBtn && zoomOutBtn && galleryImages.length > 0) {
      zoomInBtn.addEventListener("click", () => {
        zoomLevel += 0.1;
        console.log("Nivel de zoom aumentado a:", zoomLevel);
        updateGalleryZoom();
      });
  
      zoomOutBtn.addEventListener("click", () => {
        zoomLevel = Math.max(0.5, zoomLevel - 0.1);
        console.log("Nivel de zoom reducido a:", zoomLevel);
        updateGalleryZoom();
      });
    } else {
      console.error("No se encontraron los elementos necesarios.");
    }
  
    function updateGalleryZoom() {
      galleryImages.forEach((img) => {
        img.style.transform = `scale(${zoomLevel})`;
        img.style.transition = "transform 0.3s";
        console.log("Se aplicó el zoom a la imagen:", img);
      });
    }
  });

  const audioElement = document.getElementById("audio-element");
  const playlist = document.getElementById("playlist");
  const tracks = playlist.querySelectorAll("li");

  tracks.forEach((track) => {
    track.addEventListener("click", () => {
      tracks.forEach((t) => t.classList.remove("active"));
      track.classList.add("active");
      audioElement.src = track.dataset.src;
      audioElement.play();
    });
  });

  