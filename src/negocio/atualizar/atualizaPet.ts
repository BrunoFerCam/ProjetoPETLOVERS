import Entrada from "../../io/entrada"
import Pet from "../../modelo/pet"
import Atualizar from "./atualizar"

export default class AtualizaPet extends Atualizar {
    private pets: Array<Pet>
    private entrada: Entrada
    constructor(pets: Array<Pet>) {
        super()
        this.pets = pets
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        console.log(`\nInício da atualização do pet`);
        let nome = this.entrada.entTexto(`Por favor informe o novo nome do pet: `)
        let especie = this.entrada.entTexto(`Por favor informe a nova espécie do pet: `)
        let raca = this.entrada.entTexto(`Por favor informe a nova raça do pet: `);
        let idade = this.entrada.entTexto(`Por favor informe a nova idade do pet: `);
        let pet = new Pet(nome, especie, idade, raca);
        this.pets[0] = pet;
        console.log(`\nAtualização concluída.\n`);
    }
}
