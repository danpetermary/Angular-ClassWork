import { Component, OnInit } from '@angular/core';
import { Note } from './mynote';
import { MyhttpService } from './myhttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private myserveobj : MyhttpService)
{
  
}
ngOnInit()
{
 
}

}
