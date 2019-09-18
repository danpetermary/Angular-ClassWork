import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoteopenerComponent } from './editnoteopener.component';

describe('EditnoteopenerComponent', () => {
  let component: EditnoteopenerComponent;
  let fixture: ComponentFixture<EditnoteopenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditnoteopenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditnoteopenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
