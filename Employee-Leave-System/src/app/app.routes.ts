import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { EmployeesComponent } from './Pages/employees/employees.component';
import { LeaveComponent } from './Pages/leave/leave.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'employee',
                component: EmployeesComponent
            },
            {
                path: 'leave',
                component: LeaveComponent
            }
        ]
    }
];
