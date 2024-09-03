import { DOCUMENT } from '@angular/common';
import { effect, Inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  $thema = signal('');

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.inicialiarThema();
    effect(() => {
      localStorage.setItem('thema', this.$thema() ?? '');
    });
  }

  inicialiarThema() {
    switch (localStorage.getItem('thema')) {
      case 'lara-light-blue': {
        this.$thema.set('lara-dark-blue');
        break;
      }
      case 'lara-dark-blue': {
        this.$thema.set('lara-light-blue');
        break;
      }
      default: {
        this.$thema.set('lara-dark-blue');
        break;
      }
    }
    this.switchThema();
  }

  switchThema() {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      this.$thema.update((thema) =>
        thema == 'lara-light-blue' ? 'lara-dark-blue' : 'lara-light-blue'
      );
      themeLink.href = this.$thema() + '.css';
    }
  }
}
