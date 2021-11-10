import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from "src/app/services/employee.service";
import { FormBuilder,FormGroup } from "@angular/forms";
import { EmployeeModel } from "./employee-dashboard-model";




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  newPost = "";
  enteredValue = "";

  formValue !: FormGroup;
  employeeModelObj : EmployeeModel = new EmployeeModel();
  employeeData !: any;

  constructor(private formbuilder : FormBuilder,private api : EmployeeService){}

  addPostValue(){
    this.newPost = this.enteredValue;
  }

  @Input() myInputMessage:string ="I am the parent comppnent";

  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name : [''],
      email : [''],
      phone : ['']
    })
    this.getAllEmployee();
  }

  postEmployeeDetails(){
    this.employeeModelObj.name = this.formValue.value.name;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.phone = this.formValue.value.phone;
    
    this.api.postEmployee(this.employeeModelObj)
    .subscribe(res => {
      console.log(res);
      alert("Record Added Successfully");
      let ref = document.getElementById("cancle");
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert("Some Thing Went Wrong");
    })
  }

  getAllEmployee(){
    this.api.getEmployee()
    .subscribe( res => {
      console.log(res);
      this.employeeData = res;
    })
  }

  deleteEmployee(row : any){
    //console.log("kamalllll",row.id);
    this.api.deleteEmployee(row.id)
    .subscribe( res => {
      this.getAllEmployee();
      alert("Record Deleted");
    })
  }


  onEditEmployee(row :any){
    this.employeeModelObj.id = row.id;
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['phone'].setValue(row.phone);
  }

  updateEmployeeDetails(){
    this.employeeModelObj.name = this.formValue.value.name;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.phone = this.formValue.value.phone;
    
    this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
    .subscribe(res => {
      alert("Record Update Successfully");
      let ref = document.getElementById("cancle");
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert("Some Thing Went Wrong");
    })
  }

}
