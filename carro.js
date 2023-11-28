
const Veiculo = require("./veiculo")

class Carro extends Veiculo {
     constructor(marca, ano, modelo, portas){
         super(marca, ano)
         this._modelo = modelo;
         this._portas = portas;
     }

     getDescricao(){
         return (console.log(super.getDescricao() + ", Este é o modelo: " + this._modelo + ", E este a quantidade de portas: " + this._portas))
     }

     set(novoModelo){
         this._modelo = novoModelo
     }

     set(novaPortas){
        this._portas = novaPortas
    }
}

let carro1 = new Carro("Fiat", 2012, "Uno", 4)
let carro2 = new Carro("Samsung", 2015, "J1", 2)
let carro3 = new Carro("Samsung", 2022, "M54", 2)
console.log(carro1)
carro1.getDescricao()
console.log(carro2)
carro1.getDescricao()
console.log(carro3)
carro1.getDescricao()
