import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service'

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //todo: send the message after fetching the heroes
    this.messageService.add('From HeroService: fetched heroes');
    return of(HEROES);
  }
  // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.

  getHero(id: number): Observable<Hero> {
    // todo msg
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id))
  }
}
