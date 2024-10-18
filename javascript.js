const textArray = [
    "Mahasiswa Jurusan Teknik Informatika di Universitas Negeri Surabaya",
    "UI/UX Designer"
  ];
  let textIndex = 0;       // Menyimpan indeks teks yang akan ditampilkan
  let charIndex = 0;       // Menyimpan indeks karakter saat ini yang akan diketik
  let isDeleting = false;  // Apakah sedang menghapus teks atau tidak
  const typingSpeed = 50; // Kecepatan mengetik
  const erasingSpeed = 50; // Kecepatan menghapus
  const delayBetweenTexts = 2000; // Jeda antar pergantian teks
  
  function typeWriter() {
    const spanElement = document.querySelector('.typewriter-loop');
    
    // Teks yang sedang ditampilkan
    const currentText = textArray[textIndex];
  
    // Jika sedang mengetik
    if (!isDeleting) {
      // Tambahkan karakter ke elemen span
      spanElement.textContent = currentText.slice(0, charIndex++);
      
      // Jika semua karakter sudah ditampilkan, mulai menghapus
      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, delayBetweenTexts); // Jeda sebelum menghapus
      } else {
        setTimeout(typeWriter, typingSpeed); // Lanjut mengetik
      }
    } else {
      // Menghapus karakter dari elemen span
      spanElement.textContent = currentText.slice(0, charIndex--);
      
      // Jika semua karakter sudah dihapus, ganti ke teks berikutnya
      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // Ganti teks
        charIndex = 0; // Reset karakter index
        setTimeout(typeWriter, typingSpeed); // Mulai mengetik teks berikutnya
      } else {
        setTimeout(typeWriter, erasingSpeed); // Lanjut menghapus
      }
    }
  }
  
  // Memulai animasi setelah halaman dimuat
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeWriter, delayBetweenTexts); // Tunggu sebentar sebelum mulai mengetik
  });
  