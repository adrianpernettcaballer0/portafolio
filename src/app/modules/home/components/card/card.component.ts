import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';

export interface BotonCard {
  label: string;
  url: string;
}

export interface Card {
  titulo?: string;
  subtitulo?: string;
  cuerpo?: string;
  imagen?: string;
  items?: string[];
  botones?: BotonCard[];
  sombra?: boolean;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule, ChipModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() titulo?: string = '';
  @Input() subtitulo?: string = '';
  @Input() sombra?: boolean;
  @Input() cuerpo?: string = '';
  @Input() imagen?: string = '';
  @Input() items?: string[] = [];
  @Input() botones?: BotonCard[] = [];

  private _router = inject(Router);

  irA(url: string) {
    this._router.navigate([url]);
  }
}
