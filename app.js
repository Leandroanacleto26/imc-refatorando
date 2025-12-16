import { IMC } from "./classes.js";
import { validarValores, classificarIMC } from "./utils.js";

const form = document.querySelector("#form-imc");
const resultadoDiv = document.querySelector("#resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const peso = Number(document.querySelector("#peso").value);
  const altura = Number(document.querySelector("#altura").value);

  if (!validarValores(peso, altura)) {
    resultadoDiv.textContent = "Preencha os valores corretamente.";
    return;
  }

  const imc = new IMC(peso, altura);
  const valorIMC = imc.calcular();

  const classificacao = classificarIMC(valorIMC);

  resultadoDiv.textContent = `
    IMC: ${valorIMC.toFixed(2)} - ${classificacao}
  `;
});
