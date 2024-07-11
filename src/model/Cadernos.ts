import { Produto } from "./Produto";

export class Cadernos extends Produto{

    private _capas: string;

	constructor(id: number, nome: string, tipo: number, preco: number, Cadernos: string) {
        super(id, nome, tipo, preco);
		this._capas = Cadernos;
	}

	public get Cadernos(): string {
		return this._capas;
	}

	public set Cadernos(value: string) {
		this._capas = value;
	}
    
    public visualizar(): void {
        console.log(`\nCapas: ${this._capas}`);
    }

}