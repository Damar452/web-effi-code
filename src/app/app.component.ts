import { Component } from '@angular/core';
import { SidebarService } from './core/services/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sidebarOpen!: Observable<boolean>;
  public isLoading = true;

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.getSidebarStatus();
    this.changeLoading();
  }

  public changeLoading(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  public toggleSidebar(): void {
    this.sidebarService.toggleSidebar(false);
  }

  private getSidebarStatus() {
    this.sidebarOpen = this.sidebarService.sidebarOpen$;
  }
}
