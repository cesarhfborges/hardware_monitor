import {Component, OnInit} from '@angular/core';
import {Message, MessageService} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  messages1: Message[] = [
    {severity: 'success', summary: 'Success', detail: 'Message Content', closable: false},
    {severity: 'info', summary: 'Info', detail: 'Message Content'},
    {severity: 'warn', summary: 'Waning', detail: 'Closable Message Content'},
    {severity: 'error', summary: 'Error', detail: 'Closable Message Content'},
  ];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  showSuccess() {
    this.messageService.add({severity: 'success', summary: 'Success', detail: 'Message Content', life: 50000});
  }

  showInfo() {
    this.messageService.add({severity: 'info', summary: 'Info', detail: 'Message Content'});
  }

  showWarn() {
    this.messageService.add({severity: 'warn', summary: 'Warn', detail: 'Message Content'});
  }

  showError() {
    this.messageService.add({severity: 'error', summary: 'Error', detail: 'Message Content'});
  }
}
