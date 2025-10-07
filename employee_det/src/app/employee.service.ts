import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee:Employee[]=[
    {eid:1,ename:"Thamizh",desig:"MD",city:"Goa"},
    {eid:2,ename:"Fareedh",desig:"Manager",city:"Goa"},
    {eid:3,ename:"Hari",desig:"Assit.Manager",city:"AHD"},
    {eid:4,ename:"Kalai",desig:"CEO",city:"Goa"}
  ]

  //Get all employee
  getEmp():Employee[]   
  {
      return this.employee;
  }
}
