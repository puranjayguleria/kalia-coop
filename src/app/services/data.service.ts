import { Comments } from './../classes/comments';
import { ProjectDetails } from './../classes/project-details';
import { Projects } from './../classes/projects';
import { Homedata } from './../classes/homedata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCoverPhoto():Observable<any>{
    return this.http.get<any>('https://panbhai.herokuapp.com/api')
    
  }

  getprojectphotos():Observable<Projects[]>{
    return this.http.get<Projects[]>('https://panbhai.herokuapp.com/display')
  }
  getProjectById(id:string):Observable<ProjectDetails>{
    console.log(id)
    return this.http.get<ProjectDetails>('https://panbhai.herokuapp.com/display/'+id);
    
      
    }
    postComment(comment:Comments):Observable<any>{
      console.log("In post"+comment.Comment);
      return this.http.post('https://panbhai.herokuapp.com/contact',comment,{responseType: 'text'});
    }
     

}
