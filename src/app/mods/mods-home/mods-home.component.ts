import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css',
})
export class ModsHomeComponent {
  modalOpen = false;
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
