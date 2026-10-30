
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Producte } from '../../models/producte.model';
import { EtiquetaProducte } from '../etiqueta-producte/etiqueta-producte.component';

@Component({
  selector: 'app-targeta-producte',
  imports: [DatePipe, EtiquetaProducte],
  templateUrl: './targeta-producte.component.html',
  styleUrl: './targeta-producte.component.scss',
})
export class TargetaProducte {
  @Input({ required: true }) producte!: Producte;
  @Input() seleccionat = false;
  @Output() selecciona = new EventEmitter<Producte>();

  avisaSeleccio(): void {
    this.selecciona.emit(this.producte);
  }
}