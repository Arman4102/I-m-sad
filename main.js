const { JSDOM } = require('jsdom');

// Membuat dokumen tiruan
const { document } = (new JSDOM(`<!DOCTYPE html><html><body><button class="surat">Play</button></body></html>`)).window;


const playBtn = document.querySelector(".surat");
const lyricsContainer = document.querySelector(".lyricContainer");
const audio = document.querySelector("audio")

const lyric = [
    { text: "", delay: 3 }, 
    { text: "1", delay: 1 },
    { text: "2", delay: 1 },
    { text: "3", delay: 0.05 },
    { text: "Selamat", delay: 0.1 },
    { text: "Ulang", delay: 0.1 },
    { text: "Tahun", delay: 0.1 }
]

const delays = [1, 1, 1, 1, 0.5, 0.5]

console.log(1+5)

async function displayLyrics() {
    for (let i = 0; i < lyric.length; i++) {
      let line = lyric[i].text;
      let charDelay = lyric[i].delay;
      for (let char of line) {
        lyricsContainer.innerHTML += char;
        await new Promise((resolve) => setTimeout(resolve, charDelay * 1000));
      }
      await new Promise((resolve) => setTimeout(resolve, delays[i] * 1000));
      lyricsContainer.innerHTML += "\n";;
    }
  }

  let count = 0

playBtn.addEventListener("click", () => {
    if (count == 0) {
        displayLyrics()
        count = 1
    }
    audio.play()
});