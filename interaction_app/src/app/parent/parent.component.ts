import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],  // Import ChildComponent and other modules
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData: string = 'Data from Parent';

  // Handler for the event emitted by the child
  parentNotified() {
    alert('Parent notified by Child!');
  }
}
