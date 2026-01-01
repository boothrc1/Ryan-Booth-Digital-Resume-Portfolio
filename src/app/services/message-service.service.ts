import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private apiUrl = 'arn:aws:execute-api:us-east-1:616859360925:hayruw2rfd/*/POST/message';

  constructor(private http: HttpClient) {}

  sendMessage(payload: any) {
    return this.http.post(this.apiUrl, payload);
  }
}
