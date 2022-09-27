import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('[6-9]\\d{9}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }

  user_list = [];

  // user_obj = {
  //   name: '',
  //   email: '',
  //   phone: '',
  //   address: ''
  // }

}
