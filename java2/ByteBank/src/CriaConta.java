
public class CriaConta {
	
	
	public static void main (String[] args) {
		Conta primeiraConta = new Conta(100, 12223);
		primeiraConta.deposita(200);
		
		System.out.println(primeiraConta.getSaldo());
		
		primeiraConta.deposita(100);
		Conta segundaConta = new Conta(120, 4156); 
		System.out.println(primeiraConta.getSaldo());
		System.out.println(Conta.getTotal());
	}
}
