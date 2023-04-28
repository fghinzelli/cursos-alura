import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Segundo',
      autoria: 'Moacyr Scliar',
      modelo: 'modelo2',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
