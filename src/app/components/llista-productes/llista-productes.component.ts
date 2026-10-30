
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producte } from '../../models/producte.model';
import { TargetaProducte } from '../targeta-producte/targeta-producte.component';

@Component({
  selector: 'app-llista-productes',
  imports: [TargetaProducte],
  templateUrl: './llista-productes.component.html',
  styleUrl: './llista-productes.component.scss',
})
export class LlistaProductes {
  @Input({ required: true }) productes: Producte[] = [];
  @Input() producteSeleccionatId?: number;
  @Output() selecciona = new EventEmitter<Producte>();

  propagaSeleccio(producte: Producte): void {
    this.selecciona.emit(producte);
  }
}
