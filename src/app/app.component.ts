import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PRODUCTES } from './data/productes.mock';
import { Producte } from './models/producte.model';
import { LlistaProductes } from './components/llista-productes/llista-productes.component';
import {
  FiltresProductes,
  FiltresProducte,
} from './components/filtres-productes/filtres-productes.component';

@Component({
  imports: [RouterOutlet, LlistaProductes, FiltresProductes],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  public appName = "Gestor d'estocs";

  productes: Producte[] = PRODUCTES;
  productesFiltrats: Producte[] = PRODUCTES;
  producteSeleccionat?: Producte;

  aplicaFiltres(filtres: FiltresProducte): void {
    const text = filtres.text.trim().toLocaleLowerCase('ca');

    this.productesFiltrats = this.productes.filter((producte) => {
      const coincideixCategoria =
        filtres.categoria === 'Totes' || producte.categoria === filtres.categoria;

      const contingut = `${producte.nom} ${producte.descripcio}`.toLocaleLowerCase('ca');

      const coincideixText = text === '' || contingut.includes(text);

      return coincideixCategoria && coincideixText;
    });

    if (
      this.producteSeleccionat &&
      !this.productesFiltrats.some((producte) => producte.id === this.producteSeleccionat?.id)
    ) {
      this.producteSeleccionat = undefined;
    }
  }

  seleccionaProducte(producte: Producte): void {
    this.producteSeleccionat = producte;
  }
}
