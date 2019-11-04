<?php 
    namespace classes\sistemaInterno;
    use classes\abstratas\Funcionario;
                
    class GerenciadorBonificacao {
        private $totalBonificacoes;
        
        public function registrar(Funcionario $funcionario) {
            $this->totalBonificacoes += $funcionario->getBonificacao();
        }
        
        public function getTotalBonificacoes() {
            return $this->totalBonificacoes;
        }
    }
?>