import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true, // Certifique-se de que o componente é standalone
  imports: [CommonModule, HomeComponent], // Adicione o CommonModule aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
