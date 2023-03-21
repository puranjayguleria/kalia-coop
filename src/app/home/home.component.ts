import { Homedata } from './../classes/homedata';
import { DataService } from './../services/data.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homedata:Homedata[]
  url:any
  is_loading:any=true
  display:string;
  durationInSeconds = 5;
  private isMobileResolution: boolean;
  constructor(private dataService:DataService) { 
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }

  }
 

  ngOnInit() {
    this.dataService.getCoverPhoto().subscribe(homedata => {
      setTimeout(()=>{ this.is_loading=false }, 4000);
      this.url=homedata;
      console.log(this.url);
      
    }
      
      )
    
  }
  @HostListener('window:resize', ['$event'])
onResize(event) {
  if (window.innerWidth < 768) {
    this.isMobileResolution = true;
  } else {
    this.isMobileResolution = false;
  }
}

}
