import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
    title = 'The Will Will Web';
    editortitle = this.title;
    titlelink = "http://blog.miniasp.com/";
    num = 1;
  constructor() {

   }

  ngOnInit() {
  }

  PlusOne() {
    this.num = this.num + 1;
  }

  eventHandler(event) {
   //console.log(event, event.keyCode, event.keyIdentifier);
   if(event.keyCode == 13)
   {
      console.log(this.editortitle);
      this.title = this.editortitle;
   }
  }
}
