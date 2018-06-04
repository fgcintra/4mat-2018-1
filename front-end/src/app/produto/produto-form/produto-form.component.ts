import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from '../produto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../categoria/categoria.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css'],
  providers: [ProdutoService, CategoriaService]
})
export class ProdutoFormComponent implements OnInit {

  public produto: Produto = new Produto();
  public categorias: any = [];

  constructor(
    private ps: ProdutoService,
    private cs: CategoriaService,
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

    this.cs.listar().subscribe(
      dados => this.categorias = dados,
      erro => console.error(erro)
    );

  }

  enviar(form) {
    if (form.valid) {
      this.ps.salvar(this.produto).subscribe(
        dados => alert('Dados salvos com sucesso.'),
        erro => {
          alert('Ocorreu um erro:\n ' + erro);
          console.log(erro);
        }
      );
    }
  }

}
