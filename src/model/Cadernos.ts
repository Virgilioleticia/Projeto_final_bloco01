import { Produto } from "./Produto";

export class Cadernos extends Produto{

    private _cadernos: string;

	constructor(id: number, nome: string, tipo: number, preco: number, Cadernos: string) {
        super(id, nome, tipo, preco);
		this._cadernos = Cadernos;
	}

	public get Cadernos(): string {
		return this._cadernos;
	}

	public set Cadernos(value: string) {
		this._cadernos = value;
	}
    
    public visualizar(): void {
        console.log(`\nCadernos: ${this._cadernos}`);
    }

}