import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Note } from './mynote';
import { AuthservService } from './authserv.service';
import { resolve } from 'path';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  notes : Array<Note>;
  notesub : BehaviorSubject<Array<Note>>;

  constructor( private myhttp : HttpClient,private myauthservice : AuthservService )
  {
    this.notesub = new BehaviorSubject([]);
    this.fetchFromserver();
    console.log("Inside Note Constructor");
  }
 
   getnotebyId(myid)
   {
    let resultnote= this.notes.find( note => note.id == myid );

      return Object.assign({},resultnote);
    }
   editNote(mynote)
   {
    let tok=this.myauthservice.getmyToken();
    return this.myhttp.put<Note>(`http://localhost:3000/api/v1/notes/${mynote.id}`,mynote,
    {headers: new HttpHeaders().set('Authorization', `Bearer ${tok}`)}).pipe(
      tap(
        (editednote)=>
        {
         let oldnote=this.notes.find( (ele)=> ele.id==mynote.id);
         Object.assign(oldnote,editednote);
         this.notesub.next(this.notes);
        }
      )
    )
     
   }

  fetchFromserver()
  {
    console.log("inside fetch");
    let tok= this.myauthservice.getmyToken();
    return(this.myhttp.get<Array<Note>>(`http://localhost:3000/api/v1/notes`,
    { "headers" : new HttpHeaders().set("Authorization", `Bearer ${tok}`) }).subscribe
     (    
       (res) =>
     {
      this.notes=res;
      this.notesub.next(this.notes);
       },
      (err) =>
      {
        console.log("Error" + err);
      }
       )
       );

  }

    getallNotes():BehaviorSubject<Array<Note>>
    {
       return this.notesub;
    }

addNote(noteobj : Note):Observable<Note>
    {
      let tok= this.myauthservice.getmyToken();
return this.myhttp.post<Note>(`http://localhost:3000/api/v1/notes`,
noteobj,
{ "headers" : new HttpHeaders().set("Authorization", `Bearer ${tok}`) }).
pipe(
  tap
  (
    (addednote)=>
    {
      this.notes.push(addednote);
      this.notesub.next(this.notes);
    }
  )
)

     }
}
