import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaModel } from '../model/CategoriaModel';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }


  getAllCategoria(): Observable<CategoriaModel[]>{
  return this.http.get<CategoriaModel[]>('https://projetocleanenergy.herokuapp.com/categorias', this.token)
  }
  
  getByIdCategoria(id: number): Observable <CategoriaModel>{
    return this.http.get<CategoriaModel>(`https://projetocleanenergy.herokuapp.com/categorias/id/${id}`, this.token)
      }

  getByNameCategoria(nome: string): Observable <CategoriaModel>{
    return this.http.get<CategoriaModel>(`https://projetocleanenergy.herokuapp.com/categorias/nome/${nome}`, this.token)
          }

  postCategoria(categoria: CategoriaModel): Observable<CategoriaModel> {
    return this.http.post<CategoriaModel>('https://projetocleanenergy.herokuapp.com/categorias', categoria, this.token)

  }

  putCategoria(categoria: CategoriaModel): Observable<CategoriaModel>{
    return this.http.put<CategoriaModel>('https://projetocleanenergy.herokuapp.com/categorias', categoria, this.token)
  }

  deleteCategoria(id:number){
    return this.http.delete(`https://projetocleanenergy.herokuapp.com/categorias/id/${id}`, this.token)
  }
}

