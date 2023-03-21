import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const routes: Routes = [

{path:'home', component: HomeComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path:'project',component:ProjectComponent},
{path:'contact',component:ContactComponent},
{path:'about',component:AboutComponent},
{path:'project-details/:id',component:ProjectDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
