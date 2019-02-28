import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  behaviour = new BehaviorSubject<string>('hello there');
  behaviourObs = this.behaviour.asObservable();

  constructor(private http : HttpClient) {
   }

   //get login details
   getDetails(loginData){
     if(loginData.hasOwnProperty('nameControl') && loginData.hasOwnProperty('passControl')){
      let dataUri : string = 'https://api.myjson.com/bins/afghe'
      return this.http.get<any>(dataUri);
     }
     else {
       console.log("wrong data provided", loginData);
       return new BehaviorSubject({error : 'wrong credentials', active : true}).asObservable();
     }
   }
}
