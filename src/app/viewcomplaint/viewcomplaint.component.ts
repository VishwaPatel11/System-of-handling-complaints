import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.css']
})
export class ViewcomplaintComponent {
  data:any[]=[]
  constructor( private Myservice:MyserviceService){}
  ngOnInit() {
    this.data = this.Myservice.getData();
  }


}
