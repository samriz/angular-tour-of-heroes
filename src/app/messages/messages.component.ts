import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //messageService needs to be public because it needs to be binded to and Angular only bins to public component properties
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
