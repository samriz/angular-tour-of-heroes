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

  getHeroes(): void
  {
    //this.heroes = this.HeroService.getHeroes();

    //wait for the Observable to emit the array of heroes, which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property
    this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
