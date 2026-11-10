import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, distinctUntilChanged } from 'rxjs';

export type Language = 'pt' | 'en' | 'es';

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
        profession: 'QA Automation Engineer',
        viewProjects: 'Ver Projetos',
        contact: 'Contato'
      },
      about: {
        title: '// Sobre mim',
        tagline: 'QA Automation Engineer especializado em testes de software e agentes de IA',
        bio1: 'QA Automation Engineer com experiência em testes manuais, automatizados e de agentes de IA conversacionais. Atuei na IBM em Quality Assurance de soluções com LLMs, RAG e IBM Watson Orchestrate. Sólida vivência em validação de regras de negócio, testes funcionais, regressão, API e desenvolvimento de frameworks de automação em Python e JavaScript.',
        quote: 'Acredito que qualidade não é uma fase, mas sim um processo contínuo que conecta desenvolvimento, testes e experiência do usuário.'
      },
      skills: {
        title: 'Habilidades',
        subtitle: 'Tecnologias e ferramentas que utilizo',
        frontend: 'Front-end',
        testing: 'QA & Automação',
        tools: 'Ferramentas'
      },
      projects: {
        title: 'Projetos',
        subtitle: 'Alguns dos meus trabalhos recentes',
        viewProject: 'Ver Projeto',
        viewCode: 'Ver Código'
      },
      certificates: {
        title: 'Certificados',
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
        profession: 'QA Automation Engineer',
        viewProjects: 'View Projects',
        contact: 'Contact'
      },
      about: {
        title: '// About me',
        tagline: 'QA Automation Engineer specialized in software testing and AI agents',
        bio1: 'QA Automation Engineer with experience in manual, automated, and AI conversational agent testing. Worked at IBM on Quality Assurance for LLM-based solutions, RAG pipelines, and IBM Watson Orchestrate. Strong background in business rules validation, functional, regression, and API testing, with expertise in building automation frameworks in Python and JavaScript.',
        quote: 'I believe that well-written and well-tested code is the foundation for exceptional digital experiences.'
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
    },
    es: {
      home: {
        name: 'Douglas Leonardo',
        profession: 'QA Automation Engineer',
        viewProjects: 'Ver Proyectos',
        contact: 'Contacto'
      },
      about: {
        title: '// Sobre mí',
        tagline: 'QA Automation Engineer especializado en pruebas de software y agentes de IA',
        bio1: 'QA Automation Engineer con experiencia en pruebas manuales, automatizadas y de agentes de IA conversacionales. Trabajé en IBM en Quality Assurance de soluciones con LLMs, RAG e IBM Watson Orchestrate. Sólida experiencia en validación de reglas de negocio, pruebas funcionales, regresión, API y desarrollo de frameworks de automatización en Python y JavaScript.',
        quote: 'Creo que un código bien escrito y bien probado es la base para experiencias digitales excepcionales.'
      },
      skills: {
        title: '// Habilidades',
        subtitle: 'Tecnologías y herramientas que utilizo',
        frontend: 'Front-end',
        testing: 'QA & Automatización',
        tools: 'Herramientas'
      },
      projects: {
        title: '// Proyectos',
        subtitle: 'Algunos de mis trabajos recientes',
        viewProject: 'Ver Proyecto',
        viewCode: 'Ver Código'
      },
      certificates: {
        title: '// Certificados',
        subtitle: 'Certificaciones y cursos'
      },
      footer: {
        rights: '© 2024 Douglas Leonardo. Todos los derechos reservados.'
      },
      nav: {
        home: 'Inicio',
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Proyectos',
        certificates: 'Certificados',
        contact: 'Contacto'
      }
    }
  };

  constructor() {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    // Sempre inicia em português
    this.currentLanguageSubject.next('pt');
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
