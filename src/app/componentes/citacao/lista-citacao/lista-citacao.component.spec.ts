import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCitacaoComponent } from './lista-citacao.component';

describe('ListaCitacaoComponent', () => {
  let component: ListaCitacaoComponent;
  let fixture: ComponentFixture<ListaCitacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCitacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
