import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {

  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    this.observableService.getData().subscribe(
      (data) => console.log(data)
    );
  }

}
