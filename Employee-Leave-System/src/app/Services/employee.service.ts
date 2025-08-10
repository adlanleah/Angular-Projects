import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  onlogin(obj:any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login",obj)
  }
  createdEmployee(obj:any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee",obj)
  }
  UpdatedEmployee(obj:any){
    return this.http.put("https://freeapi.miniprojectideas.com/api/EmployeeLeave/UpdateEmployee",obj)
  }
  DeletedEmployee(obj:any){
    return this.http.delete("https://freeapi.miniprojectideas.com/api/EmployeeLeave/DeleteEmployee",obj)
  }
  GetEmployee(obj:any){
    return this.http.get("'https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployeeById",obj)
  }
}
