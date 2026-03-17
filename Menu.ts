import readlinesync = require('readline-sync'); 
import { colors } from './src/util/Colors'; 

export function main() {
    let opcao: number;

    while (true) {
        // Estilização conforme o enunciado (Item 78)
        console.log(colors.bg.black, colors.fg.whitestrong, "*****************************************************");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        // Entrada de dados (Item 102)
        opcao = readlinesync.questionInt("Entre com a opcao desejada: "); 

        if (opcao === 9) {
            console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!\n", colors.reset);
            process.exit(0);
        }

        switch (opcao) {
            case 1: console.log("\nCriar Conta\n"); break;
            case 2: console.log("\nListar todas as Contas\n"); break;
            case 3: console.log("\nBuscar Conta por Numero\n"); break;
            case 4: console.log("\nAtualizar Dados da Conta\n"); break;
            case 5: console.log("\nApagar Conta\n"); break;
            case 6: console.log("\nSacar\n"); break;
            case 7: console.log("\nDepositar\n"); break;
            case 8: console.log("\nTransferir valores entre Contas\n"); break;
            default: console.log("\nOpção Inválida!\n"); break;
        }
    }
}
main();