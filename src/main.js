const forms = document.getElementById("forms");

const horasDiarias = document.querySelector("#horasDiarias").value;
const diasEfetivos = document.querySelector("#diasEfetivos").value;
const diasFerias = document.querySelector("#diasFerias").value;
const valorProjeto = document.querySelector("#valorProjeto").value;

const resultado = document.getElementById("local");

const handleClick = () => {
  calculando();
  forms.addEventListener("submit", e => {
    e.preventDefault();
  });
};

const calculando = () => {
  const valorHora =
    valorProjeto / (diasEfetivos * 4 * horasDiarias) +
    diasFerias * diasEfetivos * horasDiarias;

  /* resultado.createElement("p"); */
  resultado.textContent = `O valor da sua hora é: R$${valorHora.toFixed(2)}`;
};
