import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  template: `
    <h2>Angular 7 Component Communication</h2>
    <button (click)="sendMessage()" class="btn btn-primary">Send Message</button>
    <button (click)="clearMessage()" class="btn btn-secondary">Clear Message</button>
  `,
  styles: []
})
export class HomeComponent {

  constructor(private messageService: MessageService) { }

  sendMessage(): void {
    this.messageService.sendMessage('Message from Home component to App component');
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }

}
