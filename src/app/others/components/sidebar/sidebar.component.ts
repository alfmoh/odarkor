import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

@Input() submission;
@Output() toggle = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

  clicked(){
    this.toggle.emit();
  }
}
