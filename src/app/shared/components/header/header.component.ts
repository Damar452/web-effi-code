import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { locales } from './header-consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public countries: any[] = [];
  public countrySelected: any;
  @ViewChild('customMenuOptions') customMenuOptions!: ElementRef;

  constructor(private sidebarService: SidebarService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getCountries();
  }

  public toggleSidebar() {
    this.sidebarService.toggleSidebar(true);
  }

  private getCountries(): void {
    this.countries = locales.map( ({ lang, flag }) => {
      return {
        flag: `https://flagcdn.com/32x24/${flag.toLowerCase()}.png`,
        lang
      }
    })
    this.countrySelected = this.countries[0];
  }

  toggleOptions() {
    const optionsElement = this.customMenuOptions.nativeElement;
    const currentDisplay = optionsElement.style.display;
    if (currentDisplay === 'block') {
      this.renderer.setStyle(optionsElement, 'display', 'none');
    } else {
      this.renderer.setStyle(optionsElement, 'display', 'block');
    }
  }

  changeCountry(country: any) {
    this.countrySelected = country;
    this.toggleOptions();
  }

}
