import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
@Output() keyword = new EventEmitter<string>();
  constructor() {
  }

  // tslint:disable-next-line:typedef
  getKeyWord(event) {
    let value: string;
    value = event.target.value.toLowerCase();
    // console.log(value);
    this.keyword.emit(value);
  }

  ngOnInit(): void {
  }

}
