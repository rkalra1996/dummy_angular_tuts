import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registration = this.fb.group({
    name : ['', Validators.required],
    email : [''],
    password : [''],
    address : this.fb.group({
      street : [''],
      landmark : ['']
    })
  });

  constructor(private fb : FormBuilder) { }

  ngOnInit() {

  }


  createForm(){
    console.log(this.registration.setValue({
      email : 'rishabhkalra',
      password : 'abcd',
      name : 'Neha verma',
      address : {
        street : '',
        landmark : ''
      }
    }))

    //patch value
    this.registration.patchValue({
      address : {
        street : 'abcd'
      }
    });

  }

}
