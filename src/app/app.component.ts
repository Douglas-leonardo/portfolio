import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
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

  private readonly siteUrl = 'https://seu-dominio.com'; // TODO: Atualizar com URL real
  private readonly baseImageUrl = 'assets/images/icons/douglasFoto.jpg';

  constructor(
    private title: Title,
    private meta: Meta,
    private translationService: TranslationService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.setupMetaTags();
    this.setupSchemaOrg();
    this.subscription.add(
      this.translationService.currentLanguage$.subscribe(lang => {
        this.updateMetaTags(lang);
        this.updateDocumentLang(lang);
        this.updateSchemaOrg(lang);
      })
    );
    // Atualiza lang inicial
    this.updateDocumentLang(this.translationService.getCurrentLanguage());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setupMetaTags(): void {
    let currentUrl = this.siteUrl;
    if (isPlatformBrowser(this.platformId) && window.location) {
      currentUrl = window.location.href;
    }
    const imageUrl = currentUrl.replace(/\/$/, '') + '/' + this.baseImageUrl.replace(/^\//, '');
    
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
      { property: 'og:url', content: currentUrl },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:locale', content: 'pt_BR' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Douglas Leonardo - Desenvolvedor Front End & QA' },
      { name: 'twitter:description', content: 'Portfólio profissional com projetos em Angular, TypeScript e automação de testes.' },
      { name: 'twitter:image', content: imageUrl },
      
      // Canonical será adicionado como link tag
    ]);

    this.title.setTitle('Douglas Leonardo - Desenvolvedor Front End & QA');
    this.updateCanonicalLink(currentUrl);
  }

  private updateMetaTags(language: Language): void {
    let currentUrl = this.siteUrl;
    if (isPlatformBrowser(this.platformId) && window.location) {
      currentUrl = window.location.href;
    }
    const metaData = {
      pt: {
        title: 'Douglas Leonardo - Desenvolvedor Front End & QA',
        description: 'Portfólio profissional com projetos em Angular, TypeScript e automação de testes. Desenvolvedor especializado em criar soluções web com design moderno.',
        keywords: 'desenvolvedor, front-end, QA, Angular, TypeScript, JavaScript, Cypress, Jest, São Paulo',
        locale: 'pt_BR'
      },
      en: {
        title: 'Douglas Leonardo - Front End Developer & QA',
        description: 'Professional portfolio with Angular, TypeScript and test automation projects. Developer specialized in creating web solutions with modern design.',
        keywords: 'developer, front-end, QA, Angular, TypeScript, JavaScript, Cypress, Jest, São Paulo',
        locale: 'en_US'
      },
      es: {
        title: 'Douglas Leonardo - Desarrollador Front End & QA',
        description: 'Portafolio profesional con proyectos en Angular, TypeScript y automatización de pruebas. Desarrollador especializado en crear soluciones web con diseño moderno.',
        keywords: 'desarrollador, front-end, QA, Angular, TypeScript, JavaScript, Cypress, Jest, São Paulo',
        locale: 'es_ES'
      }
    };

    const data = metaData[language];
    
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    this.meta.updateTag({ name: 'keywords', content: data.keywords });
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: currentUrl });
    this.meta.updateTag({ property: 'og:locale', content: data.locale });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    // Atualiza canonical link
    this.updateCanonicalLink(currentUrl);
  }

  private updateDocumentLang(language: Language): void {
    try {
      const langMap: Record<Language, string> = {
        pt: 'pt-BR',
        en: 'en-US',
        es: 'es-ES'
      };
      
      if (this.document?.documentElement) {
        this.document.documentElement.lang = langMap[language];
      }
    } catch (error) {
      console.warn('Erro ao atualizar lang do documento:', error);
    }
  }

  private setupSchemaOrg(): void {
    this.updateSchemaOrg(this.translationService.getCurrentLanguage());
  }

  private updateCanonicalLink(url: string): void {
    try {
      if (this.document) {
        let existingLink = this.document.querySelector('link[rel="canonical"]');
        if (existingLink) {
          existingLink.setAttribute('href', url);
        } else {
          const link = this.document.createElement('link');
          link.rel = 'canonical';
          link.href = url;
          if (this.document.head) {
            this.document.head.appendChild(link);
          }
        }
      }
    } catch (error) {
      console.warn('Erro ao atualizar canonical link:', error);
    }
  }

  private updateSchemaOrg(language: Language): void {
    try {
      let currentUrl = this.siteUrl;
      if (isPlatformBrowser(this.platformId) && window.location) {
        currentUrl = window.location.href;
      }
      const imageUrl = currentUrl.replace(/\/$/, '') + '/' + this.baseImageUrl.replace(/^\//, '');

      const schemaData = {
        pt: {
          name: 'Douglas Leonardo',
          jobTitle: 'Desenvolvedor Front End & QA',
          description: 'Desenvolvedor especializado em Angular, TypeScript e automação de testes.',
          url: currentUrl
        },
        en: {
          name: 'Douglas Leonardo',
          jobTitle: 'Front End Developer & QA',
          description: 'Developer specialized in Angular, TypeScript and test automation.',
          url: currentUrl
        },
        es: {
          name: 'Douglas Leonardo',
          jobTitle: 'Desarrollador Front End & QA',
          description: 'Desarrollador especializado en Angular, TypeScript y automatización de pruebas.',
          url: currentUrl
        }
      };

      const data = schemaData[language];

      const schema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': data.name,
        'jobTitle': data.jobTitle,
        'description': data.description,
        'url': data.url,
        'image': imageUrl,
        'sameAs': [
          // TODO: Adicionar links de redes sociais
        ]
      };

      // Remove schema anterior se existir
      if (this.document) {
        let existingScript = this.document.getElementById('schema-org');
        if (existingScript) {
          existingScript.remove();
        }

        // Adiciona novo schema
        const script = this.document.createElement('script');
        script.id = 'schema-org';
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        
        if (this.document.head) {
          this.document.head.appendChild(script);
        }
      }
    } catch (error) {
      console.warn('Erro ao atualizar Schema.org:', error);
    }
  }
}
