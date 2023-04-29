import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-useroptions',
  templateUrl: './useroptions.component.html',
  styleUrls: ['./useroptions.component.css']
})
export class UseroptionsComponent {
  showstatus=false;
  showfile=false;
  data:any[]=[]
  constructor( private Myservice:MyserviceService){}
  ngOnInit() {  
    this.data = this.Myservice.getData();
  }

  showfilecomplaint(){
    this.showfile=true;
    this.showstatus=false;

  }
  showcomplaintstatus(){
    this.showfile=false;
    this.showstatus=true;
  }

}
