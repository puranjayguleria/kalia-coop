import { DataService } from './../services/data.service';
import { ProjectDetails } from './../classes/project-details';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  id:string;
  projectdetails:ProjectDetails
  is_loading:any=true
  public image_urls;
  public slides 
  isMobileResolution:boolean
  constructor(
    private dataservice:DataService,
    private route: ActivatedRoute,
    config: NgbCarouselConfig
    ) { 
      if (window.innerWidth < 768) {
        this.isMobileResolution = true;
      } else {
        this.isMobileResolution = false;
      }
  
    }

  ngOnInit() {
    
    this.route.params.pipe(switchMap((params: Params) => { return this.dataservice.getProjectById(params['id']); }))
    .subscribe(projectdetails => { 
      this.projectdetails = projectdetails; 
      console.log(this.projectdetails.images); 
      this.is_loading=false

      this.slides=this.projectdetails.images
    })
    
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
