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
  };
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
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
        en: '2022-Present'
      },
      title: {
        pt: 'Desenvolvedor Front-end & QA',
        en: 'Front-end Developer & QA'
      },
      description: {
        pt: 'Desenvolvimento de interfaces com foco em performance e experiência do usuário',
        en: 'Interface development with focus on performance and user experience'
      }
    },
    {
      year: {
        pt: '2020-2022',
        en: '2020-2022'
      },
      title: {
        pt: 'Desenvolvedor Júnior',
        en: 'Junior Developer'
      },
      description: {
        pt: 'Primeiras experiências profissionais em desenvolvimento web',
        en: 'First professional experiences in web development'
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
