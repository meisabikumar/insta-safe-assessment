import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: any;
  @Output() deleteEvent = new EventEmitter<string>();
  expandDiv = false;
  constructor() { }

  ngOnInit(): void {
  }

  delete(user_id: any) {
    this.deleteEvent.emit(user_id);
  }

}
