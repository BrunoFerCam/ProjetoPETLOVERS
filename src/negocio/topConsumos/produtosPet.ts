import Listagem from "../listar/listagem";
import Pet from "../../modelo/pet";

export default class MaioresConsumosPet extends Listagem {
    private pets: Array<Pet>;
    
    constructor(pets: Array<Pet>) {
        super();
        this.pets = pets;
    }
    
    public listar(): void {
        console.log(`\nRanking de Tipos, Raças e Gêneros:`);
        
        const raceCountMap = new Map<string, number>();
        this.pets.forEach(pet => {
            const count = raceCountMap.get(pet.raca) || 0;
            raceCountMap.set(pet.raca, count + 1);
        });
        
        const sortedRaces = Array.from(raceCountMap.entries()).sort((a, b) => b[1] - a[1]);
        
        console.log("Raças:");
        sortedRaces.slice(0, 5).forEach(([race, count]) => {
            console.log(`Raça: ${race}, Quantidade: ${count}`);
        });
        
        const typeCountMap = new Map<string, number>();
        this.pets.forEach(pet => {
            const count = typeCountMap.get(pet.tipo) || 0;
            typeCountMap.set(pet.tipo, count + 1);
        });
        

        const sortedTypes = Array.from(typeCountMap.entries()).sort((a, b) => b[1] - a[1]);
        
        console.log("Gêneros:");
        sortedTypes.slice(0, 5).forEach(([type, count]) => {
            console.log(`Gênero: ${type}, Quantidade: ${count}`);
        });
        const genderCountMap = new Map<string, number>();
        this.pets.forEach(pet => {
            const count = genderCountMap.get(pet.genero) || 0;
            genderCountMap.set(pet.genero, count + 1);
        });

        const sortedGenders = Array.from(genderCountMap.entries()).sort((a, b) => b[1] - a[1]);

        console.log("Tipos:");
        sortedGenders.slice(0, 5).forEach(([gender, count]) => {
            console.log(`Tipo: ${gender}, Quantidade: ${count}`);
        });
        console.log(`\n`);
    }
}
