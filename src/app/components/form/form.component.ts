import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  verifyemail(): any {
    return (control: AbstractControl): {[key: string]: any} | false => {
      let newExp = RegExp('[^\s@]+@[^\s@]+\.[^\s@]+');
      const forbidden = newExp.test(control.value);
      console.log("email", forbidden)
      return forbidden ? {'verifyemail': true} : null;
    };
  }

  registration = this.fb.group({
    name : ['', Validators.required],
    email : ['',[this.verifyemail()]],
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
