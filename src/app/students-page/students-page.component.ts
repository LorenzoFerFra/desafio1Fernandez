import { Component } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {
  aprobado = true; 
  mostrarListado = false;
  students = [{ nombre: 'Mario', aprobado: true },{ nombre: 'Kirby', aprobado: true },{ nombre: 'Dk', aprobado: true },{ nombre: 'Pikachu', aprobado: true }];
  cambioAprobar(){
    this.aprobado = !this.aprobado;
  }
  mostrarNombre(){
    this.aprobado = !this.aprobado;
  }
  cambioAprobar2(){
    this.aprobado = !this.aprobado;
  }
}
