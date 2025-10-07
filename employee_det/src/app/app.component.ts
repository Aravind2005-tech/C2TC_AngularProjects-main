import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 employee:Employee[]=[];
 
 //private emp=Inject(EmployeeService);

 constructor(private employeeservice:EmployeeService)
 {
    this.employee=this.employeeservice.getEmp();
 }

 courses:string[]=["Java","JFS","MernStack","MEANSTACK",".NET","Python"];

}
