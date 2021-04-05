const sound = ["videoplayback","videoplayback (1)","videoplayback (2)"
,"videoplayback (3)","videoplayback (4)","videoplayback (5)"];

sound.forEach((sound) => {
   const btn = document.createElement("button");

   btn.classList.add("btn");

   btn.innerText = sound;

   btn.addEventListener("click", () => {
        stopSongs();

       document.getElementById(sound).play();
   });

    document.body.appendChild(btn);
});

function stopSongs() {
    sound.forEach((sound) => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
}









