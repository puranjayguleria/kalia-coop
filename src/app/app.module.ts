import { HoverdirectiveDirective } from './directives/hoverdirective.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './navigation/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SliderModule } from 'angular-image-slider';
import {A11yModule} from '@angular/cdk/a11y';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { FormsModule ,FormBuilder, Validators, FormGroup}   from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CorouselMobileComponent } from './classes/corousel-mobile/corousel-mobile.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    SidenavListComponent,
    ProjectDetailsComponent,
    HoverdirectiveDirective,
    CarouselComponent,
    CorouselMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatListModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    SliderModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    
    
   
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
