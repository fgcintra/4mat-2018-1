import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Produto {
  public descricao: String;
  public marca?: String; // ? == opcional
  public cod_barras?: String;
  public quantidade: Number;
  public data_validade?: Date;
  public categoria: String;
}

@Injectable()
export class ProdutoService {

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get('http://localhost:3000/produto');
  }

  obterUm(id: String) {
    return this.http.get('http://localhost:3000/produto/' + id);
  }

  salvar(produto) {
    if (produto._id) {
      return this.http.post('http://localhost:3000/produto/' + produto._id,        produto);
    }
  }

}
