import { Injectable } from '@angular/core';
import { last } from 'rxjs';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  submitApplication(firstname:String,lastname:String,email:String)
  {
    console.log("Firstname:",firstname,"Lastname:",lastname,"email:",email);
  }
}
