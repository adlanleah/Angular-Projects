import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from '../../Model/Employee.model';
import { EmployeeService } from '../../Services/employee.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeService = inject(EmployeeService);
  router = inject(Router);

  createdEmployee() {
    this.employeeService.createdEmployee(this.employeeObj).subscribe({
      next: (result: any) => {
        console.log("Employee created successfully", result);
        this.employeeObj = new EmployeeModel(); // Reset the form
      },
      error: (error) => {
        console.error("Error creating employee", error);
      }
    });
  }
}
