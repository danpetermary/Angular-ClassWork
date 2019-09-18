import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../mynote';
import { MatDialog } from '@angular/material/dialog';
import { EditnoteviewComponent } from '../editnoteview/editnoteview.component';
import { MyrouteserveService } from '../myrouteserve.service';

@Component({
  selector: 'app-mynote',
  templateUrl: './mynote.component.html',
  styleUrls: ['./mynote.component.css']
})
export class MynoteComponent implements OnInit {
@Input()
ele : Note;
  constructor(public mydialog : MatDialog,private rouobj:MyrouteserveService) { 
    this.ele=new Note();
  }
  ngOnInit() {
  }
opendialog()
{
this.rouobj.navigateforedit(this.ele.id);
}

}
