import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-item-counter',
  standalone: false,
  templateUrl: './item-counter.component.html',
  styleUrl: './item-counter.component.css',
})
export class ItemCounterComponent {
  availableItems = [
    'Ácido Clorídrico (HCl)',
    'Hidróxido de Sódio (NaOH)',
    'Sulfato de Cobre (CuSO₄)',
    'Peróxido de Hidrogênio (H₂O₂)',
    'Ácido Sulfúrico (H₂SO₄)',
    'Etanol (C₂H₆O)',
    'Acetona (C₃H₆O)',
  ];

  items = signal<string[]>([]);

  totalItems = computed(() => this.items().length);

  addItem(item: string) {
    this.items.set([...this.items(), item]);
  }
}
