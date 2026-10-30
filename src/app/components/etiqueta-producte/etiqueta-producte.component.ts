
import { Component, Input } from '@angular/core';
import { CategoriaProducte } from '../../models/producte.model';

@Component({
  selector: 'app-etiqueta-producte',
  imports: [],
  templateUrl: './etiqueta-producte.component.html',
  styleUrl: './etiqueta-producte.component.scss',
})
export class EtiquetaProducte {
  @Input({ required: true }) categoria!: CategoriaProducte;
  @Input() destacat: boolean = false;
}
