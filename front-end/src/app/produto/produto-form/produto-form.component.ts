import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
  providers: [ProdutoService]
})
export class ProdutoFormComponent implements OnInit {

  public produto: Produto = new Produto();

  constructor(
    private ps: ProdutoService,
    private router: Router,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    // Acessa os parâmetros da url
    this.ar.params.subscribe(
      params => { // params = coleção de parâmetros passados
        // Se existir um parâmetro chamado id, envia-o para o serviço
        // para obter os dados referentes a esse id
        if (params['id']) {
          this.ps.obterUm(params['id']).subscribe(
            (dados: Produto) => this.produto = dados,
            erro => console.error(erro)
          );
        }
      }
    );

  }

}
