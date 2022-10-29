import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//@Injectable() decorator marks the class as one that participates in the dependency injection system
@Injectable({
  providedIn: 'root'
})
export class HeroService //provides an injectable service, and it can also have its own injected dependencies
{
  constructor() {}
  getHeroes(): Hero[] 
  {
    return HEROES;
  }
}
