import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [ButtonModule, CommonModule, PdfViewerModule],
  templateUrl: './sobre-mi.component.html',
  styleUrl: './sobre-mi.component.css',
})
export class SobreMiComponent {
  hobbies: any[] = [
    {
      img: 'assets/hobbies/programming.png',
    },
    {
      img: 'assets/hobbies/F1.jpg',
    },

    {
      img: 'assets/hobbies/basketball.jpeg',
    },
    {
      img: 'assets/hobbies/futbol.png',
    },
  ];

  esVisibleElResumen = signal(false);
  urlResumen = '../../../../../assets/cv/ADRIAN PERNETT.pdf';

  gestionarVisibilidadDelResumen() {
    this.esVisibleElResumen.update((esVisible) => !esVisible);
  }
}
