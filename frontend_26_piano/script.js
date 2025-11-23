const keys = document.querySelectorAll(".key")

keys.forEach(function (key) {
  key.addEventListener("click", () => {
    const note = key.dataset.note;

    const audio = new Audio(`./music/${note}.mp3`)
    audio.currentTime = 0; // baar baar click pe fresh sound
    audio.play();
  })
})

document.addEventListener("keydown", function (e) {
  let keyMap = {
    a: "28",
    s: "29",
    d: "30",
    f: "31",
    g: "32",
    h: "33",
    j: "34",
    k: "35",
    l: "36",
    z: "37",
    x: "38",
    c: "39",
    v: "40",
    b: "41",
    q: "42",
    w: "43",
    e: "44",
    r: "45",
    t: "46",
    y: "47",
    u: "48",
    i: "49",
    o: "50",
    p: "51",

  };

  const note = keyMap[e.key];
  if (note) {
    const audio = new Audio(`./music/${note}.mp3`)
    audio.currentTime = 0; // baar baar click pe fresh sound
    audio.play();
  }
});
