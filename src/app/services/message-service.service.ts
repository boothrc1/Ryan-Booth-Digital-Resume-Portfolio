import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  private apiUrl = 'https://hayruw2rfd.execute-api.us-east-1.amazonaws.com/PROD/message';

  constructor(private http: HttpClient) {}

  sendMessage(payload: any) {
    return this.http.post(this.apiUrl, payload);
  }
}
