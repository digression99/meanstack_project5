import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../classes/hero';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero : Hero;

  constructor(private heroService : HeroService,
              private route : ActivatedRoute,
              private location : Location) { }

  ngOnInit() : void {
    this.route.paramMap
      .switchMap((params:ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack() {
    this.location.back();
  }
}