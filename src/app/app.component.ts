import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService){
    this.subscription = this.messageService.getMessage().subscribe(
      message => {
        if(message) {
          this.messages.push(message);
        }
        else {
          this.messages = [];
        }
      }
    );
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
 
}
