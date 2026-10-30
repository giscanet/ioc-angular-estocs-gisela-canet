import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriaProducte } from '../../models/producte.model';

export interface FiltresProducte {
  text: string;
  categoria: CategoriaProducte | 'Totes';
}

@Component({
  selector: 'app-filtres-productes',
  imports: [FormsModule],
  templateUrl: './filtres-productes.component.html',
  styleUrl: './filtres-productes.component.scss',
})
export class FiltresProductes {
  @Output() filtresCanviats = new EventEmitter<FiltresProducte>();

  categories: Array<CategoriaProducte | 'Totes'> = [
    'Totes',
    'Alimentació',
    'Neteja',
    'Informàtica',
  ];

  filtres: FiltresProducte = {
    text: '',
    categoria: 'Totes',
  };

  aplicaFiltres(): void {
    this.filtresCanviats.emit({ ...this.filtres });
  }

  restableixFiltres(): void {
    this.filtres = { text: '', categoria: 'Totes' };
    this.aplicaFiltres();
  }
}
