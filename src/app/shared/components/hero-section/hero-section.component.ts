import { Component } from '@angular/core';
import { brands } from './hero-section-consts';

declare var $: any;

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {

  public brands = brands;
}
