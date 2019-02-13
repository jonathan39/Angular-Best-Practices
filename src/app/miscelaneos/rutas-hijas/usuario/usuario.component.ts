import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private _router: ActivatedRoute) {
    console.log('Ruta Padre');
    this._router.params.subscribe(parametros => {
      console.log(parametros);
    });
  }

  ngOnInit() {
  }

}
