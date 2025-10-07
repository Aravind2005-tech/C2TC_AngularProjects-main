import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   // Interpolation example
   username: string = 'User';

   // Two-way binding example
   userInput: string = '';
 
   // Correctly define the event handler method to update the username
  onUsernameInput(event: Event): void {
    this.username = (event.target as HTMLInputElement).value;
  }
   // Event binding example
   sayHello() {
     alert('Hello, ' + this.username + '!');
   }
}
