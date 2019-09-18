import { Component, OnInit } from '@angular/core';
import { Note } from '../mynote';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-notelistview',
  templateUrl: './notelistview.component.html',
  styleUrls: ['./notelistview.component.css']
})
export class NotelistviewComponent implements OnInit {
  errMessage :string;
  note : Note;
  notes : Array<Note>=[];
  startednotes : Array<Note>=[];
  completenotes : Array<Note>=[];
  notstartednotes : Array<Note>=[];
  constructor(private myserveobj : MyhttpService) 
  { 
    this.note=new Note();
    this.myserveobj.getallNotes().subscribe(
      (notes) =>
      {
        this.filternotes(notes);
      }
    )
     
  }

  filternotes(notes : Array<Note>)
  {
this.startednotes = notes.filter( note => note.status=='Started');
this.completenotes=notes.filter(note => note.status=='Completed');
this.notstartednotes=notes.filter(note => note.status=='Not Completed');

  }
 ngOnInit() {
   this.getNote();
 }
 getNote()
 {
   this.myserveobj.getallNotes().subscribe
   (
     (ele)=>{ this.notes=ele;},
     (err)=>{console.log(err);}
   )
 }

}
