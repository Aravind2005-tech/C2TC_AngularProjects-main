import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,  // Standalone component
  imports: [CommonModule],  // Import necessary modules
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() inputData!: string;
  @Output() onNotify: EventEmitter<void> = new EventEmitter<void>(); // Event to notify parent

  notifyParent() {
    this.onNotify.emit(); // Emitting the event
  }
}
