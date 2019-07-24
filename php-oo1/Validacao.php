<?php
    class Validacao {
        public static function protegeAtributo($atributo) {
            if ($atributo == 'titular' || $atributo == 'valor') {
                throw new Exception("O atributo $atributo continua privado ");
            }
        }

        public static function verificaNumerico($valor) {
            if (!is_numeric($valor)) {
                throw new Exception("O tipo passado não é um valor numérico");
            }
    
        }
    }

?>