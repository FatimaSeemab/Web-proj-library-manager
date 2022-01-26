import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierviewComponent } from './supplierview.component';

describe('SupplierviewComponent', () => {
  let component: SupplierviewComponent;
  let fixture: ComponentFixture<SupplierviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
