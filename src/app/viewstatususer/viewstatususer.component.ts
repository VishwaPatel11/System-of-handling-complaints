import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-viewstatususer',
  templateUrl: './viewstatususer.component.html',
  styleUrls: ['./viewstatususer.component.css']
})
export class ViewstatususerComponent {
  id: any
  data: any[] = []
  showvalue = false;
  showcompleted = false;
  showpending = false;
  constructor(private Myservice: MyserviceService) { }
  ngOnInit() {
    this.data = this.Myservice.getData();
  }
  count = 0
  searchData() {
    this.count = 0;
    for (let i of this.data) {
      if (i.no == this.id) {
        if (i.status == "completed") {
          this.showcompleted = true;
          this.showpending = false;
          this.showvalue = false;
          this.count++;
          alert("Status is Completed!")
        }
        else {
          this.showpending = true;
          this.showcompleted = false
          this.showvalue = false
          this.count++;
          alert("Status is Pending!")
        }
      }
    }
    if (this.count == 0) {
      this.showvalue = true
      this.showcompleted = false
      this.showpending = false
      alert("Not Found!")
    }
  }


}
