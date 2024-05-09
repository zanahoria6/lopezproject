import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrozComponent } from './arroz.component';

describe('ArrozComponent', () => {
  let component: ArrozComponent;
  let fixture: ComponentFixture<ArrozComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrozComponent]
    });
    fixture = TestBed.createComponent(ArrozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
