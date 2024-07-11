import { Produto } from "./Produto";

export class Canetas extends Produto{

    private _tiposDeCanetas: string;


	constructor(id: number, nome: string, tipo: number, preco: number, tiposDeCanetas: string) {
        super(id, nome, tipo, preco);
		this._tiposDeCanetas = tiposDeCanetas;
	}

	public get tiposDeCanetas(): string {
		return this._tiposDeCanetas;
	}

	public set tiposDeCanetas(value: string) {
		this._tiposDeCanetas = value;
	}
	

    public visualizar(){
        super.visualizar();
        console.log(`\nCanetas: ${this._tiposDeCanetas}`);
}

}