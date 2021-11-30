import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { UsuarioModel } from '../model/UsuarioModel';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel()
  credencial: CredenciaisDTO = new CredenciaisDTO()
  nome = environment.nome
  id = environment.idUsuario
  
  constructor(
    public auth: AuthService,
    private rounter: Router
   
  ) { }

  ngOnInit() {
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
