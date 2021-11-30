import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(credenciais: CredenciaisDTO): Observable<CredenciaisDTO>{
    return this.http.post<CredenciaisDTO>('https://projetocleanenergy.herokuapp.com/usuarios/logar', credenciais)
  }

  cadastrar(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>('https://projetocleanenergy.herokuapp.com/usuarios/salvar', usuario)
  }

  getAllUsuario(): Observable<CredenciaisDTO[]> {
    return this.http.get<CredenciaisDTO[]> ('https://projetocleanenergy.herokuapp.com/usuarios')
  }

  getByIdUsuarios(id: number): Observable<CredenciaisDTO>{
    return this.http.get<CredenciaisDTO>(`https://projetocleanenergy.herokuapp.com/usuarios/${id}`)
  }

  getByNomeUsuarios(nome: string): Observable<CredenciaisDTO[]> {
    return this.http.get<CredenciaisDTO[]>(`https://projetocleanenergy.herokuapp.com/usuarios/nome/${nome}`)
  }

  putUsuario(usuario:UsuarioModel): Observable<CredenciaisDTO>{
    return this.http.put<CredenciaisDTO>('https://projetocleanenergy.herokuapp.com/usuarios',usuario)
  }

  deleteUsuario(id:number){
    return this.http.delete(`https://projetocleanenergy.herokuapp.com/usuarios/${id}`)
  }


  logado(){
    let ok = false
  
    if(environment.token !=''){
      ok= true
    }
    return ok
  }

  deslogado(){
    let ok : boolean = false

    if(environment.token == ''){
      ok= true
    }
    return ok
  }

  adm(){
    let ok: boolean = false;
    if (environment.tipo == 'adm'){
      ok = true;
    }
    return ok;
  }

normal(){
    let ok: boolean = false;
    if (environment.tipo == ''){
      ok = true;
    }
    return ok;
  }

sair(){
  environment.token = ''
  environment.nome = ''
  environment.email = ''
  environment.senha = ''
  environment.idUsuario = 0
  environment.tipo = ''

}





}
