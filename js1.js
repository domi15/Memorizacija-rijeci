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
  try {
  var white = document.querySelector('.white');
  var className = white.className;
  }catch(e){

  }
  if (className == 'white'){
    document.getElementById("body").classList.remove('white');
    document.getElementById("body").classList.add('Dark-mode');
    document.getElementById("github-logo").src = "github_logo_dark.png";
  }
  else {
    document.getElementById("body").classList.remove('Dark-mode');
    document.getElementById("body").classList.add('white');
    document.getElementById("github-logo").src = "github_logo.png";
  }
}

function restart() {
  br = 0
  li.length = 0
  a = lista[Math.floor(Math.random() * lista.length)];
  document.getElementById("rijec").innerHTML = a;
}