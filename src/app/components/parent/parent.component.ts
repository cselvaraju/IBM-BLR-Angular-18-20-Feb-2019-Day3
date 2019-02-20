import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  favDish: string;
  favActor: string;
  data4child: string;
  childFavCountry: string;

  constructor() { }

  ngOnInit() {
    this.favDish = '';
    this.favActor = '';
    this.data4child = '';
    this.childFavCountry = '';
  }

  sendData2Child() {
    this.data4child = this.favActor;
  }

  handleCountryEvent(event) {
    // console.log(event);
    this.childFavCountry = event;
  }
}
