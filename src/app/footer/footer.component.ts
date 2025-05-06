import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  email = 'dougbriet@gmail.com';
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
