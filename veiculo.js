class Veiculo{
  constructor(marca, ano) {
      this._marca = marca;
      this._ano = ano;
  }
  getDescricao(){
      return (console.log("Esta é a marca do carro: " + this._marca + ", Este é o ano do carro: " + this._ano))
  }

  set(novaMarca){
      this._marca = novaMarca
  }

  set(novoAno){
     this._ano = novoAno
 }
}


module.exports = Veiculo