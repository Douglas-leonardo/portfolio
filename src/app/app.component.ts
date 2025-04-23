import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { PortfolioComponent } from "./portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  standalone: true, // Certifique-se de que o componente é standalone
  imports: [CommonModule, PortfolioComponent], // Adicione o CommonModule aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
