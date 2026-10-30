import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaProducte } from './targeta-producte.component';
import { Producte } from '../../models/producte.model';

describe('TargetaProducte', () => {
  let component: TargetaProducte;
  let fixture: ComponentFixture<TargetaProducte>;

  const producteProva: Producte = {
    id: 1,
    nom: 'Teclat',
    descripcio: 'Teclat sense fil',
    categoria: 'Informàtica',
    dataActualitzacio: new Date('2026-10-28'),
    estoc: 10,
    destacat: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaProducte],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaProducte);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('producte', producteProva);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
