import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
  providers: [ ProdutoService ]
})
export class ProdutoListComponent implements OnInit {

  produtos: any = {};

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.listar().subscribe(
      dados => this.produtos = dados,
      erro => console.log(erro)
    );
  }

  excluir(id: String) {
    if (confirm('Deseja realmente excluir este produto?')) {
      this.produtoService.excluir(id).subscribe(
        () => {
          this.ngOnInit(); // Atualiza a listagem
          alert('Produto excluído com sucesso');
        },
        erro => {
          alert('Não foi possível excluir este produto');
          console.error(erro);
        }
      );
    }
  }

}
