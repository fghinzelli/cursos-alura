import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: '',
    conteudo: 'Aprendendo Angular',
    autoria: 'Fulano de Tal',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert('Click')
  }

  cancelar() {
    alert('Cancelar')
  }
}
