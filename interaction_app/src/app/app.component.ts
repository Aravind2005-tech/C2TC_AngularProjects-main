import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ParentComponent, Sibling1Component, Sibling2Component], // Import your components
  template: `
    <h1>Component Interaction Example</h1>
    <app-parent></app-parent>
    <hr />
    <app-sibling1></app-sibling1>
    <app-sibling2></app-sibling2>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
