import {Component, Input, OnInit, EventEmitter} from '@angular/core';
import {IUser} from '../iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  p = 1;
  hidden = true;
  message: string;
  result: IUser[] = [];
  index: number;
  users: IUser[] = [{
    id: 1,
    name: 'DuongCC',
    phone: 113,
    email: 'duong@gmail.com',
    address: 'em o bac giang'
  },
    {
      id: 2,
      name: 'DuongCC Bac Giang',
      phone: 114,
      email: 'duongsida@gmail.com',
      address: 'em o bac giang'
    },
    {
      id: 3,
      name: 'DuongCC dau troc',
      phone: 115,
      email: 'duongxike@gmail.com',
      address: 'em o bac giang'
    },
    {
      id: 4,
      name: 'Duong so vo',
      phone: 116,
      email: 'duongJapan@gmail.com',
      address: 'em o bac giang'
    },
    {
      id: 5,
      name: 'DuongCC japan',
      phone: 117,
      email: 'duong123@gmail.com',
      address: 'em o bac giang'
    }, {
      id: 6,
      name: 'DuongCC choc ngoay',
      phone: 911,
      email: 'duongchocngoay12@gmail.com',
      address: 'em o bac giang'
    }
  ];
  newId: number;
  newName: string;
  newPhone: number;
  newEmail: string;
  newAddress: string;
  user: IUser[] = [
    {
      id: this.newId,
      name: this.newName,
      phone: this.newPhone,
      email: this.newEmail,
      address: this.newAddress
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.result = this.users;
  }

  // tslint:disable-next-line:typedef
  showHideEmail() {
    this.hidden = !this.hidden;
  }

  // tslint:disable-next-line:typedef
  search(event) {
    console.log(event);
    // console.log(this.filterUSer(event));
    this.result = (event) ? this.filterUSer(event) : this.users;

  }

  // tslint:disable-next-line:typedef
  filterUSer(keyword) {
    return this.users.filter(user => {
      // tslint:disable-next-line:triple-equals
      return user.name.toLowerCase().indexOf(keyword) != -1;
    });
  }

  // tslint:disable-next-line:typedef
  remove(id) {
    if (confirm('are you sure???')) {
      this.users.splice((id - 1), 1);
      this.message = 'Xoa Thanh Cong!!!';
    }
  }


  // tslint:disable-next-line:typedef
  edit(id) {
    // @ts-ignore
    this.newId = this.users[id].id;
    this.newName = this.users[id].name;
    this.newPhone = this.users[id].phone;
    this.newEmail = this.users[id].email;
    this.newAddress = this.users[id].address;
    // this.user = this.users[id];
    this.index = id;

  }

  // tslint:disable-next-line:typedef
  update(id) {
    // @ts-ignore
    console.log(id);
    // @ts-ignore
    this.user = this.users[id];
    // @ts-ignore
    this.user.id = this.newId;
    // @ts-ignore
    this.user.name = this.newName;
    // @ts-ignore
    this.user.phone = this.newPhone;
    // @ts-ignore
    this.user.email = this.newEmail;
    // @ts-ignore
    this.user.address = this.newAddress;
    console.log(this.user);

  }

  // tslint:disable-next-line:typedef
  add() {
    // @ts-ignore
    this.users.unshift(
      {
        id: this.newId,
        name: this.newName,
        phone: this.newPhone,
        email: this.newEmail,
        address: this.newAddress
      }
    );
    this.newId = Number('');
    this.newName = '';
    this.newPhone = Number('');
    this.newEmail = '';
    this.newAddress = '';
  }
}
