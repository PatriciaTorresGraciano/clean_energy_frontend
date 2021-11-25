import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutoModel } from '../model/ProdutoModel';
import { UsuarioModel } from '../model/UsuarioModel';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos-usuario',
  templateUrl: './produtos-usuario.component.html',
  styleUrls: ['./produtos-usuario.component.css']
})
export class ProdutosUsuarioComponent implements OnInit {

  produto: ProdutoModel = new ProdutoModel()
  listaCategoria: CategoriaModel[]
  listaProduto : ProdutoModel[]
  usuario: UsuarioModel = new UsuarioModel()
  idUsuario = environment.idUsuario
  categoria: CategoriaModel = new CategoriaModel
  nomeProduto: string

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
  
    this.categoriaService.refreshToken()
    this.produtoService.refreshToken()

    this.getAllCategoria()
    this.getAllProdutos()
  }

  getAllCategoria() {
    this.categoriaService.getAllCategoria().subscribe((resp: CategoriaModel[]) => {
      this.listaCategoria = resp
    })
  }

  getAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: ProdutoModel[]) => {
      this.listaProduto = resp
    })
  }

  findByNomeProduto() {

    if (this.nomeProduto == '') {
      this.getAllProdutos()
    } else {
      this.produtoService.getByNomeProduto(this.nomeProduto).subscribe((resp: ProdutoModel[]) => {
        this.listaProduto = resp
      })
    }
  }

}