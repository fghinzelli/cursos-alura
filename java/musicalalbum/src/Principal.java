import br.com.alura.musicalalbum.calculos.MinhasPreferidas;
import br.com.alura.musicalalbum.modelos.Musica;
import br.com.alura.musicalalbum.modelos.Podcast;

public class Principal {
    public static void main(String[] args) {
        Musica minhaMusica = new Musica();
        minhaMusica.setTitulo("Dia Especial");
        minhaMusica.setCantor("Duca Leindecker");

        for (int i=0; i<3000; i++) {
            minhaMusica.reproduzir();
            if (i % 10 == 0) {
                minhaMusica.curtir();
            }
        }
        System.out.println(
                "Música " + minhaMusica.getTitulo() +
                " | Curtidas: " + minhaMusica.getTotalCurtidas() +
                " | Reproduções: " + minhaMusica.getTotalReproducoes());

        Podcast meuPodCast = new Podcast();
        meuPodCast.setTitulo("Nerdcast");
        meuPodCast.setApresentador("Jovem Nerd");

        for (int i=0; i<5000; i++) {
            meuPodCast.reproduzir();
            if (i % 1000 == 0) {
                meuPodCast.curtir();
            }
        }

        System.out.println(
                "Podcast " + meuPodCast.getTitulo() +
                        " | Curtidas: " + meuPodCast.getTotalCurtidas() +
                        " | Reproduções: " + meuPodCast.getTotalReproducoes());

        MinhasPreferidas minhasPreferidas = new MinhasPreferidas();
        minhasPreferidas.inclui(minhaMusica);
        minhasPreferidas.inclui(meuPodCast);
    }
}