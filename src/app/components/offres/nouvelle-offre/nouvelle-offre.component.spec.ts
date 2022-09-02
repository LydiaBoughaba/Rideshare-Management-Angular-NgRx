import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleOffreComponent } from './nouvelle-offre.component';

describe('NouvelleOffreComponent', () => {
  let component: NouvelleOffreComponent;
  let fixture: ComponentFixture<NouvelleOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
