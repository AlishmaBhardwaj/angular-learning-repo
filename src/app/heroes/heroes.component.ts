import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  hero1: Hero = {
    id: 1,
    name: 'Iron Man',
    real: 'Tony Stark',
  };
  hero2: Hero = {
    id: 2,
    name: 'Captain America',
    real: 'Steve Rogers',
  };

  //mock-heroes.ts
  heroes=HEROES;


  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}
}

