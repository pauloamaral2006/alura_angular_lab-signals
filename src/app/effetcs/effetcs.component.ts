import { Component, effect, signal } from '@angular/core';
import { Elemento, ElementoService } from '../elemento.service';

@Component({
  selector: 'app-effetcs',
  standalone: false,
  templateUrl: './effetcs.component.html',
  styleUrls: ['./effetcs.component.css'],
})
export class EffetcsComponent {
  constructor(public elementoService: ElementoService) {}

  selecionarElemento(elemento: Elemento) {
    this.elementoService.elementoSelecionado.set(elemento);
  }

  ajustarTemperatura(novaTemperatura: number) {
    this.elementoService.temperatura.set(novaTemperatura);
  }
}
