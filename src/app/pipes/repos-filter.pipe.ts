import { Pipe, PipeTransform } from '@angular/core';
import { Repos } from '../repos.model';

@Pipe({
  name: 'reposFilter'
})
export class ReposFilterPipe implements PipeTransform {

  transform(repos: Repos[], searchTerm: string): Repos[] {
    if (!repos || !searchTerm) {
      return repos;
    }

    return repos.filter(repo => 
      repo.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
