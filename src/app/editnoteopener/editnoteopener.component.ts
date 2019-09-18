import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditnoteviewComponent } from '../editnoteview/editnoteview.component';

@Component({
  selector: 'app-editnoteopener',
  templateUrl: './editnoteopener.component.html',
  styleUrls: ['./editnoteopener.component.css']
})
export class EditnoteopenerComponent implements OnInit {

  constructor(public actroute : ActivatedRoute,public mydial : MatDialog)
   {
let paramid =+ actroute.snapshot.paramMap.get('mynoteid');
let dialogobj = mydial.open(EditnoteviewComponent,{data : {myid : paramid}}) ;
    }

  ngOnInit() {
  }

}
