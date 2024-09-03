import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, AvatarModule, CardModule, MenuModule, ButtonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  items: MenuItem[] = [
    {
      label: 'Menu',
      items: [
        {
          label: 'Sobre mi',
          icon: 'pi pi-user',
          command: () => {
            this.irAlFragmento('/home/sobre-mi', 'inicio');
          },
        },
        {
          label: 'Educación',
          icon: 'pi pi-briefcase',
          command: () => {
            this.irAlFragmento('/home/educacion', 'inicio');
          },
        },
        {
          label: 'Habilidades',
          icon: 'pi pi-sitemap',
          command: () => {
            this.irAlFragmento('/home/habilidades', 'inicio');
          },
        },
        {
          label: 'Portafolio',
          icon: 'pi pi-file-o',
          command: () => {
            this.irAlFragmento('/home/portafolio', 'inicio');
          },
        },
        {
          label: 'Contactame',
          icon: 'pi pi-envelope',
          command: () => {
            this.irAlFragmento('/home/contactame', 'inicio');
          },
        },
      ],
    },
  ];

  constructor(private themeService: ThemeService, private router: Router) {}

  get thema() {
    return this.themeService.$thema();
  }

  irAlFragmento(route: string, fragmento: string) {
    this.router.navigate([route], { fragment: fragmento }).then(() => {
      const element = document.getElementById(fragmento);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  cambiarTema() {
    this.themeService.switchThema();
  }
}
