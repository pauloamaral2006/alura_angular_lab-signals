import { Component, signal, effect } from '@angular/core';

interface Elemento {
  nome: string;
  simbolo: string;
  numeroAtomico: number;
}

@Component({
  selector: 'app-effects-demo',
  standalone: false,
  templateUrl: './effects-demo.component.html',
  styleUrls: ['./effects-demo.component.css'],
})
export class EffectsDemoComponent {
  elementoSelecionado = signal<Elemento | null>(null);

  elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1 },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8 },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11 },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17 },
  ];

  constructor() {
    effect(() => {
      const elemento = this.elementoSelecionado();
      if (elemento) {
        console.log(
          `Elemento selecionado: ${elemento.nome} (${elemento.simbolo})`
        );
      }
    });
  }

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }
}
