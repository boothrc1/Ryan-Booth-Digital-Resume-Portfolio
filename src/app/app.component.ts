import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ryans-portfolio';

  constructor(private service: MessageService) {

  }

  ngOnInit(): void {
    this.service.sendMessage({ text: 'Hello from the portfolio!' }) .subscribe(res => console.log(res));
  }
}
