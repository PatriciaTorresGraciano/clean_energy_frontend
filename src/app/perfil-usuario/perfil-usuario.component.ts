import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioModel } from '../model/UsuarioModel';
import { PerfilUsuarioService } from '../service/perfil-usuario.service';


@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel()

  constructor(
    private router: Router,
    private perfilService: PerfilUsuarioService

  ) {}

  ngOnInit(){
    if (environment.token == ''){
      this.router.navigate(['/entrar-cadastrar'])
    }
  }
  
}
