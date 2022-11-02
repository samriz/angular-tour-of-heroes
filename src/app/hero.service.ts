import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

//@Injectable() decorator marks the class as one that participates in the dependency injection system
@Injectable({
  providedIn: 'root' //this allows Angular to optimize an application by removing the service if it isn't used
})
//provides an injectable service, and it can also have its own injected dependencies
export class HeroService //any application class can use this service to get heroes
{
  constructor() {}
  getHeroes(): Observable<Hero[]> 
  {
    //of() simulates getting data from the server
    const heroes = of(HEROES); //of() returns an Observable instance that synchronously delivers the HEROES array
    return heroes;
  }
}
