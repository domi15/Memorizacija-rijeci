const lista = ["balon", "škola", "crvenilo", "sladoled", "krov", "izvanzemaljac", "pahulja", "gitara", "leptir", "šumski požar", "knjiga", "kaktus", "cipelica", "oblak", "roda", "harmonika", "čarape", "plava boja", "flamingo", "jastuk", "skakavac", "četka za kosu", "ledena ploča", "sljeme", "žirafa", "planina", "kišobran", "konj", "luben"]

const li = []
var br = 0

var k = Math.floor(Math.random() * 30)
let a = lista[k]
document.getElementById("rijec").innerHTML = a

function novo(){
    if (!(a in li)){
        li.push(a);
        br = br + 1;
    }
    else {
        document.getElementById("rijec").innerHTML = "Game Over";
    }
    var k = Math.floor(Math.random() * 30)
    let a = lista[k];
    document.getElementById("rijec").innerHTML = a;
    z = 0;
}

function vidjeno(){
    if (a in li){
        li.push(a);
        br = br + 1;
    }
    else {
        document.getElementById("rijec").innerHTML = "Game Over" + br;
    }
    var k = Math.floor(Math.random() * 30)
    let a = lista[k];
    document.getElementById("rijec").innerHTML = a;
    z = 0;
}