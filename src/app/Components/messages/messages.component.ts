import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/Services/message.service';
import{
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms', style({opacity: 1})),
      ]),
      transition(':leave', [
        animate('500ms', style({opacity:0}))
      ])
    ]),
  ]
})
export class MessagesComponent implements OnInit {

  isShown: boolean = true;

  constructor(public messageService : MessageService) { }

  ngOnInit() {
  }

  toggle(){
    this.isShown = !this.isShown;
  }
}
