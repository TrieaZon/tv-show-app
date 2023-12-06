import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})
export class TvSearchComponent {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('', [Validators.minLength(3)])
  
  
  constructor(){
    
    this.search.valueChanges
    .pipe(debounceTime(500))
    .subscribe(searchValue => {
      
      if(!this.search.invalid){
        this.searchEvent.emit(searchValue??undefined)
      }
      
    })
    }
  }