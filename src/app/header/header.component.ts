import { Component, OnInit } from '@angular/core';
import { MyrouteserveService } from '../myrouteserve.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isNoteView =true;
  constructor(private rouobj : Router,private loca : Location,
    private routservice : MyrouteserveService) 
    {
  rouobj.events.subscribe(
    (ele)=>
    {
     if( loca.path().indexOf('list')>=-1)
      this.isNoteView=false;
    }
  )
     }

  ngOnInit() {
  }
 
  changeView()
  {
    if(!this.isNoteView)
    {
      this.routservice.navigatetolist();
      this.isNoteView=true;
    }
    else
    {
      this.routservice.navigatetogrid();
      this.isNoteView=false;
    }
  }
}
