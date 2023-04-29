import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ="Complaint Management System"
  showHome = true;
  showAdmin =  false;

  showadmin(){
    this.showAdmin=true;
    this.showHome=false;
  }

  
}
