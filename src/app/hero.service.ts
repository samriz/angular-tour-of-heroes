import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//@Injectable() decorator marks the class as one that participates in the dependency injection system
@Injectable({
  providedIn: 'root' //this allows Angular to optimize an application by removing the service if it isn't used
})
//provides an injectable service, and it can also have its own injected dependencies
export class HeroService //any application class can use this service to get heroes
{
  constructor() {}
  getHeroes(): Hero[] 
  {
    return HEROES;
  }
}
