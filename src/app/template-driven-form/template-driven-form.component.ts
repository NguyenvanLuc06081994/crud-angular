import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  username: string;
  email: string;
  facebook: string;
  twitter: string;
  website: string;
  tel: string;
  profile = {
    username: 'Bob',
    email: 'abc@deg.com',
    facebook: 'facebook.com',
    twitter: 'twitter.com',
    website: 'example.com',
    tel: '1234-5678-90'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(userForm) {
    console.log(userForm);
  }
}
