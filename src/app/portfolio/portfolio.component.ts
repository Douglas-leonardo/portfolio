import { Component, HostListener, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ParticulasComponent } from '../particulas/particulas.component';
import { AboutSectionComponent } from '../about-section/about-section.component';
import { CertificatesSectionComponent } from '../certificates-section/certificates-section.component';
import { HomeSectionComponent } from '../home-section/home-section.component';
import { ProjectSectionComponent } from "../project-section/project-section.component";
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from "../footer/footer.component";
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { LanguageSwitcherComponent } from '../components/language-switcher/language-switcher.component';
import { TranslationService, Language } from '../services/translation.service';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ParticulasComponent, AboutSectionComponent, CertificatesSectionComponent, HomeSectionComponent, ProjectSectionComponent, HeaderComponent, FooterComponent, SkillsSectionComponent, LanguageSwitcherComponent, ContactSectionComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit, OnDestroy {

  showAll = false;
  isMenuActive = false;
  showScrollButton = false;
  currentLanguage: Language = 'pt';
  private subscription = new Subscription();

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.translationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
      })
    );
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

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
