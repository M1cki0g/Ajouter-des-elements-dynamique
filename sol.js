let i = 0;
function ajouter() {
  let p = document.createElement("p");
  let div = document.getElementById("conteneur");
  console.log(p);
  i++;
  p.textContent = "element ajouter " + i;
  document.body.appendChild(p);
  //   div.appendChild(p);
}
