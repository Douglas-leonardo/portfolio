import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, distinctUntilChanged } from 'rxjs';

export type Language = 'pt' | 'en';

export interface Translations {
  // Home Section
  home: {
    name: string;
    profession: string;
    viewProjects: string;
    contact: string;
  };
  
  // About Section
  about: {
    title: string;
    tagline: string;
    bio1: string;
    quote: string;
  };
  
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    testing: string;
    tools: string;
  };
  
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
  };
  
  // Certificates Section
  certificates: {
    title: string;
    subtitle: string;
  };
  
  // Footer
  footer: {
    rights: string;
  };
  
  // Navigation
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    certificates: string;
    contact: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguageSubject = new BehaviorSubject<Language>('pt');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();
  
  // Cache para traduções
  private translationCache = new Map<string, string>();

  private translations: Record<Language, Translations> = {
    pt: {
      home: {
        name: 'Douglas Leonardo',
        profession: 'Desenvolvedor Front End & QA',
        viewProjects: 'Ver Projetos',
        contact: 'Contato'
      },
      about: {
        title: '// Sobre mim',
        tagline: 'Desenvolvedor Front-end & QA com visão holística',
        bio1: 'Combinando habilidades técnicas e pensamento crítico, atuo na interseção entre desenvolvimento e qualidade para criar produtos digitais excepcionais.',
        quote: 'Acredito que código bem escrito e bem testado é a base para experiências digitais memoráveis.'
      },
      skills: {
        title: '// Habilidades',
        subtitle: 'Tecnologias e ferramentas que utilizo',
        frontend: 'Front-end',
        testing: 'QA & Automação',
        tools: 'Ferramentas'
      },
      projects: {
        title: '// Projetos',
        subtitle: 'Alguns dos meus trabalhos recentes',
        viewProject: 'Ver Projeto',
        viewCode: 'Ver Código'
      },
      certificates: {
        title: '// Certificados',
        subtitle: 'Certificações e cursos'
      },
      footer: {
        rights: '© 2024 Douglas Leonardo. Todos os direitos reservados.'
      },
      nav: {
        home: 'Início',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        certificates: 'Certificados',
        contact: 'Contato'
      }
    },
    en: {
      home: {
        name: 'Douglas Leonardo',
        profession: 'Front End Developer & QA',
        viewProjects: 'View Projects',
        contact: 'Contact'
      },
      about: {
        title: '// About me',
        tagline: 'Front-end Developer & QA with holistic vision',
        bio1: 'Combining technical skills and critical thinking, I work at the intersection of development and quality to create exceptional digital products.',
        quote: 'I believe that well-written and well-tested code is the foundation for memorable digital experiences.'
      },
      skills: {
        title: '// Skills',
        subtitle: 'Technologies and tools I use',
        frontend: 'Front-end',
        testing: 'QA & Automation',
        tools: 'Tools'
      },
      projects: {
        title: '// Projects',
        subtitle: 'Some of my recent work',
        viewProject: 'View Project',
        viewCode: 'View Code'
      },
      certificates: {
        title: '// Certificates',
        subtitle: 'Certifications and courses'
      },
      footer: {
        rights: '© 2024 Douglas Leonardo. All rights reserved.'
      },
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        certificates: 'Certificates',
        contact: 'Contact'
      }
    }
  };

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
    if (savedLanguage === 'pt' || savedLanguage === 'en') {
      this.currentLanguageSubject.next(savedLanguage);
    }
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: Language): void {
    if (language !== this.currentLanguageSubject.value) {
      this.currentLanguageSubject.next(language);
      localStorage.setItem('preferredLanguage', language);
      this.clearCache(); // Limpa cache ao trocar idioma
    }
  }

  getTranslations(): Translations {
    return this.translations[this.getCurrentLanguage()];
  }

  getTranslation(key: string): string {
    const cacheKey = `${this.getCurrentLanguage()}:${key}`;
    
    if (this.translationCache.has(cacheKey)) {
      return this.translationCache.get(cacheKey)!;
    }

    const keys = key.split('.');
    let value: any = this.translations[this.getCurrentLanguage()];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    const result = value || key;
    this.translationCache.set(cacheKey, result);
    
    return result;
  }

  // Observable para traduções específicas
  getTranslation$(key: string): Observable<string> {
    return this.currentLanguage$.pipe(
      map(() => this.getTranslation(key)),
      distinctUntilChanged()
    );
  }

  private clearCache(): void {
    this.translationCache.clear();
  }
} 