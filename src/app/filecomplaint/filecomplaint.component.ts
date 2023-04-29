import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-filecomplaint',
  templateUrl: './filecomplaint.component.html',
  styleUrls: ['./filecomplaint.component.css']
})
export class FilecomplaintComponent {
  constructor(private myservice:MyserviceService){}
   name:any;
   private data: any[] = [];
   no:any=1; 
  title:any;
  description:any;
  addData() { 
    this.myservice.addData(this.name,this.title,this.description);
    // this.no++;
    alert("Complaint is successfully!!\nName: "+this.name+"\nTitle: "+this.title+"\nDescription: "+this.description + "\nComplaint ID: " + this.no);
    this.no = this.no + 1;
  }
}
