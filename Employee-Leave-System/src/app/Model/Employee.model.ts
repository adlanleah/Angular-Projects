export class LoginModel{
    emailId: string;
    password: string;

    constructor(){
        this.emailId = '';
        this.password = '';
    }
}

export class EmployeeModel{
     id?: number;
     name: string;
     email: string;
     contact: string;
     department: string;
     gender: string;
     role: string;

     constructor(){
        this.name = '',
        this.email = '',
        this.contact = '',
        this.department = '',
        this.gender = '',
        this.role = ''

     }
}