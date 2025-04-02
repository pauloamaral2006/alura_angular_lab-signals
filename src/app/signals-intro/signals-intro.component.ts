import { Component, computed, signal } from '@angular/core';
import { Elemento, ElementoService } from '../elemento.service';

@Component({
  selector: 'app-signals-intro',
  templateUrl: './signals-intro.component.html',
  styleUrls: ['./signals-intro.component.css'],
  standalone: false,
})
export class SignalsIntroComponent {
  constructor(public elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento) {
    this.elementoService.selecionarElemento(elemento);
  }
}
