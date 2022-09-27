import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuid } from 'uuid'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    id: new FormControl(uuid(), [Validators.required]),
    name: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.pattern('[6-9]\\d{9}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required])
  });

  get f() {
    return this.form.controls;
  }

  user_list: any[] = [
    {
      id: uuid(),
      name: 'Rohit Sharma',
      mobile: '8094113042',
      email: 'rohitsharma@gmail.com',
      address: 'Bengaluru karnatka'
    },
    {
      id: uuid(),
      name: 'Virat Kohli',
      mobile: '8094113042',
      email: 'viratkohli@gmail.com',
      address: 'Bengaluru karnatka'
    },
    {
      id: uuid(),
      name: 'Anmol Sharma',
      mobile: '8094113042',
      email: 'anmolsharma@gmail.com',
      address: 'Bengaluru karnatka'
    },
    {
      id: uuid(),
      name: 'Shubham kumar',
      mobile: '8094113042',
      email: 'shubhamkumar@gmail.com',
      address: 'Bengaluru karnatka'
    },
    {
      id: uuid(),
      name: 'Ravi mehta',
      mobile: '8094113042',
      email: 'ravimehta@gmail.com',
      address: 'Bengaluru karnatka'
    },
  ];

  submit() {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      var user: any = this.form.value;
      if (user) {
        // this.user_list.push(user)
        this.user_list.splice(0, 0, user)
        this.toastr.success('user created')
        this.form.
          reset({
            'id': uuid(),
            'name': '',
            'mobile': '',
            'email': '',
            'address': '',
          });
      }


    } else {
      this.toastr.error("Fill All Mandatory fields")
    }
  }

  deleteUser(user_id: any) {
    this.user_list = this.user_list.filter(item => item.id !== user_id);
  }

}
