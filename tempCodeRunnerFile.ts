import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { Canetas } from "./src/model/Canetas";
import { Cadernos } from "./src/model/Cadernos";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, tiposDeCanetas, capas: string;
    let tipoProduto = [ 'Canetas', 'Cadernos'];

    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Canetas(produtoController.gerarId(),
        "Caneta Ponta Fina", 1, 15.00, "Caneta esferografica 1,5 ml "));

    produtoController.cadastrar(new Cadernos(produtoController.gerarId(),
        "Caderno 30 folhas", 1, 22.00, "Capa do Homem Aranha"));


    while (true) {

        console.log(colors.bg.crimson, colors.fg.pink, 
                "---------------------------------------------------------");
        console.log("                                                     ");
        console.log("                 PAPELARIA GEN                       ");
        console.log("                                                     ");
        console.log("-----------------------------------------------------");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Buscar Produto por Id                ");
        console.log("            4 - Atualizar Dados do Produto           ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("-----------------------------------------------------");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.crimson, "\nPAPELARIA GEN");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }
    

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Produto\n\n", colors.reset);

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");
                
                switch (tipo) {
                    case 1:
                        tiposDeCanetas = readlinesync.question("Digite o tipo de caneta: ");
                        produtoController.cadastrar(new Canetas(produtoController.gerarId(),
                            nome, tipo, preco, tiposDeCanetas));
                        break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nListar todos os Produtos\n\n", colors.reset);
                capas = readlinesync.question("Escreva o nome da capa desejada: ");
                        produtoController.cadastrar(new Cadernos(produtoController.gerarId(),
                            nome, tipo, preco, capas));
                        break;
                }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                produtoController.listarTodas();

                keyPress()
                break;

            case 3:
                console.log(colors.fg.whitestrong, "\n\nBuscar Produto por Id\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar Dados do Produto\n\n", colors.reset);

                id = readlinesync.questionInt("Digite o Id do Produto: ");

                let produto = produtoController.buscarNoArray(id);

                if (produto !== null) {

                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    tipo = produto.tipo;

                    preco = readlinesync.questionFloat("Digite o preco: ");

                    switch (tipo) {
                        case 1:
                            tiposDeCanetas = readlinesync.question("Digite o tipo de caneta: ");
                            produtoController.atualizar(new Canetas(id,
                                nome, tipo, preco, tiposDeCanetas));
                            break;
                        case 2:
                            capas = readlinesync.question("Escreva o nome da capa desejada: ");
                            produtoController.atualizar(new Canetas(id,
                                nome, tipo, preco, capas));
                            break;
                    }
                }
        
                case 5: 
                        console.log(colors.fg.whitestrong, "\n\nApagar um Produto\n\n", colors.reset);
        
                        id = readlinesync.questionInt("Digite o Id do Produto: ");
                        produtoController.deletar(id);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, "\n\nSair\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }
 }

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n----------------------------------------------");
    console.log("Projeto Desenvolvido por: Letícia Virgilio");
    console.log("Generation Brasil - virgilioleticiao240902@gmail.com");
    console.log("https://github.com/Virgilioleticia");
    console.log("------------------------------------------------");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();

