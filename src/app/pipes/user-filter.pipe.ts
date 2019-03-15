import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../users.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: Users[], searchTerm: string): Users[] {
    if (!users || !searchTerm) {
      return users;
    }

    return users.filter(user => 
      user.login.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
