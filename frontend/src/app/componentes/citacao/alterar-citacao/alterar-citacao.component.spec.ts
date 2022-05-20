import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarCitacaoComponent } from './alterar-citacao.component';

describe('AlterarCitacaoComponent', () => {
  let component: AlterarCitacaoComponent;
  let fixture: ComponentFixture<AlterarCitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarCitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
