import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from '../mynote';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-editnoteview',
  templateUrl: './editnoteview.component.html',
  styleUrls: ['./editnoteview.component.css']
})
export class EditnoteviewComponent implements OnInit {

   noteobj : Note;

  constructor( public dialogRef: MatDialogRef<EditnoteviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,public noteservice : MyhttpService ) {
     

      this.noteobj=new Note();
    //  this.noteobj=data;
     }
callupd()
{
 this.noteservice.editNote(this.noteobj).subscribe(
   (res)=>
   {
    this.dialogRef.close();
   }
   
 )



 
}
  ngOnInit() {
    let id=this.data.myid;
  this.noteobj= this.noteservice.getnotebyId(id);
console.log(this.noteobj);
  }

  closeall()
  {
    this.dialogRef.close();
  }
}
