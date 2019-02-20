import { Component, OnInit } from '@angular/core';

import { Actor } from '../../models/actor.model';

import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {

  actorList: Actor[];
  tmpActorList: Actor[];
  newName: string;
  newCity: string;
  tmpActor: Actor;
  formFlag: boolean;
  selectedIndex: number;

  constructor(private actorService: ActorService) { }

  ngOnInit() {
    this.actorList = this.actorService.getActorList();

    this.tmpActorList = this.actorList.slice();

    this.newCity = this.newName = '';
    this.tmpActor = {name: '', city: ''};
    this.formFlag = true;
    this.selectedIndex = -1;
  }

  deleteActor(index: number) {
    // this.actorList.splice(index, 1);
    this.actorService.deleteActor(index);
  }

  addActor() {
    // const tempActor = {
    //   name: this.newName,
    //   city: this.newCity
    // };
    // this.actorList.push(tempActor);
    // this.actorList.push(this.tmpActor);
    this.actorService.addActor(this.tmpActor);
    this.tmpActor = { name: '', city: '' };
  }

  toggleForm() {
    this.formFlag = !this.formFlag;
  }

  editActor(index: number) {
    this.selectedIndex = index;

    // Don't do this - SHALLOW COPY!!!
    // this.tmpActor = this.actorList[index];

    // Solution - DEEP COPY
    // Approach - 1: Not Recommended
    // this.tmpActor = {
    //   name: this.actorList[index].name,
    //   city: this.actorList[index].city
    // };

    // Approach - 2: Recommended approach
    this.tmpActor = Object.assign({}, this.actorList[index]);
  }

  saveActor(index: number) {
    this.actorService.updateActor(index, this.actorList[index]);
    this.selectedIndex = -1;
  }

  cancelEdit(index: number) {
    this.actorList[index] = this.tmpActor;
    this.selectedIndex = -1;
  }

  handleKey(index: number, event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.cancelEdit(index);
    }
  }

  sortList(prop: string, direction: string) {
    const comparator = (first: Actor, second: Actor) => {
      if (direction === 'ascending') {
        if (first[prop] < second[prop]) {
          return -1;
        }
        if (first[prop] > second[prop]) {
          return 1;
        }
        return 0;
      }
      if (direction === 'descending') {
        if (first[prop] > second[prop]) {
          return -1;
        }
        if (first[prop] < second[prop]) {
          return 1;
        }
        return 0;
      }
    };
    this.actorList.sort(comparator);
  }

  restoreList() {
    this.actorList = this.tmpActorList.slice();
  }
}

