const playBtn = document.querySelector(".surat");
const lyricsContainer = document.querySelector(".lyricText");
const audio = document.querySelector("audio");

const lyric = [
  { text: "", delay: 3 }, //1
  { text: "1", delay: 1 }, //2
  { text: "2", delay: 1 }, //3
  { text: "3", delay: 0.05 }, //4
  { text: "Selamat", delay: 10 }, //5
  { text: "Ulang", delay: 0.2 }, //6
  { text: "Tahun...", delay: 0.2 }, //7
  { text: "Selamat", delay: 0.2 }, //8
  { text: "Ulang", delay: 0.2 }, //9
  { text: "Tahun...", delay: 0.2 }, //10
  { text: "Semoga", delay: 0.2 }, //11
  { text: "Panjang", delay: 0.125 }, //12
  { text: "Umurnya", delay: 0.2 }, //13
  { text: "Dan", delay: 0.2 }, //14
  { text: "Bahagia", delay: 0.35 } //15
];

const delays = [0.5, 1, 1, 1, 0.6, 0.6, 2, 0.1, 0.1, 2, 0.1, 0.1, 2, 0.1, 2];

async function displayLyrics() {
  for (let i = 0; i < lyric.length; i++) {
    let line = lyric[i].text;
    let charDelay = lyric[i].delay;
    let totalTime = delays[i];

    // Buat elemen kata baru untuk setiap kata
    let wordElement = document.createElement('span');
    wordElement.textContent = line;
    lyricsContainer.appendChild(wordElement);

    // Tambahkan animasi fade-in
    wordElement.classList.add('fade-in');
    await new Promise((resolve) => {
      setTimeout(() => {
        wordElement.classList.remove('fade-in');
        resolve();
      }, totalTime * 0.3 * 3000); // 30% dari total waktu
    });

    // Tambahkan animasi fade-out
    wordElement.classList.add('fade-out');
    await new Promise((resolve) => {
      setTimeout(() => {
        wordElement.classList.remove('fade-out');
        wordElement.remove(); // Hapus elemen kata setelah animasi selesai
        resolve();
      }, totalTime * 0.3 * 3000); // 30% dari total waktu
    });

 
  }
}
let count = 0;

playBtn.addEventListener("click", () => {
  if (count === 0) {
    displayLyrics();
    count = 2;
  }
  audio.play();
});
