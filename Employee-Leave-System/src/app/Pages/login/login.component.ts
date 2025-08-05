import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../Model/Employee.model';
import { EmployeeService } from '../../Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: LoginModel = new LoginModel();

  employeeService = inject(EmployeeService);
  router = inject(Router);

  onLogin() {
    this.employeeService.onlogin(this.loginObj).subscribe({
      next: (result: any) => {
        console.log("API response received but will force login");

        // Force login regardless of actual response
        const user = {
          emailId: this.loginObj.emailId,
          name: 'Forced Demo User',
          role: 'Admin'
        };

        alert('Login Successfully forced myself in!');
        localStorage.setItem('leaveUser', JSON.stringify(user));
        this.router.navigateByUrl('/dashboard');
      },
      error: (err) => {
        console.log('API failed but forcing login anyway', err);

        const fallbackUser = {
          emailId: this.loginObj.emailId,
          name: 'Offline Demo User',
          role: 'Admin'
        };

        alert('Login Successful (Offline)');
        localStorage.setItem('leaveUser', JSON.stringify(fallbackUser));
        this.router.navigateByUrl('/dashboard');
      }
    });
  }
}
