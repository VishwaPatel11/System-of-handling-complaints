import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-changestatus',
  templateUrl: './changestatus.component.html',
  styleUrls: ['./changestatus.component.css']
})
export class ChangestatusComponent {
  id:any;
  show=false;
  showelse=false;

  data:any[]=[]
  constructor( private Myservice:MyserviceService){}
  ngOnInit() {  
    this.data = this.Myservice.getData();
  }
  count=0;
  searchdata(){
    for(let d of this.data){
      if(d.no == this.id){
        d.status="completed";
        
        
      }
       
    }
    
    
  }







}
