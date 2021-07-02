import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent  {

  toggledValue=true;
  toggled($event: any){
    console.log('admin',$event);
    this.toggledValue =$event;
  }

}
