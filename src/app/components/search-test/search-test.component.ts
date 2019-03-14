import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-search-test',
  templateUrl: './search-test.component.html',
  styleUrls: ['./search-test.component.css']
})
export class SearchTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  name = 'Angular';

  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
}
