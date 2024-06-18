import Entrada from "../../io/entrada";
import Pet from "../../modelo/pet";
import Deleta from "./deletar";

export default class DeletaCliente extends Deleta {
    private pets: Array<Pet>
    private entrada: Entrada

    constructor(pets: Array<Pet>) {
        super()
        this.entrada = new Entrada
        this.pets = pets
    }
    public deletar(){
        let nomePet = this.entrada.entTexto("Digite o nome do pet que deseja deletar: ")
        const index = this.pets.findIndex(pet => pet.getNome === nomePet)
        if (index !== -1){
            this.pets.splice(index, 1)
            console.log("Pet deletado com sucesso!")
        } else {
            console.log("Pet não encontrado!")
        }
    }
}