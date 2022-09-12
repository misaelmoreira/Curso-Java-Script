function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById(`txtano`);
  var res = window.document.getElementById(`res`);

  if (fano.value.legth == 0 || fano.value == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    var res3 = window.document.getElementById("res2");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        res3.innerHTML = "Voce e uma Criança";
      } else if (idade >= 10 && idade < 21) {
        //jovem
        res3.innerHTML = "Voce e um Jovem";
      } else if (idade < 50) {
        //adulto
        res3.innerHTML = "Voce e um Adulto";
      } else {
        //Idoso
        res3.innerHTML = "Voce e um Idoso";
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";

      if (idade >= 0 && idade < 10) {
        //criança
        res3.innerHTML = "Voce e uma Criança";
      } else if (idade >= 10 && idade < 21) {
        //jovem
        res3.innerHTML = "Voce e uma Jovem";
      } else if (idade < 50) {
        //adulto
        res3.innerHTML = "Voce e uma Adulta";
      } else {
        //Idoso
        res3.innerHTML = "Voce e uma Jurrasic Park...kkk";
      }
    }

    res.style.textAlign = "center";
    res3.style.textAlign = "center";

    res.innerHTML = `Detectamos ${genero} com ${idade} anos de Idade`;
  }
}
