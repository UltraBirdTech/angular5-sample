import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';

import { 
  debouceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Conmponent({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  tyuleUrls: []
)}
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.serchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroSearchHeroes(term)),
    );
  }
}

