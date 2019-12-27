import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { emp } from '../emp/emp.model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
employee: emp[];
  constructor(private service:EmpService) { }

  ngOnInit() {
    this.getemp();
  }
getemp(){
  this.service.getemp().subscribe(
    (data:emp[])=>{
      console.log(data);
this.employee = data;
    });
}
deleteemp(id:number){
  console.log(id);
this.service.deleteemp(id).subscribe(
  (data : emp) => {
    this.getemp();
  });
}
edit(employees){
  this.service.currentEmployee = Object.assign({},employees)
}
}
