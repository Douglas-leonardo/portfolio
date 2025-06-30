import { Component, HostListener, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticulasComponent } from '../particulas/particulas.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { CertificatesSectionComponent } from '../certificates-section/certificates-section.component';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { ProjectSectionComponent } from "../project-section/project-section.component";
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { LanguageSwitcherComponent } from '../components/language-switcher/language-switcher.component';

@Injectable({ providedIn: 'root' })

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ParticulasComponent, AboutSectionComponent, CertificatesSectionComponent, HomeSectionComponent, ProjectSectionComponent, HeaderComponent, FooterComponent, SkillsSectionComponent, LanguageSwitcherComponent],
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

  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const shouldShow = window.scrollY > 300;
    if (shouldShow !== this.showScrollButton) {
      this.showScrollButton = shouldShow;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
