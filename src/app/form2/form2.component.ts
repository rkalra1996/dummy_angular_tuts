import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from './../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  //formBuilder
  loginForm : any;
  //errormessage holder
  errorMessage : object = {
    active : false,
    message : ''
  };

  //injecting the form builder
  constructor(private fb : FormBuilder, private dataSrvc : DataService ) { }

  ngOnInit() {
    this.dataSrvc.behaviourObs.subscribe(observer => {console.log(observer)});
    this.createForm();
  }

  createForm(){
    //initiate the form process
    this.loginForm = this.fb.group({
      nameControl: ['john Doe', [Validators.required, Validators.minLength(5)]],
      passControl: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login(){
    console.log("login called");
    //hitting the http api for login in the user
    if(this.loginForm.valid){
      this.dataSrvc.getDetails(this.loginForm.value).subscribe(response => {
        if(response){
          if(response['username'] == this.loginForm.value['nameControl'] && response['password'] == this.loginForm.value['passControl']){
            console.log("credentials are valid");

          }
          else {
            console.log("something went wrong", response);
          }
        }
        else {
          console.log("error with the credentials");
          console.log(response);
          this.errorMessage['active'] = true;
          this.errorMessage['error'] = 'No connection';
        }
      });  
    }  
  }
}
