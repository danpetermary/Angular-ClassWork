import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotelistviewComponent } from './notelistview.component';

describe('NotelistviewComponent', () => {
  let component: NotelistviewComponent;
  let fixture: ComponentFixture<NotelistviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotelistviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotelistviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
