const buttonCalcular = document.getElementById("buttonCalcular");

function calculando(valorProjeto, diasEfetivos, diasFerias, horasDiarias) {
  var valorHora =
    valorProjeto / (diasEfetivos * 4 * horasDiarias) +
    diasFerias * diasEfetivos * horasDiarias;

  console.log(valorHora);
}

function handleClick() {
  document.getElementById("forms").submit();
  alert("Form has been submitted");
  const horasDiarias = document.querySelector("#horasDiarias").value;
  const diasEfetivos = document.querySelector("#diasEfetivos").value;
  const diasFerias = document.querySelector("#diasFerias").value;
  const valorProjeto = document.querySelector("#valorProjeto").value;
  calculando(valorProjeto, diasEfetivos, diasFerias, horasDiarias);
}

console.log(calculando);
