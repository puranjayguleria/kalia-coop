import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Projects } from '../classes/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects:Projects[]
  is_loading:any=true
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getprojectphotos().subscribe(photos=>
    {
      console.log(photos);
      setTimeout(()=>{ this.is_loading=false }, 4000);
      this.projects=photos;
    }
    
    )
  }

}
