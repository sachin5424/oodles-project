import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  temp:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  email1 = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email1.hasError('required')) {
      return '';
    }

    return this.email1.hasError('email') ? 'Not a valid email' : '';
  }

  contact_form = new FormGroup({
    name:new FormControl('',[Validators.minLength(3)]),
    email:new FormControl('',[Validators.email,]),
    compnay:new FormControl('',[]),
    subject:new FormControl('',[Validators.minLength(15)]),
    message:new FormControl('',[Validators.minLength(30)])
  })
  get registerFormControl() {
    return this.contact_form.controls;
  }
  submitMethod(){
    console.log('ok');
    if(this.contact_form.valid){
      this.temp = true
    }
  }

}
