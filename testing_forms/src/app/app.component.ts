import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup,FormControl } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //public user=inject(UserService);
  constructor(private user:UserService){}

  public applyForm = new FormGroup(
  {
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    email:new FormControl('')
  }
);

submitApplication()
{
  this.user.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? ''
  );
}
}

