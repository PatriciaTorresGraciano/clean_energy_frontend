import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CredenciaisDTO } from 'src/app/model/CredenciaisDTO';
import { UsuarioModel } from 'src/app/model/UsuarioModel';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {


  confirmarSenha: string
  usuario: CredenciaisDTO = new CredenciaisDTO
  listaUsuarios :CredenciaisDTO[]
  idUser: number

  constructor(

    private authService: AuthService,
    private route: ActivatedRoute,
    private router : Router,
    private alert: AlertService
  ) { }

  ngOnInit()
   {
     console.log(this.idUser)
    window.scroll(0,0)
    this.authService.refreshToken()

    // let id = this.route.snapshot.params['id']
    // this.findByIdUsuario(id)
    this.idUser = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUser)
    this.getAllUsuarios()

    
    
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
    }

    getAllUsuarios(){
      this.authService.getAllUsuario().subscribe((resp: CredenciaisDTO[]) => {
        this.listaUsuarios = resp
      })
    }

    findByIdUsuario(id: number){
      
      
      this.authService.getByIdUsuarios(id).subscribe((resp : CredenciaisDTO) => {
        this.usuario = resp
      })
    
    }

    





























}
