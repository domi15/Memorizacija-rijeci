const lista = ["balon", "škola", "crvenilo", "sladoled", "krov", "izvanzemaljac", "pahulja", "gitara", "leptir", "šumski požar", "knjiga", "kaktus", "cipelica", "oblak", "roda", "harmonika", "čarape", "plava boja", "flamingo", "jastuk", "skakavac", "četka za kosu", "ledena ploča", "sljeme", "žirafa", "planina", "kišobran", "konj", "obelisk","papiga", "žir", "motor", "lonac", "telefon", "svijeća", "razbijeno staklo", "zemljopis", "zemlja", "crna rupa", "grah", "pikado", "stablo", "tajna", "nemoguća misija", "ključ", "košarka", "poljubac", "svjetiljka", "kompas", "riba", "željeznica", "zvijezda", "stolac", "komarac", "hrana", "skijanje", "lav", "ogledalo", "banane", "skladatelj", "snijeg", "majmun", "papir", "miš", "nuklearna bomba", "laser", "mjesec", "košulja", "kamera", "zid", "glava", "piramida", "papuča", "podrum", "češalj", "zrcalo", "krv", "čaj", "koncert", "odijelo", "četvrt", "časopis", "alkohol", "nož", "truba", "vreća", "željezo", "električni automobil"];

const li = [];
let br = 0;
let a = lista[Math.floor(Math.random() * lista.length)];
var highscore = document.cookie;

document.getElementById("rijec").innerHTML = a;

document.getElementById('highscore').innerHTML = highscore

if (br > highscore){
  document.cookie = br;
}

function novo() {
  if (!li.includes(a)) {
    li.push(a);
    br++;
  } else {
    document.getElementById("rijec").innerHTML = "Igra svršena ඞ " + br;
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
    document.getElementById("rijec").innerHTML = "Igra svršena ඞ " + br;
    return;
  }
  
  a = lista[Math.floor(Math.random() * lista.length)];
  document.getElementById("rijec").innerHTML = a;
}

function DarkMode() {
  document.body.style.backgroundColor = "black";
  //element.classList.replace(white,Dark-Mode);
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function restart() {
  br = 0
  a = lista[Math.floor(Math.random() * lista.length)];
  document.getElementById("rijec").innerHTML = a;
}
