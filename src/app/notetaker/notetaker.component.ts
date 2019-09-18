import { Component, OnInit } from '@angular/core';
import { Note } from '../mynote';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-notetaker',
  templateUrl: './notetaker.component.html',
  styleUrls: ['./notetaker.component.css']
})
export class NotetakerComponent implements OnInit {
  errMessage :string;
  note : Note;
  notes : Array<Note>=[];
  constructor(private myserveobj : MyhttpService) { }

  ngOnInit() {
    this.note=new Note();
  }
  addmyNote()
  {
    this.notes.push(this.note);
    this.myserveobj.addNote(this.note).subscribe
    (
      (addednote)=> {},
      (err)=>{this.errMessage=err;
        this.notes.pop();}
    );
   this.note=new Note();
  }
}
