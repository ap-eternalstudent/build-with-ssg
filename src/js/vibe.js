const vibes = [
  "... and you are awesome!",
  "... have a wonderful day!",
  "... and you've got this!",
  "... think of puppies!",
];

const vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector(".vibe").append(vibe);
