import java.util.Scanner;

public class ContaBancaria {
    private String nomeCliente;
    private String tipoConta;
    private double saldo;

    public ContaBancaria(String nome, String tipoConta, double saldo) {
        this.nomeCliente = nome;
        this.tipoConta = tipoConta;
        this.saldo = saldo;
    }
    public static void main(String[] args) {
        ContaBancaria conta = new ContaBancaria("Fernando", "Corrente", 2500);
        conta.exibeDadosConta();
        Scanner leitura = new Scanner(System.in);
        int opcao = 0;
        double valorTransacao = 0;

        while(opcao != 4) {
            conta.exibeMenu();
            opcao = leitura.nextInt();
            switch (opcao) {
                case 1:
                    conta.exibirSaldo();
                    break;
                case 2:
                    System.out.println("Informe o valor a receber:");
                    valorTransacao = leitura.nextDouble();
                    conta.depositar(valorTransacao);
                    conta.exibirSaldo();
                    break;
                case 3:
                    System.out.println("Informe o valor a transferir:");
                    valorTransacao = leitura.nextDouble();
                    conta.sacar(valorTransacao);
                    conta.exibirSaldo();
                    break;
                case 4:
                    break;
                default:
                    System.out.println("Opção inválida");
                    break;
            }
        }
    }

    public void exibeDadosConta() {
        System.out.println("*********************************");
        System.out.println("Dados iniciais do cliente:");
        System.out.println("Nome:          " + this.nomeCliente);
        System.out.println("Tipo conta:    " + this.tipoConta);
        System.out.println("Saldo inicial: R$ " + this.saldo);
        System.out.println("*********************************");
    }

    public void exibeMenu() {
        System.out.println("""
        Operações
        1-Consultar saldos
        2-Receber valor
        3-Transferir valor
        4-Sair
        
        Digite a opção desejada:    
        """);
    }

    private void sacar (double valor) {
        if (valor > this.saldo) {
            System.out.println("Não há saldo suficiente para fazer essa transferência.");
        } else {
            this.saldo -= valor;
        }
    }

    private void depositar (double valor) {
        this.saldo += valor;
    }

    private void exibirSaldo() {
        System.out.println("O saldo atual é R$ " + this.saldo);
    }
}
