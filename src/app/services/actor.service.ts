import { Injectable } from '@angular/core';

import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorList: Actor[];

  constructor() {
    this.actorList = [
      { name: 'Amitabh Bachhan', city: 'Mumbai' },
      { name: 'Kamal Hasan', city: 'Chennai' },
      { name: 'Kajol', city: 'Mumbai' },
      { name: 'Jayapradha', city: 'Hyderabad' },
      { name: 'Rajnikant', city: 'Chennai' }
    ];
  }

  getActorList(): Actor[] {
    return this.actorList;
  }

  addActor(actor: Actor) {
    this.actorList.push(actor);
  }

  deleteActor(index: number) {
    this.actorList.splice(index, 1);
  }

  updateActor(index: number, newActor: Actor) {
    this.actorList.splice(index, 1, newActor);
  }
}
