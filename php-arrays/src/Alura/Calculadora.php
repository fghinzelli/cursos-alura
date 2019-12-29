<?php

namespace Alura;

class Calculadora {
    public function calculaMedia(array $notas): ?float
    {
        $qtdNotas = sizeof($notas);
        if ($qtdNotas > 0) {
            $total = 0;
            for ($i = 0; $i<$qtdNotas; $i++) {
                $total += $notas[$i];
            }

            return $total / $qtdNotas;
        } else {
            return null;
        }
        
         
    }
}