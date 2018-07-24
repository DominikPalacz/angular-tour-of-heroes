import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'; //xxx
import { MessageService } from './message.service'

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // getHeroes(): Observable<Hero[]> {
  //   //todo: send the message after fetching the heroes
  //   this.messageService.add('From HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  // of(HEROES) returns an Observable<Hero[]> that emits a single value,
  // the array of mock heroes.

  getHero(id: number): Observable<Hero> {
    // todo msg
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id))
  }
}
