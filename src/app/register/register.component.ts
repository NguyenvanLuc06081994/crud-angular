import {Component, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, FormControl, AbstractControl, Validators} from '@angular/forms';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  // tslint:disable-next-line:variable-name
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  c: AbstractControl;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      country: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    }, {validator: this.comparePassword});
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  // tslint:disable-next-line:typedef
  comparePassword(group: FormGroup) {
    let pass: string;
    pass = group.get('password').value;
    let confirmPass: string;
    confirmPass = group.get('confirmPassword').value;

    return (pass === confirmPass) ? null : {notSame: true};
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.registerForm.get('email');
  }

  // tslint:disable-next-line:typedef
  get password() {
    return this.registerForm.get('password');
  }

  // tslint:disable-next-line:typedef
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  // tslint:disable-next-line:typedef
  get country() {
    return this.registerForm.get('country');
  }

  // tslint:disable-next-line:typedef
  get age() {
    return this.registerForm.get('age');
  }

  // tslint:disable-next-line:typedef
  get gender() {
    return this.registerForm.get('gender');
  }

  // tslint:disable-next-line:typedef
  get phone() {
    return this.registerForm.get('phone');
  }
}
