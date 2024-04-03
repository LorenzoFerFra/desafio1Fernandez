import { Component } from '@angular/core';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrl: './students-page.component.scss'
})
export class StudentsPageComponent {
  aprobado = true; 
  estudiante = [{ nombre: 'Mario', aprobado: true }];
  cambioAprobar(){
    this.aprobado = !this.aprobado;
  }
  
}
