import {Injectable} from '@angular/core';
import {IRole} from '../irole';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roles: IRole[] = [
    {
      id: 1,
      name: 'admin'
    },
    {
      id: 2,
      name: 'user'
    },
    {
      id: 3,
      name: 'editer'
    }
  ];

  constructor() {
  }

  getAll(): IRole[] {
    return this.roles;
  }
}
