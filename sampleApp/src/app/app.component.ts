import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee:Employee[]=[]

 constructor(private employeeservice:EmployeeService)
 {
    this.employee=this.employeeservice.getEmployee();
 }
}
