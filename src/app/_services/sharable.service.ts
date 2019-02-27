import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharableService {

  //creating a behaviour subject to store the data
  private BS = new BehaviorSubject<string>('Rishabh Kalra');
  //convert it into an observable for subscription
  BSObs = this.BS.asObservable();

  constructor() { }

  //a setter function to send the new data
  sendMessage(message : string = 'this is the temporary message'){
    this.BS.next(message);
  }
}
