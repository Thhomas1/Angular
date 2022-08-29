import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosHeaderComponent } from './listados-header.component';

describe('ListadosHeaderComponent', () => {
  let component: ListadosHeaderComponent;
  let fixture: ComponentFixture<ListadosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadosHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
