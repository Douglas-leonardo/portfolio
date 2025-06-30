import { Injectable } from '@angular/core';

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() {}

  trackEvent(event: AnalyticsEvent): void {
    // Implementação básica - pode ser integrada com Google Analytics, Mixpanel, etc.
    console.log('Analytics Event:', event);
    
    // Exemplo de integração com Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }
  }

  trackPageView(page: string): void {
    this.trackEvent({
      category: 'Navigation',
      action: 'Page View',
      label: page
    });
  }

  trackLanguageChange(language: string): void {
    this.trackEvent({
      category: 'User Interaction',
      action: 'Language Change',
      label: language
    });
  }

  trackProjectView(projectName: string): void {
    this.trackEvent({
      category: 'Portfolio',
      action: 'Project View',
      label: projectName
    });
  }

  trackContactClick(method: string): void {
    this.trackEvent({
      category: 'Contact',
      action: 'Contact Click',
      label: method
    });
  }

  trackSkillView(skillCategory: string): void {
    this.trackEvent({
      category: 'Portfolio',
      action: 'Skill View',
      label: skillCategory
    });
  }
} 