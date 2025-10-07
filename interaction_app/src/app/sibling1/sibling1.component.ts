import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibling1',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import necessary modules
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
  data: string = ''; // Variable to hold user input

  constructor(private sharedService: SharedService) {}

  sendData() {
    this.sharedService.setData(this.data); // Set data in the shared service
  }
}
