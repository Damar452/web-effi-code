import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public sidebarOpen!: Observable<boolean>

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarOpen = this.sidebarService.sidebarOpen$;
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar(false);
  }

}
