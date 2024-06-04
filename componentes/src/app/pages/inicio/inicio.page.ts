import { Component, OnInit } from '@angular/core';

//crear una interface para definir propiedades que el componente lista a tenerr

interface Componente  {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  //crear un nuevo listado
  //componentes: any[] = [];

  componentes: Componente[] = [
    {
      icon: 'heart-half-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'extension-puzzle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'calendar-number-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'people-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'book-outline',
      name: 'Input',
      redirectTo: '/input'
    }


    //aca se crea un listado que se implemento en el inicio.page.html 
    //se crea un array donde estaran las paginas con sus rutas, y el icono que se escogio 
  ] 

  //

  constructor() { }

  ngOnInit() {
  }

}
