import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movil2Page } from './movil2.page';

describe('Movil2Page', () => {
  let component: Movil2Page;
  let fixture: ComponentFixture<Movil2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Movil2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
