import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private data: any[] = [];
  no:any=1;
  mystatus="pending";
  constructor() { }
  getData(): any[] {
    return this.data;
  }
  addData(name:any,title:any,description:any,status="pending") {
    this.data.push({no:this.no,name:name,title:title,description:description,status:status});
    this.no++;
  }

}
