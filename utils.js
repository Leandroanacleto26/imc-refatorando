export const validarValores = (peso, altura) => {
  return peso > 0 && altura > 0;
};

export const classificarIMC = (imc) => {
  const classificacoes = [
    { limite: 18.5, texto: "Abaixo do peso" },
    { limite: 24.9, texto: "Peso normal" },
    { limite: 29.9, texto: "Sobrepeso" },
    { limite: 34.9, texto: "Obesidade grau 1" },
    { limite: 39.9, texto: "Obesidade grau 2" },
    { limite: Infinity, texto: "Obesidade grau 3" }
  ];

  // find() → programação funcional
  return classificacoes.find(item => imc <= item.limite).texto;
};
