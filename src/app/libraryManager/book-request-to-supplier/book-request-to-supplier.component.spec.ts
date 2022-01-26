import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRequestToSupplierComponent } from './book-request-to-supplier.component';

describe('BookRequestToSupplierComponent', () => {
  let component: BookRequestToSupplierComponent;
  let fixture: ComponentFixture<BookRequestToSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRequestToSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRequestToSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
