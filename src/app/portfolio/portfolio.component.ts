import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticulasComponent } from '../particulas/particulas.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { CertificatesSectionComponent } from '../certificates-section/certificates-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { ProjectSectionComponent } from "../project-section/project-section.component";
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ParticulasComponent, AboutSectionComponent, CertificatesSectionComponent, ContactSectionComponent, HomeSectionComponent, ProjectSectionComponent, HeaderComponent, FooterComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {

  showAll = false;
  isMenuActive = false;

  toggleShowAll() {
    this.showAll = !this.showAll;
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

}
