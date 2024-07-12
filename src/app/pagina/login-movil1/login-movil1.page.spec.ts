import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginMovil1Page } from './login-movil1.page';

describe('LoginMovil1Page', () => {
  let component: LoginMovil1Page;
  let fixture: ComponentFixture<LoginMovil1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMovil1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
