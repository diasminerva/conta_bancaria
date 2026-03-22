import { Conta } from "./src/util/model/Conta";

const c1 = new Conta(1, 123, 1, "Minerva Almeida", 1000);
const c2 = new Conta(2, 456, 2, "João Silva", 500);

c1.visualizar();
c2.visualizar();

c1.depositar(200);
c1.sacar(100);
c1.transferir(300, c2);

c1.visualizar();
c2.visualizar();