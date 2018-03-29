var titel = document.getElementById("ueber-mich");
var werdegang = document.getElementById("werdegang");
var ueberMich = document.getElementById("ueber-mich-heading");

ueberMich.addEventListener('click', function() {
  if (werdegang.classList.contains("hide")) {
    werdegang.classList.remove("hide");
  } else {
    werdegang.classList.add("hide");
  }

  if (ueberMich.classList.contains("zu")) {
    console.log( 'here')
    ueberMich.classList.remove("zu");
    ueberMich.classList.add("auf");
  } else {
    ueberMich.classList.remove("auf");
    ueberMich.classList.add("zu");
  }
}, false);

