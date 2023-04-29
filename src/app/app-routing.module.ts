import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { FilecomplaintComponent } from './filecomplaint/filecomplaint.component';
import { AdminoptionsComponent } from './adminoptions/adminoptions.component';
import { ViewcomplaintComponent } from './viewcomplaint/viewcomplaint.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UseroptionsComponent } from './useroptions/useroptions.component';


const routes: Routes = [
  {path: 'admin',component:AdminComponent},
  {path: '',component:HomeComponent},
  {path:'filecomplaint',component:FilecomplaintComponent},
  {path: 'adminoptions',component:AdminoptionsComponent},
  {path: 'viewcomplaint',component:ViewcomplaintComponent,outlet:'content'},
  {path: 'aboutus',component:AboutusComponent},
  {path: 'contactus',component:ContactusComponent},
  {path: 'contactus',component:ContactusComponent},
  {path: 'useroptions',component:UseroptionsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
