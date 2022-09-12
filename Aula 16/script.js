var ini = window.document.getElementById("initxt");
var fim = window.document.getElementById("fimtxt");
var passo = window.document.getElementById("pastxt");
var res2 = document.getElementById("res");

function contar() {
  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res2.innerHTML = "Impossivel contar!";
  } else {
    let i = Number(ini.value);
    let f = Number(fim.value);
    let pas = Number(passo.value);

    res2.innerHTML = "Contando: <br>";

    if (pas <= 0) {
      window.alert("Passo Invalido! considerando PASSO = 1");
      pas = 1;
    }

    if (i < f) {
      //contagem crescente
      for (var c = i; c <= f; c = c + pas) {
        res2.innerHTML += ` ${c} \u{1F449}`;
      }
    } else {
      //contagem decrecente
      for (var c = i; c >= f; c = c - pas) {
        res2.innerHTML += ` ${c} \u{1F449}`;
      }
    }

    res2.innerHTML += ` \u{1F3c1}`;
  }
}
