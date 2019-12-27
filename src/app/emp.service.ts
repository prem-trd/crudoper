import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { emp } from './emp/emp.model';
const headeroption={
  headers:new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class EmpService {
mockurl=" http://localhost:3000/emp"
currentEmployee : emp = {
  firstname:null,
  lastname:null,
   contact:null,
   address:null,
   id:null
   
}
  constructor(private http:HttpClient ) { }
  getemp():Observable<emp[]>{
    return this.http.get<emp[]>(this.mockurl,headeroption);
  }
  deleteemp(id:number):Observable<emp>{
return this.http.delete<emp>(this.mockurl + '/' + id,headeroption);
  }
  createemp(employees):Observable<emp>{
    return this.http.post<emp>(this.mockurl,employees, headeroption);
  }
  updateemp(employees):Observable<emp>{
    return this.http.put<emp>(this.mockurl + '/' +employees.id,employees, headeroption);
  }
}
