import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeDesignation',
  standalone: true // Make the pipe standalone
})
export class EmployeeDesignationPipe implements PipeTransform {
  transform(employee: { eno: number; ename: string; designation: string }): string {
    if (!employee) return '';

    // Custom logic to format employee details
    const prefix = this.getDesignationPrefix(employee.designation);
    return `${employee.ename} (${prefix} ${employee.designation.toUpperCase()})`;
  }

  private getDesignationPrefix(designation: string): string {
    switch (designation.toLowerCase()) {
      case 'developer':
        return 'Senior';
      case 'designer':
        return 'Lead';
      case 'manager':
        return 'Chief';
      default:
        return 'Staff';
    }
  }
}
