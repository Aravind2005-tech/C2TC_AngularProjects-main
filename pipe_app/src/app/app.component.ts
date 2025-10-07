import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, DecimalPipe, CurrencyPipe, CommonModule } from '@angular/common'; // Import the built-in pipes
import { EmployeeDesignationPipe } from './employee-designation.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeDesignationPipe,DatePipe, DecimalPipe, CurrencyPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentDate: Date = new Date();
  amount: number = 1234.567;
  price: number = 99.99;

  // Define an employee table
  employees = [
    { eno: 1, ename: 'John Doe', designation: 'developer' },
    { eno: 2, ename: 'Jane Smith', designation: 'designer' },
    { eno: 3, ename: 'Michael Johnson', designation: 'manager' }
  ];
}
