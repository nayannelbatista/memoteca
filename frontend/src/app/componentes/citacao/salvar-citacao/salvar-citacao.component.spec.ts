import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarCitacaoComponent } from './salvar-citacao.component';

describe('SalvarCitacaoComponent', () => {
  let component: SalvarCitacaoComponent;
  let fixture: ComponentFixture<SalvarCitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarCitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarCitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
