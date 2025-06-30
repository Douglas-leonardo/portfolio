import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

interface Skill {
  name: {
    pt: string;
    en: string;
  };
  level: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  progress: string;
  icon: string;
  features: {
    pt: string[];
    en: string[];
  };
}

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit, OnDestroy {
  activeTab: string = 'frontend';
  currentLanguage: Language = 'pt';
  translations: any;
  private subscription: Subscription = new Subscription();

  frontendSkills: Skill[] = [
    {
      name: {
        pt: 'Angular',
        en: 'Angular'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced'
      },
      description: {
        pt: 'Desenvolvimento de aplicações SPA complexas com RxJS, NgRx e componentes reutilizáveis.',
        en: 'Development of complex SPA applications with RxJS, NgRx and reusable components.'
      },
      progress: '95%',
      icon: 'fab fa-angular',
      features: {
        pt: [
          'Componentes reutilizáveis',
          'Gestão de estado com NgRx',
          'RxJS e Observables',
          'Pipes e Directives'
        ],
        en: [
          'Reusable components',
          'State management with NgRx',
          'RxJS and Observables',
          'Pipes and Directives'
        ]
      }
    },
    {
      name: {
        pt: 'TypeScript',
        en: 'TypeScript'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced'
      },
      description: {
        pt: 'Tipagem estática e recursos avançados para JavaScript escalável.',
        en: 'Static typing and advanced features for scalable JavaScript.'
      },
      progress: '90%',
      icon: 'fas fa-code',
      features: {
        pt: [
          'Interfaces e Types',
          'Generics',
          'Decorators',
          'Integração com Angular'
        ],
        en: [
          'Interfaces and Types',
          'Generics',
          'Decorators',
          'Angular integration'
        ]
      }
    },
    {
      name: {
        pt: 'UI/UX Design',
        en: 'UI/UX Design'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate'
      },
      description: {
        pt: 'Criação de interfaces responsivas e experiências de usuário intuitivas.',
        en: 'Creating responsive interfaces and intuitive user experiences.'
      },
      progress: '75%',
      icon: 'fas fa-paint-brush',
      features: {
        pt: [
          'Design System',
          'Prototipagem',
          'Figma/Adobe XD',
          'Acessibilidade'
        ],
        en: [
          'Design System',
          'Prototyping',
          'Figma/Adobe XD',
          'Accessibility'
        ]
      }
    }
  ];

  backendSkills: Skill[] = [
    {
      name: {
        pt: 'Node.js',
        en: 'Node.js'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate'
      },
      description: {
        pt: 'Construção de APIs RESTful e aplicações server-side eficientes.',
        en: 'Building RESTful APIs and efficient server-side applications.'
      },
      progress: '60%',
      icon: 'fab fa-node-js',
      features: {
        pt: [
          'Express.js',
          'Autenticação JWT',
          'WebSockets',
          'Otimização de performance'
        ],
        en: [
          'Express.js',
          'JWT Authentication',
          'WebSockets',
          'Performance optimization'
        ]
      }
    },
    {
      name: {
        pt: 'Banco de Dados',
        en: 'Database'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate'
      },
      description: {
        pt: 'Modelagem e consulta em bancos relacionais e NoSQL.',
        en: 'Modeling and querying relational and NoSQL databases.'
      },
      progress: '80%',
      icon: 'fas fa-database',
      features: {
        pt: [
          'MongoDB',
          'PostgreSQL',
          'Firebase',
          'ORM/ODM'
        ],
        en: [
          'MongoDB',
          'PostgreSQL',
          'Firebase',
          'ORM/ODM'
        ]
      }
    },
    {
      name: {
        pt: 'Python',
        en: 'Python'
      },
      level: {
        pt: 'Básico',
        en: 'Basic'
      },
      description: {
        pt: 'Scripts de automação e desenvolvimento web básico.',
        en: 'Basic automation and web development scripts.'
      },
      progress: '60%',
      icon: 'fab fa-python',
      features: {
        pt: [
          'Flask',
          'Automações',
          'Web Scraping',
          'Scripting'
        ],
        en: [
          'Flask',
          'Automations',
          'Web Scraping',
          'Scripting'
        ]
      }
    },
    {
      name: {
        pt: 'Java',
        en: 'Java'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate'
      },
      description: {
        pt: 'Desenvolvimento de aplicações empresariais com Maven e integração com Firebase.',
        en: 'Enterprise application development with Maven and integration with Firebase.'
      },
      progress: '75%',
      icon: 'fab fa-java',
      features: {
        pt: [
          'Projetos Maven',
          'Integração com Firebase',
          'POO Avançada',
          'Tratamento de Exceções',
          'Collections Framework'
        ],
        en: [
          'Maven Projects',
          'Firebase Integration',
          'Advanced OOP',
          'Exception Handling',
          'Collections Framework'
        ]
      }
    }
  ];

  toolsSkills: Skill[] = [
    {
      name: {
        pt: 'Git & GitHub',
        en: 'Git & GitHub'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced'
      },
      description: {
        pt: 'Controle de versão e trabalho colaborativo em equipe.',
        en: 'Version control and collaborative team work.'
      },
      progress: '90%',
      icon: 'fab fa-git-alt',
      features: {
        pt: [
          'Git Flow',
          'GitHub Actions',
          'Code Review',
          'Gestão de Branches'
        ],
        en: [
          'Git Flow',
          'GitHub Actions',
          'Code Review',
          'Branch Management'
        ]
      }
    },
    {
      name: {
        pt: 'SourceTree',
        en: 'SourceTree'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced'
      },
      description: {
        pt: 'Gerenciamento visual de repositórios Git com fluxos de trabalho avançados.',
        en: 'Visual repository management with advanced workflow.'
      },
      progress: '90%',
      icon: 'fas fa-code-branch',
      features: {
        pt: [
          'Interface gráfica para Git',
          'Gestão visual de branches',
          'Resolução de conflitos',
          'Integração com GitHub/Bitbucket',
          'Stashing e cherry-picking'
        ],
        en: [
          'Graphical Git interface',
          'Branch management',
          'Conflict resolution',
          'GitHub/Bitbucket integration',
          'Stashing and cherry-picking'
        ]
      }
    },
    {
      name: {
        pt: 'Docker',
        en: 'Docker'
      },
      level: {
        pt: 'Básico',
        en: 'Basic'
      },
      description: {
        pt: 'Containerização de aplicações e ambientes de desenvolvimento.',
        en: 'Containerization of applications and development environments.'
      },
      progress: '50%',
      icon: 'fab fa-docker',
      features: {
        pt: [
          'Docker Compose',
          'Dockerfiles',
          'Otimização de Imagens',
          'Integração CI/CD'
        ],
        en: [
          'Docker Compose',
          'Dockerfiles',
          'Image Optimization',
          'CI/CD Integration'
        ]
      }
    },
    {
      name: {
        pt: 'DevOps',
        en: 'DevOps'
      },
      level: {
        pt: 'Básico',
        en: 'Basic'
      },
      description: {
        pt: 'Conhecimentos iniciais em infraestrutura como código e CI/CD.',
        en: 'Basic knowledge of infrastructure as code and CI/CD.'
      },
      progress: '65%',
      icon: 'fas fa-cloud',
      features: {
        pt: [
          'GitHub Actions',
          'AWS Básico',
          'Deploy Automatizado',
          'Monitoramento'
        ],
        en: [
          'GitHub Actions',
          'Basic AWS',
          'Automated Deployment',
          'Monitoring'
        ]
      }
    }
  ];

  qaSkills: Skill[] = [
    {
      name: {
        pt: 'Testes Automatizados',
        en: 'Automated Testing'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced'
      },
      description: {
        pt: 'Desenvolvimento e execução de testes automatizados para aplicações web e desktop.',
        en: 'Development and execution of automated tests for web and desktop applications.'
      },
      progress: '85%',
      icon: 'fas fa-robot',
      features: {
        pt: [
          'Cypress',
          'Selenium',
          'Testes E2E',
          'Integração Contínua'
        ],
        en: [
          'Cypress',
          'Selenium',
          'E2E Testing',
          'Continuous Integration'
        ]
      }
    },
    {
      name: {
        pt: 'Testes Manuais',
        en: 'Manual Testing'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced'
      },
      description: {
        pt: 'Planejamento e execução de testes manuais com relatórios detalhados.',
        en: 'Planning and execution of manual tests with detailed reports.'
      },
      progress: '90%',
      icon: 'fas fa-clipboard-check',
      features: {
        pt: [
          'Casos de Teste',
          'Relatórios de Bugs',
          'Testes de Usabilidade',
          'Testes de Regressão'
        ],
        en: [
          'Test Cases',
          'Bug Reports',
          'Usability Testing',
          'Regression Testing'
        ]
      }
    },
    {
      name: {
        pt: 'QA Processes',
        en: 'QA Processes'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate'
      },
      description: {
        pt: 'Implementação de processos de garantia de qualidade em projetos ágeis.',
        en: 'Implementation of quality assurance processes in agile projects.'
      },
      progress: '80%',
      icon: 'fas fa-tasks',
      features: {
        pt: [
          'Metodologias Ágeis',
          'Bugs Tracking',
          'Padrões de Qualidade',
          'Documentação Técnica'
        ],
        en: [
          'Agile Methodologies',
          'Bugs Tracking',
          'Quality Patterns',
          'Technical Documentation'
        ]
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

  changeTab(tab: string): void {
    this.activeTab = tab;
  }

  getLevelClass(level: string): string {
    switch (level) {
      case 'Avançado':
      case 'Advanced':
        return 'level-advanced';
      case 'Intermediário':
      case 'Intermediate':
        return 'level-intermediate';
      case 'Básico':
      case 'Basic':
        return 'level-basic';
      default:
        return '';
    }
  }
}
