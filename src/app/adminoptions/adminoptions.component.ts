import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-adminoptions',
  templateUrl: './adminoptions.component.html',
  styleUrls: ['./adminoptions.component.css']
})
export class AdminoptionsComponent {
  data:any[]=[]
  constructor( private Myservice:MyserviceService){}
  ngOnInit() {
    this.data = this.Myservice.getData();
  }
  viewcomp=true;
  viewstatus=false;
  viewdelete=false;
  
  viewcomplaints(){
    this.viewcomp=true;
    this.viewstatus=false;
    this.viewdelete=false;
  }
  viewstatuscomp(){
    this.viewstatus=true;
    this.viewcomp=false;
    this.viewdelete=false;
  }
}
