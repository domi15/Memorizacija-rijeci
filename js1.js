const lista = ["balon", "škola", "crvenilo", "sladoled", "krov", "izvanzemaljac", "pahulja", "gitara", "leptir", "šumski požar", "knjiga", "kaktus", "cipelica", "oblak", "roda", "harmonika", "čarape", "plava boja", "flamingo", "jastuk", "skakavac", "četka za kosu", "ledena ploča", "sljeme", "žirafa", "planina", "kišobran", "konj", "luben"];

const li = [];
let br = 0;
let a;

function getRandomWord() {
  let k;
  do {
    k = Math.floor(Math.random() * lista.length);
    a = lista[k];
  } while (li.includes(a));
  return a;
}

document.getElementById("rijec").innerHTML = getRandomWord();

function novo() {
  if (li.includes(a)) {
    document.getElementById("rijec").innerHTML = "Game Over";
  } else {
    li.push(a);
    br++;
    document.getElementById("rijec").innerHTML = getRandomWord();
  }
}

function vidjeno() {
  if (li.includes(a)) {
    document.getElementById("rijec").innerHTML = "Game Over " + br;
  } else {
    li.push(a);
    br++;
    document.getElementById("rijec").innerHTML = getRandomWord();
  }
}
