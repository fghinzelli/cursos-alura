package br.com.alura.screenmatch.modelos;

public class Filme {
    public String nome;
    public int anoDeLancamento;
    boolean incluidoNoPlano;
    double avaliacao;
    public double somaDeAvaliacoes;
    private int totalDeAvaliacoes;
    public int duracaoEmMinutos;

    public void exibeFichaTecnica() {
        System.out.println("Nome do filme: " + nome);
        System.out.println("Ano de lançamento: " + anoDeLancamento);
    }

    public void avalia(double nota) {
        somaDeAvaliacoes += nota;
        totalDeAvaliacoes++;
    }

    public double pegaMedia() {
        return somaDeAvaliacoes / totalDeAvaliacoes;
    }

    public double getTotalDeAvaliacoes() {
        return this.totalDeAvaliacoes;
    }
 }
