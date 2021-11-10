import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from "src/app/services/employee.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  data : any;
  res : any;
  formValue !: FormGroup;
  email : any;
  password : any;

  
  constructor(private formbuilder : FormBuilder,private router: Router,private api : EmployeeService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      email : [''],
      password : ['']
    })
  }

  login(){
    this.email = this.formValue.value.email;
    this.password = this.formValue.value.password;

    this.data = {
      "username": this.email,
      "password": this.password
    }

    // this.res = this.api.loginApi(this.data);
    // console.log("Testtttt",this.res);


    this.api.loginApi(this.data)
    .subscribe( res => {
      // console.log(res);
      // this.res = res;
      console.log("kamalllll@@@@@@",res);

      // console.log(res);
      if(res.token){
        localStorage.setItem("token",res.token)
        this.loading = true;
        this.router.navigateByUrl('/covidTracker');
      }else{
        alert("Wrong User Name or Password");
         this.loading = false;
      }

    })



    




    // if(this.email == "admin" && this.password == "admin"){
    //   this.loading = true;
    //   this.router.navigateByUrl('/covidTracker');
    // }else{
    //   alert("Wrong User Name or Password");
    //   this.loading = false;
    // }
  }

  

}
