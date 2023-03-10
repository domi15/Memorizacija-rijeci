const lista = ["balon", "škola", "crvenilo", "sladoled", "krov", "izvanzemaljac", "pahulja", "gitara", "leptir", "šumski požar", "knjiga", "kaktus", "cipelica", "oblak", "roda", "harmonika", "čarape", "plava boja", "flamingo", "jastuk", "skakavac", "četka za kosu", "ledena ploča", "sljeme", "žirafa", "planina", "kišobran", "konj", "luben"];

const li = [];
let br = 0;
let a = lista[Math.floor(Math.random() * lista.length)];

document.getElementById("rijec").innerHTML = a;

function novo() {
  if (!li.includes(a)) {
    li.push(a);
    br++;
  } else {
    document.getElementById("rijec").innerHTML = "Game Over" + br;
    return;
  }
  
  a = lista[Math.floor(Math.random() * lista.length)];
  document.getElementById("rijec").innerHTML = a;
}

function vidjeno() {
  if (li.includes(a)) {
    li.push(a);
    br++;
  } else {
    document.getElementById("rijec").innerHTML = "Game Over " + br;
    return;
  }
  
  a = lista[Math.floor(Math.random() * lista.length)];
  document.getElementById("rijec").innerHTML = a;
}

function DarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}