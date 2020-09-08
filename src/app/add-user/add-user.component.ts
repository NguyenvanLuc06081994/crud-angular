import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {RoleService} from '../services/role.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  formAddUser: FormGroup;
  roles = [];

  constructor(private userService: UserService,
              private roleService: RoleService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    this.roles = this.roleService.getAll();
    this.formAddUser = this.fb.group({
      id: [''],
      name: [''],
      phone: [''],
      email: [''],
      address: [''],
      role_id: ['']
    });
  }

  // tslint:disable-next-line:typedef
  add() {
    console.log(this.formAddUser.value);
    this.userService.add(this.formAddUser.value);
    this.route.navigate(['/users']);
  }
}
