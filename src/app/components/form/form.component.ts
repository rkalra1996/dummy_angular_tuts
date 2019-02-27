import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registration = new FormGroup({
    name : new FormControl('Rishabh'),
    email : new FormControl(''),
    password : new FormControl(''),
    address : new FormGroup({
      street : new FormControl('your address'),
      landmark : new FormControl('your landmark')
    })
  });

  constructor() { }

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
