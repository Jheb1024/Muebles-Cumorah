import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toggledValue = true;
  @Output() toggledChange = new EventEmitter<boolean>();

  toggled(){
    if(this.toggledValue === undefined){
      this.toggledValue = true;
    }
    this.toggledValue = ! this.toggledValue;
    console.log(this.toggledValue);
    this.toggledChange.emit(this.toggledValue);
  }
}
