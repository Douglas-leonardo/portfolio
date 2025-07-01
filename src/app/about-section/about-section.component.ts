import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

interface Translation {
  title: string;
  tagline: string;
  bio1: string;
  quote: string;
}

interface TimelineItem {
  year: {
    pt: string;
    en: string;
    es: string;
  };
  title: {
    pt: string;
    en: string;
    es: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit, OnDestroy {
  translations: any;
  currentLanguage: Language = 'pt';
  private subscription: Subscription = new Subscription();

  timelineItems: TimelineItem[] = [
    {
      year: {
        pt: '2022-Presente',
        en: '2022-Present',
        es: '2022-Presente'
      },
      title: {
        pt: 'Desenvolvedor Front-end & QA',
        en: 'Front-end Developer & QA',
        es: 'Desarrollador Front-end & QA'
      },
      description: {
        pt: 'Desenvolvimento de interfaces com foco em performance e experiência do usuário',
        en: 'Interface development with focus on performance and user experience',
        es: 'Desarrollo de interfaces con enfoque en rendimiento y experiencia del usuario'
      }
    },
    {
      year: {
        pt: '2020-2022',
        en: '2020-2022',
        es: '2020-2022'
      },
      title: {
        pt: 'Desenvolvedor Júnior',
        en: 'Junior Developer',
        es: 'Desarrollador Junior'
      },
      description: {
        pt: 'Primeiras experiências profissionais em desenvolvimento web',
        en: 'First professional experiences in web development',
        es: 'Primeras experiencias profesionales en desarrollo web'
      }
    }
  ];

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.translationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
        this.translations = this.translationService.getTranslations();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
