class Cartas {
  constructor(naipe, numero) {
    this.naipe = naipe;
    this.numero = numero;
  }
}

let carta1 = new Cartas("copas", 2);
let carta2 = new Cartas("copas", 3);
let carta3 = new Cartas("copas", 4);
let carta4 = new Cartas("copas", 5);
let carta5 = new Cartas("copas", 6);
let carta6 = new Cartas("copas", 7);
let carta7 = new Cartas("copas", 8);
let carta8 = new Cartas("copas", 9);
let carta9 = new Cartas("copas", 10);
let carta10 = new Cartas("copas", J);
let carta11 = new Cartas("copas", Q);
let carta12 = new Cartas("copas", K);
let carta13 = new Cartas("copas", A);
let carta14 = new Cartas("espadas", 2);
let carta15 = new Cartas("espadas", 3);
let carta16 = new Cartas("espadas", 4);
let carta17 = new Cartas("espadas", 5);
let carta18 = new Cartas("espadas", 6);
let carta19 = new Cartas("espadas", 7);
let carta20 = new Cartas("espadas", 8);
let carta21 = new Cartas("espadas", 9);
let carta22 = new Cartas("espadas", 10);
let carta23 = new Cartas("espadas", J);
let carta24 = new Cartas("espadas", Q);
let carta25 = new Cartas("espadas", K);
let carta26 = new Cartas("espadas", A);
let carta27 = new Cartas("paus", 2);
let carta28 = new Cartas("paus", 3);
let carta29 = new Cartas("paus", 4);
let carta30 = new Cartas("paus", 5);
let carta31 = new Cartas("paus", 6);
let carta32 = new Cartas("paus", 7);
let carta33 = new Cartas("paus", 8);
let carta34 = new Cartas("paus", 9);
let carta35 = new Cartas("paus", 10);
let carta36 = new Cartas("paus", J);
let carta37 = new Cartas("paus", Q);
let carta38 = new Cartas("paus", K);
let carta39 = new Cartas("paus", A);
let carta40 = new Cartas("ouros", 2);
let carta41 = new Cartas("ouros", 3);
let carta42 = new Cartas("ouros", 4);
let carta43 = new Cartas("ouros", 5);
let carta44 = new Cartas("ouros", 6);
let carta45 = new Cartas("ouros", 7);
let carta46 = new Cartas("ouros", 8);
let carta47 = new Cartas("ouros", 9);
let carta48 = new Cartas("ouros", 10);
let carta49 = new Cartas("ouros", J);
let carta50 = new Cartas("ouros", Q);
let carta51 = new Cartas("ouros", K);
let carta52 = new Cartas("ouros", A);

const BARALHO = [52];

  BARALHO.push(carta1);
  BARALHO.push(carta2);
  BARALHO.push(carta3);
  BARALHO.push(carta4);
  BARALHO.push(carta5);
  BARALHO.push(carta6);
  BARALHO.push(carta7);
  BARALHO.push(carta8);
  BARALHO.push(carta9);
  BARALHO.push(carta10);
  BARALHO.push(carta11);
  BARALHO.push(carta12);
  BARALHO.push(carta13);
  BARALHO.push(carta14);
  BARALHO.push(carta15);
  BARALHO.push(carta16);
  BARALHO.push(carta17);
  BARALHO.push(carta18);
  BARALHO.push(carta19);
  BARALHO.push(carta20);
  BARALHO.push(carta21);
  BARALHO.push(carta22);
  BARALHO.push(carta23);
  BARALHO.push(carta24);
  BARALHO.push(carta25);
  BARALHO.push(carta26);
  BARALHO.push(carta27);
  BARALHO.push(carta28);
  BARALHO.push(carta29);
  BARALHO.push(carta30);
  BARALHO.push(carta31);
  BARALHO.push(carta32);
  BARALHO.push(carta33);
  BARALHO.push(carta34);
  BARALHO.push(carta35);
  BARALHO.push(carta36);
  BARALHO.push(carta37);
  BARALHO.push(carta38);
  BARALHO.push(carta39);
  BARALHO.push(carta40);
  BARALHO.push(carta41);
  BARALHO.push(carta42);
  BARALHO.push(carta43);
  BARALHO.push(carta44);
  BARALHO.push(carta45);
  BARALHO.push(carta46);
  BARALHO.push(carta47);
  BARALHO.push(carta48);
  BARALHO.push(carta49);
  BARALHO.push(carta50);
  BARALHO.push(carta51);
  BARALHO.push(carta52);

  function criarBaralho() {
  document.getElementById("texto").innerHTML= "O baralho foi criado."
  document.getElementById("img").src= "https://http2.mlstatic.com/baralho-cartas-baralho-jogo-baralho-D_NQ_NP_220411-MLB20535549819_012016-F.jpg"
}

function embaralhar() {
  document.getElementById("texto").innerHTML= "O baralho foi embaralhado."
  document.getElementById("img").src= "https://th.bing.com/th/id/R.2d818d0635e3491a7ab5afce6dc6d58a?rik=%2fa0I0WJvEUBZYw&riu=http%3a%2f%2fbestanimations.com%2fGames%2fCards%2fcard-trick-animated-gif-8.gif&ehk=ir6c37sdHFucj2R5AoOpYVUx%2bUHG55VsYZN35lVE20o%3d&risl=&pid=ImgRaw&r=0"
  for (let i = BARALHO.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let k = BARALHO[i];
    BARALHO[i] = BARALHO[j];
    BARALHO[j] = k;
  }
}

function distribuirCartasComuns() {
  const CARTAS_COMUNS = BARALHO.slice(0, 6);
  a = CARTAS_COMUNS;
  document.getElementById("texto").innerHTML = CARTAS_COMUNS;
}