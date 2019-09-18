import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotegridviewComponent } from './notegridview.component';

describe('NotegridviewComponent', () => {
  let component: NotegridviewComponent;
  let fixture: ComponentFixture<NotegridviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotegridviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotegridviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
