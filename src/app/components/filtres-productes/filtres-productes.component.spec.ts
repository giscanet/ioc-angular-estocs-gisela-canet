import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltresProductes } from './filtres-productes.component';

describe('FiltresProductes', () => {
  let component: FiltresProductes;
  let fixture: ComponentFixture<FiltresProductes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltresProductes],
    }).compileComponents();

    fixture = TestBed.createComponent(FiltresProductes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
