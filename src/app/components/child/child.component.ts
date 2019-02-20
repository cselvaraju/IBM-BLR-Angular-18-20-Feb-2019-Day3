import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentFavDish: string;
  @Input() parentFavActor: string;

  @Output() countryEvent = new EventEmitter();

  favCountry: string;
  data4Parent: string;

  constructor() { }

  ngOnInit() {
    this.favCountry = '';
    this.data4Parent = '';
  }

  sendData2Parent() {
    this.countryEvent.emit(this.favCountry);
  }

}
