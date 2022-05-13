import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCitacaoComponent } from './cadastrar-citacao.component';

describe('CadastrarCitacaoComponent', () => {
  let component: CadastrarCitacaoComponent;
  let fixture: ComponentFixture<CadastrarCitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
