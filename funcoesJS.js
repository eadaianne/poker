class Cartas {
  constructor(naipe, numero) {
    this.naipe = naipe;
    this.numero = numero;
  }
}

var BARALHO = [52];

BARALHO.push(new Cartas("copas", "2"));
BARALHO.push(new Cartas("copas", "3"));
BARALHO.push(new Cartas("copas", "4"));
BARALHO.push(new Cartas("copas", "5"));
BARALHO.push(new Cartas("copas", "6"));
BARALHO.push(new Cartas("copas", "7"));
BARALHO.push(new Cartas("copas", "8"));
BARALHO.push(new Cartas("copas", "9"));
BARALHO.push(new Cartas("copas", "10"));
BARALHO.push(new Cartas("copas", "J"));
BARALHO.push(new Cartas("copas", "Q"));
BARALHO.push(new Cartas("copas", "K"));
BARALHO.push(new Cartas("copas", "A"));
BARALHO.push(new Cartas("espadas", "2"));
BARALHO.push(new Cartas("espadas", "3"));
BARALHO.push(new Cartas("espadas", "4"));
BARALHO.push(new Cartas("espadas", "5"));
BARALHO.push(new Cartas("espadas", "6"));
BARALHO.push(new Cartas("espadas", "7"));
BARALHO.push(new Cartas("espadas", "8"));
BARALHO.push(new Cartas("espadas", "9"));
BARALHO.push(new Cartas("espadas", "10"));
BARALHO.push(new Cartas("espadas", "J"));
BARALHO.push(new Cartas("espadas", "Q"));
BARALHO.push(new Cartas("espadas", "K"));
BARALHO.push(new Cartas("espadas", "A"));
BARALHO.push(new Cartas("paus", "2"));
BARALHO.push(new Cartas("paus", "3"));
BARALHO.push(new Cartas("paus", "4"));
BARALHO.push(new Cartas("paus", "5"));
BARALHO.push(new Cartas("paus", "6"));
BARALHO.push(new Cartas("paus", "7"));
BARALHO.push(new Cartas("paus", "8"));
BARALHO.push(new Cartas("paus", "9"));
BARALHO.push(new Cartas("paus", "10"));
BARALHO.push(new Cartas("paus", "J"));
BARALHO.push(new Cartas("paus", "Q"));
BARALHO.push(new Cartas("paus", "K"));
BARALHO.push(new Cartas("paus", "A"));
BARALHO.push(new Cartas("ouros", "2"));
BARALHO.push(new Cartas("ouros", "3"));
BARALHO.push(new Cartas("ouros", "4"));
BARALHO.push(new Cartas("ouros", "5"));
BARALHO.push(new Cartas("ouros", "6"));
BARALHO.push(new Cartas("ouros", "7"));
BARALHO.push(new Cartas("ouros", "8"));
BARALHO.push(new Cartas("ouros", "9"));
BARALHO.push(new Cartas("ouros", "10"));
BARALHO.push(new Cartas("ouros", "J"));
BARALHO.push(new Cartas("ouros", "Q"));
BARALHO.push(new Cartas("ouros", "K"));
BARALHO.push(new Cartas("ouros", "A"));

function criarBaralho() {
  document.getElementById("texto").innerHTML = "O baralho foi criado.";
  document.getElementById("img").src =
    "https://http2.mlstatic.com/baralho-cartas-baralho-jogo-baralho-D_NQ_NP_220411-MLB20535549819_012016-F.jpg";
    return BARALHO;
}

function embaralhar() {
  document.getElementById("texto").innerHTML = "O baralho foi embaralhado.";
  document.getElementById("img").src =
    "https://th.bing.com/th/id/R.2d818d0635e3491a7ab5afce6dc6d58a?rik=%2fa0I0WJvEUBZYw&riu=http%3a%2f%2fbestanimations.com%2fGames%2fCards%2fcard-trick-animated-gif-8.gif&ehk=ir6c37sdHFucj2R5AoOpYVUx%2bUHG55VsYZN35lVE20o%3d&risl=&pid=ImgRaw&r=0";
    for (let i = BARALHO.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = BARALHO[i];
    BARALHO[i] = BARALHO[j];
    BARALHO[j] = k;
  }
  return BARALHO;
}

function distribuirCartasComuns() {
  document.getElementById("img").src = "https://i0.wp.com/garotasnerds.com/wp-content/uploads/2018/01/50568763_1257372624415303_2139251913680486400_n-e1547833714996.jpg?resize=728%2C192&ssl=1"
  var CARTAS_COMUNS = BARALHO.slice(0, 6);
  document.getElementById("texto").innerHTML = CARTAS_COMUNS[0].numero + " de " + CARTAS_COMUNS[0].naipe
  + ", " + CARTAS_COMUNS[1].numero + " de " + CARTAS_COMUNS[1].naipe
  + ", " + CARTAS_COMUNS[2].numero + " de " + CARTAS_COMUNS[2].naipe
  + ", " + CARTAS_COMUNS[3].numero + " de " + CARTAS_COMUNS[3].naipe
  + ", " + CARTAS_COMUNS[4].numero + " de " + CARTAS_COMUNS[4].naipe;
}