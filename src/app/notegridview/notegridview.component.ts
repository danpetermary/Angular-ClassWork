import { Component, OnInit } from '@angular/core';
import { Note } from '../mynote';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-notegridview',
  templateUrl: './notegridview.component.html',
  styleUrls: ['./notegridview.component.css']
})
export class NotegridviewComponent implements OnInit {
  errMessage :string;
  note : Note;
  notes : Array<Note>=[];

  constructor(private myserveobj : MyhttpService) {
    
    this.note=new Note();
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
