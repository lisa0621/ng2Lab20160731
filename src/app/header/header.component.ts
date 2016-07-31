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
    IsEdit = false;
  constructor() {

   }

  ngOnInit() {
  }

  PlusOne() {
    this.num = this.num + 1;
  }

  eventHandler(event: KeyboardEvent, input: HTMLInputElement) {
   //console.log(event, event.keyCode, event.keyIdentifier);
   if(event.keyCode == 13)
   {
      this.title = input.value;
      this.IsEdit = false;
   }
  }

  EnterEdit($event: MouseEvent)
  {
    this.IsEdit = true;
    $event.preventDefault();
  }
}
