import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FilecomplaintComponent } from './filecomplaint/filecomplaint.component';
import { AdminoptionsComponent } from './adminoptions/adminoptions.component';
import { ViewcomplaintComponent } from './viewcomplaint/viewcomplaint.component';
import { ChangestatusComponent } from './changestatus/changestatus.component';
import { EmployeeComponent } from './employee/employee.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UseroptionsComponent } from './useroptions/useroptions.component';
import { ViewstatususerComponent } from './viewstatususer/viewstatususer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavbarComponent,
    FilecomplaintComponent,
    AdminoptionsComponent,
    ViewcomplaintComponent,
    ChangestatusComponent,
    EmployeeComponent,
    AboutusComponent,
    ContactusComponent,
    UseroptionsComponent,
    ViewstatususerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
