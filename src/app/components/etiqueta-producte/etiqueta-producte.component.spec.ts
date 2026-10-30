import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtiquetaProducte } from './etiqueta-producte.component';

describe('EtiquetaProducte', () => {
  let component: EtiquetaProducte;
  let fixture: ComponentFixture<EtiquetaProducte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaProducte],
    }).compileComponents();

    fixture = TestBed.createComponent(EtiquetaProducte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
