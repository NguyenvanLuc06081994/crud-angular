import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import {IUser} from '../iuser';
import {UserService} from '../services/user.service';
import {RoleService} from '../services/role.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  hidden = true;
  users = [];
  roles = [];
  message: string;

  constructor(private userService: UserService,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
    this.roles = this.roleService.getAll();
    // console.log(this.roles);
  }

  // tslint:disable-next-line:typedef
  showHideEmail() {
    this.hidden = !this.hidden;
  }

  // tslint:disable-next-line:typedef
  search(event) {
    console.log(event);
    // console.log(this.filterUSer(event));
    this.users = (event) ? this.filterUSer(event) : this.userService.getAll();

  }

  // tslint:disable-next-line:typedef
  filterUSer(keyword) {
    return this.userService.getAll().filter(user => {
      // tslint:disable-next-line:triple-equals
      return user.name.toLowerCase().indexOf(keyword) != -1;
    });
  }

  // tslint:disable-next-line:typedef
  remove(id) {
    console.log(id);
    if (confirm('are you sure???')) {
      this.userService.remove(id);
      this.message = 'Xoa Thanh Cong!!!';
    }
  }


}
