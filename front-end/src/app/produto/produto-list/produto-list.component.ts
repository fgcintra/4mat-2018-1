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

  constructor(private produtoService : ProdutoService) { }

  ngOnInit() {
    this.produtoService.listar().subscribe(
      dados => this.produtos = dados,
      erro => console.log(erro)
    );
  }

}
