import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import {RoleService} from '../services/role.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formEditUser: FormGroup;
  id = +this.route.snapshot.paramMap.get('id');
  roles = [];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private roleService: RoleService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.roles = this.roleService.getAll();
    const user = this.userService.getUserById(this.id);
    this.formEditUser = this.fb.group({
      id: [user.id],
      name: [user.name],
      phone: [user.phone],
      email: [user.email],
      address: [user.address],
      role_id: [user.role_id]
    });
    console.log(user);
  }

}
