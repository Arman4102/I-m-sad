const playBtn = document.querySelector(".surat");
const lyricsContainer = document.querySelector(".lyricText");
const audio = document.querySelector("audio");

const lyric = [
  { text: "", delay: 1.5 },
  { text: "1", delay: 1.2 },
  { text: "2", delay: 1.2 },
  { text: "3", delay: 1.2 },
  { text: "Happy", delay: 0.9 },
  { text: "Birthday", delay: 1 },
  { text: "To Youuu", delay: 3 },
  { text: "Happy", delay: 0.8 },
  { text: "Birthday", delay: 1 },
  { text: "To Youuu", delay: 3.3 },
  { text: "Semoga", delay: 1 },
  { text: "Panjang", delay: 1 },
  { text: "Umurnya", delay: 2.8 },
  { text: "Dan", delay: 1 },
  { text: "Bahagia", delay: 4.4 },
  { text: "Selamat", delay: 0.8 },
  { text: "Ulang", delay: 1 },
  { text: "Tahun", delay: 3 },
  { text: "Selamat", delay: 0.8 },
  { text: "Ulang", delay: 1 },
  { text: "Tahun", delay: 3.2 },
  { text: "Selamat", delay: 1.25 },
  { text: "Sejahtera", delay: 3.8 },
  { text: "Sehat", delay: 1 },
  { text: "Sentosa", delay: 4 },
  { text: "Selamat", delay: 1 },
  { text: "Ulang", delay: 1 },
  { text: "Tahun", delay: 3 },
  { text: "Selamat", delay: 1 },
  { text: "Ulang", delay: 1.2 },
  { text: "Tahun", delay: 3 },
  { text: "Panjang", delay: 1.25 },
  { text: "Umurnya", delay: 3.5 },
  { text: "Serta", delay: 1.2 },
  { text: "Mulia", delay: 4 },
];

async function displayLyrics() {
  for (let i = 0; i < lyric.length; i++) {
    let line = lyric[i].text;
    let totalTime = lyric[i].delay;
    // Buat elemen kata baru untuk setiap kata
    let wordElement = document.createElement("span");
    wordElement.textContent = line;
    lyricsContainer.appendChild(wordElement);
    console.log(wordElement)
    // Tambahkan animasi fade-in
    wordElement.classList.add("fade-in");
    await new Promise((resolve) => {
      setTimeout(() => {
        wordElement.classList.remove("fade-in");
        resolve();
      }, totalTime * 0.2 * 3000); // 30% dari total waktu
    });

    // Tambahkan animasi fade-out
    wordElement.classList.add("fade-out");
    await new Promise((resolve) => {
      setTimeout(() => {
        wordElement.classList.remove("fade-out");
        wordElement.remove(); // Hapus elemen kata setelah animasi selesai
        resolve();
      }, totalTime * 0.2 * 3000); // 30% dari total waktu
    });
  }
}

let count = 0;

playBtn.addEventListener("click", () => {
  if (count === 0) {
    displayLyrics();
    count = 2;
  }
  audio.play().catch((error) => {
    console.error("Error playing audio:", error);
  }); // Tangani potensi error saat memutar audio
});
