import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstanteriaComponent } from './form-estanteria.component';

describe('FormEstanteriaComponent', () => {
  let component: FormEstanteriaComponent;
  let fixture: ComponentFixture<FormEstanteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEstanteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstanteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
