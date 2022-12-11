import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { map, Observable, startWith } from 'rxjs';


@Component({
  
  selector: 'app-select-customs',
  templateUrl: './select-customs.component.html',
  styleUrls: ['./select-customs.component.css']
})
export class SelectCustomsComponent implements OnInit {
  [x: string]: any;

 
  selectFormControl = new FormControl();
  searchTextboxControl = new FormControl();
  selectedValues = [];
  data: string[] = []
  filteredOptions!: Observable<any[]>;
 

  

  constructor() { }
     
 
// CountryName=[
//     {id:"1",name:"Afghanistan"},
//     {id:"2",name:"Australia"},
//     {id:"3",name:"Bangladesh"},
//     {id:"4",name:"Brazil"},
//     {id:"5",name:"Canada"},
//     {id:"6",name:"China"},
//     {id:"7",name:"France"},
//     {id:"8",name:"India"},
//     {id:"9",name:"Italy"},
//     {id:"10",name:"Japan"},
//     {id:"11",name:"Kuwait"},
//     {id:"12",name:"Malaysia"},
//     {id:"13",name:"New Zealand"},
//     {id:"14",name:"Pakistan"},
//     {id:"15",name:"Russia"},
//     {id:"16",name:"Singapore"},
//     {id:"17",name:"Sri Lanka"},
//     {id:"18",name:"United Kingdom"},
//     {id:"19",name:"United States of America"},
//     {id:"20",name:"	Yemen"},
//   ]

  ngOnInit() {
    this.data= [
      'Afghanistan',
      'Australia',
      'Bangladesh',
      'Bangalore',
      'Canada',
      'China',
      'India',
      'Japan',
      'Russia',
      'Singapore',
      'Yemen'
    ];

    this.filteredOptions = this.searchTextboxControl.valueChanges
    .pipe(
      startWith<string>(''),
      map(name => this._filter(name))
    );
  }
  private _filter(name: string): String[] {
    const filterValue = name.toLowerCase();
     let filteredList = this.data.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    return filteredList;

}


}




