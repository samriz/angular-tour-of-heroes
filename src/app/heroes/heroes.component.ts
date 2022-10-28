import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";

//component decorator for Heroes Component class
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit //component class
{
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  
  constructor() {}

  ngOnInit(): void {}

}
