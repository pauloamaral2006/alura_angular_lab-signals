import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ElementoService } from '../elemento.service';

@Component({
  selector: 'app-elemento-detathes',
  standalone: false,
  templateUrl: './elemento-detathes.component.html',
  styleUrls: ['./elemento-detathes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElementoDetathesComponent {
  constructor(public elementoService: ElementoService) {}
}
