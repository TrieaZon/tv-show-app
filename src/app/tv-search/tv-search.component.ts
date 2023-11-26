import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})
export class TvSearchComponent {
  search = new FormControl('', [Validators.minLength(3)])
  
  constructor(){
    this.search.valueChanges.subscribe(searchValue => {
      
      if(!this.search.invalid){
        console.log(searchValue);
      }
      
    })
    }
  }
