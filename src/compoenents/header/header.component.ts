import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isLabelVisible: boolean = true;
  isDropdownOpen: boolean = false;

  close_icon = X;


  closeLabel() {
    this.isLabelVisible = !this.isLabelVisible;
  }


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
