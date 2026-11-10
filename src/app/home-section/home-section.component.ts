import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit, AfterViewInit, OnDestroy {
  translations: any;
  currentLanguage: Language = 'pt';
  private subscription: Subscription = new Subscription();

  // Valores finais dos contadores
  private readonly targets = { years: 5, companies: 2, certificates: 13, automations: 200 };

  // Valores exibidos (animados)
  stats = { years: 0, companies: 0, certificates: 0, automations: 0 };

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.translationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
        this.translations = this.translationService.getTranslations();
      })
    );
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    const statsEl = document.querySelector('.home-hero__stats');
    if (statsEl) observer.observe(statsEl);
  }

  private animateCounters(): void {
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = this.easeOut(step / steps);
      this.stats = {
        years:        Math.round(this.targets.years * progress),
        companies:    Math.round(this.targets.companies * progress),
        certificates: Math.round(this.targets.certificates * progress),
        automations:  Math.round(this.targets.automations * progress)
      };
      if (step >= steps) clearInterval(timer);
    }, interval);
  }

  private easeOut(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
