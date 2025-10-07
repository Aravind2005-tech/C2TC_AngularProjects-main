import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sibling2',
  standalone: true,
  imports: [CommonModule],  // Import necessary modules
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  receivedData: string = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // Subscribe to the shared data changes
    this.sharedService.currentData.subscribe(data => this.receivedData = data);
  }
}
