import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nomePortal: string; // para tipar uma variavél colocamos o nome e : e o tipo da variavel

  cursos: string[]; 
  

constructor(private cursosService: CursosService) {

  // para fazer referencia a variavél acessamos via this palavra chave que tbm vem do javascript
  this.nomePortal = 'http://loiane.training'; 
  //var servico = new CursosService();
  this.cursos = this.cursosService.getCursos();

}

ngOnInit(): void {
}

}
