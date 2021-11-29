import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { NovaCategoriaComponent } from './nova-categoria/nova-categoria.component';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { EntrarCadastrarComponent } from './entrar-cadastrar/entrar-cadastrar.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeletComponent } from './delet/categoria-delet/categoria-delet.component';
import { ProdutosUsuarioComponent } from './produtos-usuario/produtos-usuario.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeletComponent } from './delet/produto-delet/produto-delet.component';
import { DetalheCategoriaComponent } from './detalhe-categoria/detalhe-categoria.component';


const routes: Routes = [

    {path: '', redirectTo: 'inicio', pathMatch: 'full'},

    {path: 'nova-categoria', component: NovaCategoriaComponent},
    {path: 'categorias', component: CategoriasComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'novo-produto', component: NovoProdutoComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'inicio', component: InicioComponent },
    {path: 'entrar-cadastrar', component: EntrarCadastrarComponent },
    {path: 'sobre', component: SobreComponent },
    {path: 'categoria-edit/:id', component: CategoriaEditComponent},
    {path: 'categoria-delet/:id', component: CategoriaDeletComponent},
    {path: 'produtos-usuario', component: ProdutosUsuarioComponent},
    {path: 'produto-edit/:id', component: ProdutoEditComponent},
    {path: 'produto-delet/:id', component: ProdutoDeletComponent},
    {path: 'detalhecategoria/:id', component: DetalheCategoriaComponent}
  
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }