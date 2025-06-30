import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from './services/translation.service';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PortfolioComponent],
  template: `
    <app-portfolio></app-portfolio>
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.setupMetaTags();
    this.subscription.add(
      this.translationService.currentLanguage$.subscribe(lang => {
        this.updateMetaTags(lang);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setupMetaTags(): void {
    // Meta tags básicas
    this.meta.addTags([
      { name: 'description', content: 'Douglas Leonardo - Desenvolvedor Front End & QA. Especializado em Angular, TypeScript e testes automatizados.' },
      { name: 'keywords', content: 'desenvolvedor, front-end, QA, Angular, TypeScript, JavaScript, Cypress, Jest' },
      { name: 'author', content: 'Douglas Leonardo' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      
      // Open Graph
      { property: 'og:title', content: 'Douglas Leonardo - Desenvolvedor Front End & QA' },
      { property: 'og:description', content: 'Portfólio profissional com projetos em Angular, TypeScript e automação de testes.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://seu-dominio.com' },
      { property: 'og:image', content: 'assets/images/icons/douglasFoto.jpg' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Douglas Leonardo - Desenvolvedor Front End & QA' },
      { name: 'twitter:description', content: 'Portfólio profissional com projetos em Angular, TypeScript e automação de testes.' },
      { name: 'twitter:image', content: 'assets/images/icons/douglasFoto.jpg' },
      
      // Canonical
      { rel: 'canonical', href: 'https://seu-dominio.com' }
    ]);

    this.title.setTitle('Douglas Leonardo - Desenvolvedor Front End & QA');
  }

  private updateMetaTags(language: Language): void {
    const metaData = {
      pt: {
        title: 'Douglas Leonardo - Desenvolvedor Front End & QA',
        description: 'Portfólio profissional com projetos em Angular, TypeScript e automação de testes. Desenvolvedor especializado em criar soluções web com design moderno.',
        keywords: 'desenvolvedor, front-end, QA, Angular, TypeScript, JavaScript, Cypress, Jest, São Paulo'
      },
      en: {
        title: 'Douglas Leonardo - Front End Developer & QA',
        description: 'Professional portfolio with Angular, TypeScript and test automation projects. Developer specialized in creating web solutions with modern design.',
        keywords: 'developer, front-end, QA, Angular, TypeScript, JavaScript, Cypress, Jest, São Paulo'
      }
    };

    const data = metaData[language];
    
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'keywords', content: data.keywords });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
  }
}
