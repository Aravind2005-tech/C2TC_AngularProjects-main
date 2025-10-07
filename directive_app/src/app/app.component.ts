import { Component } from '@angular/core';
import { NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass } from '@angular/common'; // Import the built-in directives
import { HighlightDirective } from './highlight.directive'; // Import the custom directive

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, HighlightDirective], // Import the built-in directives and custom directive
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible: boolean = true;
  fruits: string[] = ['Apple', 'Banana', 'Orange'];
  selectedColor: string = 'red';
  isSuccess: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  toggleSuccess() {
    this.isSuccess = !this.isSuccess;
  }
}
