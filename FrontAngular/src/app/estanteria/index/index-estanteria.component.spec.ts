import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexEstanteriaComponent } from './index-estanteria.component';

describe('IndexEstanteriaComponent', () => {
  let component: IndexEstanteriaComponent;
  let fixture: ComponentFixture<IndexEstanteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexEstanteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexEstanteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
