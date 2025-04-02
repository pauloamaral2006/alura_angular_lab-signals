import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  standalone: false,
  templateUrl: './click-counter.component.html',
  styleUrl: './click-counter.component.css',
})
export class ClickCounterComponent {
  moleculeCount = signal(0);

  reactionStatus = computed(() => {
    const count = this.moleculeCount();
    if (count === 0) {
      return 'Reação inativa. Adicione moléculas para iniciar a reação!';
    } else if (count < 5) {
      return 'Reação iniciada. Continue adicionando moléculas!';
    } else if (count < 10) {
      return 'A reação está em pleno andamento!';
    } else {
      return 'Reação completa! Nenhuma molécula adicional é necessária.';
    }
  });

  addMolecule() {
    this.moleculeCount.set(this.moleculeCount() + 1);
  }
}
