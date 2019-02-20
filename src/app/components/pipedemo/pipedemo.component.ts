import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  message: string;
  product: {};
  today: Date;
  price: number;
  myText: string;

  constructor() { }

  ngOnInit() {
    this.message = 'heLLo WOrlD';
    this.product = { name: 'Notebook', price: 25.6};
    this.today = new Date();
    this.price = 45.6;
    this.myText = '';
  }

}
