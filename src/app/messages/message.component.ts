import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styuleUrls: ['./message.component.css']
})
export class MessagesComponnet implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
