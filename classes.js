export class IMC {
  constructor(peso, altura) {
    this.peso = peso;
    this.altura = altura;
  }

  calcular() {
    return this.peso / (this.altura * this.altura);
  }
}
