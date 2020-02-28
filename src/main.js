var resultado = document.getElementById("local");

var calc = document.getElementById("buttonCalcular");

calc.addEventListener("click", calcHoras);

function calcHoras() {
  var horasDiarias = document.getElementById("horasDiarias").value;
  var diasEfetivos = document.getElementById("diasEfetivos").value;
  var diasFerias = document.getElementById("diasFerias").value;
  var valorProjeto = document.getElementById("valorProjeto").value;
  if (
    horasDiarias == "" ||
    diasEfetivos == "" ||
    diasFerias == "" ||
    valorProjeto == ""
  ) {
    alert(
      "Por favor digite os valores númericos para podermos calcular quanto vale a sua hora!"
    );
  } else {
    valorHora =
      valorProjeto / (diasEfetivos * 4 * horasDiarias) +
      diasFerias * diasEfetivos * horasDiarias;
    resultado.innerHTML = `<p class= "resultadoColor">O valor da sua hora é: R$ ${valorHora.toFixed(
      2
    )}</p>`;
  }
}
