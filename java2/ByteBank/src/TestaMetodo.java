
public class TestaMetodo {
	public static void main (String[] args) {
		Conta conta1 = new Conta(200, 121314);
		conta1.deposita(1000);
		conta1.deposita(500);
		System.out.println(conta1.getSaldo());
		boolean retorno = conta1.saca(2000);
		System.out.println(retorno);
		
		Conta contaDaMarcela = new Conta(300, 12345); 
		contaDaMarcela.deposita(1000);
		
		Cliente fernando = new Cliente();
		fernando.setNome("Fernando");
		fernando.setCpf("132467879-14");
		fernando.setProfissao("Programador");
		conta1.setTitular(fernando);
		contaDaMarcela.tranfere(500, conta1);
		System.out.println(conta1.getTitular().getNome());
		System.out.println("Saldo da conta 1: " + conta1.getSaldo());
		System.out.println("Saldo da conta Marcela: " + contaDaMarcela.getSaldo());
		
		
	}
}
