import { Component } from '@angular/core';
import { Elemento, ElementoService } from '../elemento.service';

@Component({
  selector: 'app-computed-signal',
  standalone: false,
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css',
})
export class ComputedSignalComponent {
  elementos: Elemento[];

  constructor(public elementoService: ElementoService) {
    this.elementos = this.elementoService.elementos;
  }

  selecionarElemento1(elemento: Elemento) {
    this.elementoService.elementoSelecionado1.set(elemento);
  }
  selecionarElemento2(elemento: Elemento) {
    this.elementoService.elementoSelecionado2.set(elemento);
  }
  elementoSelecionado1() {
    return this.elementoService.elementoSelecionado1();
  }
  elementoSelecionado2() {
    return this.elementoService.elementoSelecionado2();
  }

  massaAtomicaTotal() {
    return this.elementoService.massaAtomicaTotal();
  }
}
