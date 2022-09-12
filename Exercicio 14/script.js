function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var minuts = data.getMinutes();
  var msg3 = window.document.getElementById("msg2");

  msg.innerHTML = `Agora são ${hora}:${minuts} horas`;

  if (hora >= 0 && hora < 12) {
    //bom  dia
    img.src = "pordosol.png";
    document.body.style.background = `#FFD95A`;
    msg3.innerHTML = "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = "tarde.png";
    document.body.style.background = `#597F94`;
    msg3.innerHTML = "Boa Tarde";
  } else {
    // boa noite
    img.src = "noite.png";
    document.body.style.background = `#453758`;
    msg3.innerHTML = "Boa Noite";
  }
}
