import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueRequestsComponent } from './issue-requests.component';

describe('IssueRequestsComponent', () => {
  let component: IssueRequestsComponent;
  let fixture: ComponentFixture<IssueRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
