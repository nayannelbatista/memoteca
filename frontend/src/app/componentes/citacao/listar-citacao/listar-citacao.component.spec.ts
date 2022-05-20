import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCitacaoComponent } from './listar-citacao.component';

describe('ListarCitacaoComponent', () => {
  let component: ListarCitacaoComponent;
  let fixture: ComponentFixture<ListarCitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
