import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ProdutoModel } from '../model/ProdutoModel';
=======
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';
import { ProdutoModel } from '../model/ProdutoModel';
import { UsuarioModel } from '../model/UsuarioModel';
>>>>>>> b742c86f28872f086f54b65af87674a5eac24071
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

<<<<<<< HEAD
  listaProduto: ProdutoModel[]

  
  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.getAllProdutos()
  }

  getAllProdutos() {
=======
  produto: ProdutoModel = new ProdutoModel()
  listaCategoria: CategoriaModel[]
  listaProduto : ProdutoModel[]
  usuario: UsuarioModel = new UsuarioModel()
  idUsuario = environment.idUsuario
  categoria: CategoriaModel = new CategoriaModel

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
>>>>>>> b742c86f28872f086f54b65af87674a5eac24071
    this.produtoService.getAllProduto().subscribe((resp: ProdutoModel[]) => {
      this.listaProduto = resp
    })
  }






   
}
