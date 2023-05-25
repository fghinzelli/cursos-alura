import javax.swing.plaf.synth.SynthTextAreaUI;

public class Main {
    public static void main(String[] args) {
        System.out.println("Esse é o Screen Match");
        System.out.println("Filme: Top Gun: Maverick");
        int anoDeLancamento = 2022;
        System.out.println("Ano de lançamento: " + anoDeLancamento);
        boolean incluidoNoPlano = true;
        double nodaDoFilme = 8.1;

        String sinopse;
        sinopse = """
            Filme Top Gun
            Filme de aventura com galã dos anos 80
            Muito bom!
            Ano de laçamento:
        """ + anoDeLancamento;
        System.out.println(sinopse);
        // Media calculada pelas tres notas
        double media = (9.8 + 6.3 + 8.0) / 3;

        int classificacao;
        classificacao = (int) media / 2 ;
        System.out.println(classificacao);
    }
}