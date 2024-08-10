import { Component } from '@angular/core';
import { CommonModule, NgClass, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList, faColumns, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, NgIf, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  faList = faList;
  faColumns = faColumns;
  faBars = faBars;

  isExpanded = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    document.documentElement.style.setProperty(
      '--sidebar-width',
      this.isExpanded ? '300px' : '80px'
    );
  }
}
