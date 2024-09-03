import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css',
})
export class HabilidadesComponent {
  habilidadesFrontend = [
    {
      img: '../../../../assets/tecs/angular.png',
      alt: 'Angular Js',
    },
    {
      img: '../../../../assets/tecs/react.png',
      alt: 'React ',
    },
    {
      img: '../../../../assets/tecs/ts.png',
      alt: 'TypeScript',
    },
    {
      img: '../../../../assets/tecs/js.png',
      alt: 'JavaScript',
    },
    {
      img: '../../../../assets/tecs/vue.png',
      alt: 'Vue',
    },
    {
      img: '../../../../assets/tecs/git.png',
      alt: 'Git',
    },
    {
      img: '../../../../assets/tecs/html.png',
      alt: 'Html',
    },
    {
      img: '../../../../assets/tecs/css.png',
      alt: 'Css',
    },
  ];

  habilidadesBackend = [
    {
      img: '../../../../assets/tecs/java.png',
      alt: 'Java',
    },
    {
      img: '../../../../assets/tecs/aws.png',
      alt: 'Aws',
    },
    {
      img: '../../../../assets/tecs/mysql.png',
      alt: 'MySQL',
    },
    {
      img: '../../../../assets/tecs/mongo.png',
      alt: 'MongoDB',
    },
    {
      img: '../../../../assets/tecs/laravel.png',
      alt: 'Laravel',
    },
  ];
}
