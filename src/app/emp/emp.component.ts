import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { emp } from './emp.model';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor(private service:EmpService) { }

  ngOnInit() {
  }
  createAndUpdaate(currentEmployee:emp){
    console.log(currentEmployee);
    if(currentEmployee.id !=null){
console.log('update');
this.updateEmployee(currentEmployee)
    }
    else{
      console.log('create');
      this.createemp(currentEmployee)
    }
  }
  createemp(employees:emp){
this.service.createemp(employees).subscribe();
  }
  updateEmployee(employees:emp){
    this.service.updateemp(employees).subscribe();

  }
  clearemp(){
    this.service.currentEmployee = {
      firstname:'',
      lastname:'',
       contact:null,
       address:'',
       id:null
    }
  }
}
