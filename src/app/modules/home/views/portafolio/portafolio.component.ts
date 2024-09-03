import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css',
})
export class PortafolioComponent {
  items = [

    {
      titulo: 'Paises App',
      descripcion:
        'Proyecto realizado para demostrar el de enrutados, consumo de servicios, utilización de Boostrap y más ...',
      img: '../../../../assets/paises.png',
      uri: 'https://jovial-cocada-713eed.netlify.app/',
      skills: [
        'Service',
        'HttpClient',
        'Boostrap',
        'Selectores',
        'Routing',
        'Angular',
        'Boostrap',
      ],
    },
    {
      titulo: 'Encanto store',
      descripcion: 'Simulación de una tienda online',
      img: '../../../../assets/encanto.png',
      uri: 'https://encantostore.netlify.app/',
      skills: ['LazyLoad', 'Bootstrap', 'pipes', 'flex layout'],
    },
    {
      titulo: 'Gif App',
      descripcion:
        'Proyecto realizado para colocar en practica la persistencia de datos en el navegador.',
      img: '../../../../assets/gifs.png',
      uri: 'https://friendly-dusk-9215db.netlify.app/',
      skills: ['Service', 'HttpClient', 'Boostrap', 'LocalStorage'],
    },
    {
      titulo: 'Form App',
      descripcion:
        'Proyecto realizado para la demostración de uso de formularios reactivos en angular, suscripción a eventos, manejo de estados de los mismos y más ...',
      img: '../../../../assets/formApp.png',
      uri: 'https://formappv.netlify.app/',
      skills: ['Boostrap', 'LocalStorage', 'Reactive form'],
    },
    {
      titulo: 'Selectores App',
      descripcion:
        'Proyecto realizado para demostrar el uso de los selectores anidados en angular.',
      img: '../../../../assets/selector.png',
      uri: 'https://majestic-genie-b18583.netlify.app/',
      skills: [
        'Service',
        'HttpClient',
        'Boostrap',
        'Selectores',
        'Reactive Forms',
      ],
    },

  ];
}
