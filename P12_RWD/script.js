function animateText() {
    const animatedText = document.getElementById('animated-text');
    
    // Menampilkan animasi
    animatedText.classList.remove('hidden');
    
    // Menambahkan kelas animasi
    setTimeout(() => {
      animatedText.classList.add('show');
    }, 100);
  }
  