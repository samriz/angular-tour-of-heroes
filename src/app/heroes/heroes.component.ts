import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

//component decorator for Heroes Component class
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit //component class
{
  /* hero: Hero = {
    id: 1,
    name: "Windstorm"
  }; */

  heroes: Hero[] = [];
  
  constructor(private HeroService: HeroService) //The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  //When Angular creates a HeroesComponent, the Dependency Injection system sets the heroService parameter to the singleton instance of HeroService.
  {}

  ngOnInit(): void 
  //ngOnInit lifecycle hook
  //Angular will call this at an appropriate time after constructing a HeroesComponent instance
  {
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void 
  {
    this.selectedHero = hero;
  }
  getHeroes(): void
  {
    this.heroes = this.HeroService.getHeroes();
  }
}
