import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  submitApplication(firstname:String,lastname:String,email:String)
  {
    console.log("FirstName:",firstname,"LastName:",lastname,"Email:",email);
  }
}
