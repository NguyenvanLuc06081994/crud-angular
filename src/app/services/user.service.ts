import {Injectable} from '@angular/core';
import {IUser} from '../iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [

    {
      id: 1,
      name: 'Duong',
      phone: 113,
      email: 'duong@gmail.com',
      address: 'em o bac giang',
      role_id: 1
    },
    {
      id: 2,
      name: 'Duong Bac Giang',
      phone: 114,
      email: 'duongsida@gmail.com',
      address: 'em o bac giang',
      role_id: 2
    },
    {
      id: 3,
      name: 'Duong dau troc',
      phone: 115,
      email: 'duongxike@gmail.com',
      address: 'em o bac giang',
      role_id: 3
    },
    {
      id: 4,
      name: 'Duong so vo',
      phone: 116,
      email: 'duongJapan@gmail.com',
      address: 'em o bac giang',
      role_id: 2
    },
    {
      id: 5,
      name: 'Duong japan',
      phone: 117,
      email: 'duong123@gmail.com',
      address: 'em o bac giang',
      role_id: 2
    },
    {
      id: 6,
      name: 'Duong choc ngoay',
      phone: 911,
      email: 'duongchocngoay12@gmail.com',
      address: 'em o bac giang',
      role_id: 1
    }
  ];

  constructor() {
  }

  getAll(): IUser[] {
    return this.users;
  }

  remove(id: number): void {
    this.users.splice(id, 1);
  }

  add(user: IUser): void {
    this.users.push(user);
  }

  getUserById(id: number): IUser {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.users.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (this.users[i].id == id) {
        return this.users[i];
      }
    }
  }
  // tslint:disable-next-line:typedef
  edit(id: number): IUser {
    return this.getUserById(id);
  }
}
