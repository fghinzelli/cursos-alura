import java.util.Random;
import java.util.Scanner;

public class Adivinhacao {
    public static void main(String[] args) {
        int aleatorio = new Random().nextInt(100);

        Scanner leitura = new Scanner(System.in);
        int resposta = 0;
        int tentativas = 0;

        System.out.println("Digite um número de 0 a 100:");
        while (tentativas < 5) {
            resposta = leitura.nextInt();
            if (resposta == aleatorio) {
                System.out.println("Parabéns, você acertou!");
                break;
            } else {
                System.out.println("Errou! Restam " + (4 - tentativas) + " tentativas");
            }
            tentativas++;
        }
        System.out.println("Fim do jogo");
    }
}
