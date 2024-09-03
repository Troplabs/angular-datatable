import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDatatableComponent } from './angular-datatable.component';

describe('AngularDatatableComponent', () => {
  let component: AngularDatatableComponent;
  let fixture: ComponentFixture<AngularDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
