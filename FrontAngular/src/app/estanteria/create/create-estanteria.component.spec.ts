import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEstanteriaComponent } from './create-estanteria.component';

describe('CreateEstanteriaComponent', () => {
  let component: CreateEstanteriaComponent;
  let fixture: ComponentFixture<CreateEstanteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEstanteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEstanteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
