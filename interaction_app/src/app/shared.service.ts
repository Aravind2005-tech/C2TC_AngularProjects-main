import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // Using BehaviorSubject to store the shared data
  private sharedData = new BehaviorSubject<string>('');  // Default value: ''

  // Observable to allow other components to subscribe to this data stream
  currentData = this.sharedData.asObservable();

  // Method to set data and notify all subscribers
  setData(data: string) {
    this.sharedData.next(data);  // Push new data to all subscribers
  }

  // This method is not needed as the observable stream will be subscribed to for updates
}
