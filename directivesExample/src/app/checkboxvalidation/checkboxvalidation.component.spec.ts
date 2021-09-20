import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxvalidationComponent } from './checkboxvalidation.component';

describe('CheckboxvalidationComponent', () => {
  let component: CheckboxvalidationComponent;
  let fixture: ComponentFixture<CheckboxvalidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxvalidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
