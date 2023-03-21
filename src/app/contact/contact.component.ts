import { MatSnackBar } from '@angular/material/snack-bar';
import { Comments } from './../classes/comments';
import { DataService } from './../services/data.service';
import { Contact } from './../classes/contact';
import { Projects } from './../classes/projects';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  contact:Contact
 

  constructor(private fb:FormBuilder,private dataservice:DataService,public snackBar:MatSnackBar) { 
    
  }
  signupForm: FormGroup;
  comment:Comments
  is_loading:boolean=true
  ngOnInit() {
    setTimeout(()=>{ this.is_loading=false }, 2000);
    this.FormData = this.fb.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
      })
    
  
}
onSubmit(){
  console.log(this.FormData.value)
  this.comment=this.FormData.value;
  this.dataservice.postComment(this.comment).subscribe(response=>{console.log(JSON.stringify(response)); this.callsnackbar(response) })
  
  this.FormData.reset()
}
callsnackbar(response){
  if(response=="OK"){
    this.snackBar.open("Sent!" ,"ok", {
      duration: 5000
   });

  }
}
}
