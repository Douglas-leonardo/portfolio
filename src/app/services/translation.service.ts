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
        profession: 'Desenvolvedor Front End & QA',
        viewProjects: 'Ver Projetos',
        contact: 'Contato'
      },
      about: {
        title: '// Sobre mim',
        tagline: 'QA Engineer & Desenvolvedor Front-end com visão de qualidade de ponta a ponta',
        bio1: 'QA Engineer com experiência em testes manuais e automatizados, focado em garantir a qualidade de sistemas por meio da validação de regras de negócio, testes funcionais, regressão e API. Também possuo experiência com automação de testes e participação em processos ágeis, contribuindo para a entrega de produtos mais estáveis, escaláveis e com melhor experiência para o usuário.',
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
        profession: 'Front End Developer & QA',
        viewProjects: 'View Projects',
        contact: 'Contact'
      },
      about: {
        title: '// About me',
        tagline: 'QA Engineer & Front-end Developer with a holistic quality mindset',
        bio1: 'QA Engineer with experience in manual and automated testing, focused on ensuring system quality through business rules validation, functional, regression, and API testing. I also have experience with test automation and participation in agile processes, contributing to the delivery of more stable, scalable products with a better user experience.',
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
        profession: 'Desarrollador Front End & QA',
        viewProjects: 'Ver Proyectos',
        contact: 'Contacto'
      },
      about: {
        title: '// Sobre mí',
        tagline: 'QA Engineer y Desarrollador Front-end con visión holística de calidad',
        bio1: 'QA Engineer con experiencia en pruebas manuales y automatizadas, enfocado en garantizar la calidad de sistemas mediante la validación de reglas de negocio, pruebas funcionales, regresión y API. También tengo experiencia en automatización de pruebas y participación en procesos ágiles, contribuyendo a la entrega de productos más estables, escalables y con mejor experiencia para el usuario.',
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
