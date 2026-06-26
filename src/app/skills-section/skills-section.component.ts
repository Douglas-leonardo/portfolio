import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

interface Skill {
  name: {
    pt: string;
    en: string;
    es: string;
  };
  level: {
    pt: string;
    en: string;
    es: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
  progress: string;
  icon: string;
  features: {
    pt: string[];
    en: string[];
    es: string[];
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
        en: 'Angular',
        es: 'Angular'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced',
        es: 'Avanzado'
      },
      description: {
        pt: 'Desenvolvimento de aplicações SPA complexas com RxJS, NgRx e componentes reutilizáveis.',
        en: 'Development of complex SPA applications with RxJS, NgRx and reusable components.',
        es: 'Desarrollo de aplicaciones SPA complejas con RxJS, NgRx y componentes reutilizables.'
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
        ],
        es: [
          'Componentes reutilizables',
          'Gestión de estado con NgRx',
          'RxJS y Observables',
          'Pipes y Directivas'
        ]
      }
    },
    {
      name: {
        pt: 'TypeScript',
        en: 'TypeScript',
        es: 'TypeScript'
      },
      level: {
        pt: 'Intermediário/Avançado',
        en: 'Intermediate/Advanced',
        es: 'Intermedio/Avanzado'
      },
      description: {
        pt: 'Tipagem estática aplicada em automação de testes, desenvolvimento de scripts e projetos escaláveis.',
        en: 'Static typing applied to test automation, scripting, and scalable projects.',
        es: 'Tipificación estática aplicada a automatización de pruebas, scripts y proyectos escalables.'
      },
      progress: '85%',
      icon: 'fas fa-code',
      features: {
        pt: [
          'Tipagem estática',
          'Interfaces e Types',
          'Automação com Cypress e Playwright',
          'Organização de testes escaláveis'
        ],
        en: [
          'Static typing',
          'Interfaces and Types',
          'Automation with Cypress and Playwright',
          'Scalable test organization'
        ],
        es: [
          'Tipificación estática',
          'Interfaces y Types',
          'Automatización con Cypress y Playwright',
          'Organización de pruebas escalables'
        ]
      }
    },
    {
      name: {
        pt: 'JavaScript',
        en: 'JavaScript',
        es: 'JavaScript'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced',
        es: 'Avanzado'
      },
      description: {
        pt: 'Linguagem utilizada para automação de testes, criação de scripts e desenvolvimento de soluções para qualidade de software.',
        en: 'Language used for test automation, scripting, and software quality solutions.',
        es: 'Lenguaje utilizado para automatización de pruebas, creación de scripts y soluciones de calidad de software.'
      },
      progress: '90%',
      icon: 'fab fa-js',
      features: {
        pt: [
          'ES6+ e recursos modernos',
          'Automação com Cypress e Playwright',
          'Manipulação de dados e APIs',
          'Criação de scripts de testes'
        ],
        en: [
          'ES6+ and modern features',
          'Automation with Cypress and Playwright',
          'Data and API handling',
          'Test script creation'
        ],
        es: [
          'ES6+ y características modernas',
          'Automatización con Cypress y Playwright',
          'Manejo de datos y APIs',
          'Creación de scripts de pruebas'
        ]
      }
    },
    {
      name: {
        pt: 'UI/UX Design',
        en: 'UI/UX Design',
        es: 'UI/UX Design'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate',
        es: 'Intermedio'
      },
      description: {
        pt: 'Criação de interfaces responsivas e experiências de usuário intuitivas.',
        en: 'Creating responsive interfaces and intuitive user experiences.',
        es: 'Creación de interfaces responsivas y experiencias de usuario intuitivas.'
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
        ],
        es: [
          'Sistema de Diseño',
          'Prototipado',
          'Figma/Adobe XD',
          'Accesibilidad'
        ]
      }
    }
  ];

  backendSkills: Skill[] = [
    {
      name: {
        pt: 'Node.js',
        en: 'Node.js',
        es: 'Node.js'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate',
        es: 'Intermedio'
      },
      description: {
        pt: 'Construção de APIs RESTful e aplicações server-side eficientes.',
        en: 'Building RESTful APIs and efficient server-side applications.',
        es: 'Construcción de APIs RESTful y aplicaciones server-side eficientes.'
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
        ],
        es: [
          'Express.js',
          'Autenticación JWT',
          'WebSockets',
          'Optimización de rendimiento'
        ]
      }
    },
    {
      name: {
        pt: 'Banco de Dados',
        en: 'Database',
        es: 'Base de Datos'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate',
        es: 'Intermedio'
      },
      description: {
        pt: 'Modelagem e consulta em bancos relacionais e NoSQL.',
        en: 'Modeling and querying relational and NoSQL databases.',
        es: 'Modelado y consulta en bases de datos relacionales y NoSQL.'
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
        ],
        es: [
          'MongoDB',
          'PostgreSQL',
          'Firebase',
          'ORM/ODM'
        ]
      }
    },
    {
      name: {
        pt: 'API Testing & Backend',
        en: 'API Testing & Backend',
        es: 'API Testing & Backend'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced',
        es: 'Avanzado'
      },
      description: {
        pt: 'Testes, validações e automações em serviços backend, garantindo qualidade e integração entre sistemas.',
        en: 'Testing, validation, and automation of backend services, ensuring quality and system integration.',
        es: 'Pruebas, validaciones y automatización de servicios backend, asegurando calidad e integración de sistemas.'
      },
      progress: '85%',
      icon: 'fas fa-server',
      features: {
        pt: [
          'Testes de API REST',
          'Postman e Newman',
          'Validação HTTP e JSON',
          'Integração com CI/CD'
        ],
        en: [
          'REST API testing',
          'Postman and Newman',
          'HTTP and JSON validation',
          'CI/CD integration'
        ],
        es: [
          'Pruebas de API REST',
          'Postman y Newman',
          'Validación HTTP y JSON',
          'Integración CI/CD'
        ]
      }
    },
    {
      name: {
        pt: 'Python',
        en: 'Python',
        es: 'Python'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate',
        es: 'Intermedio'
      },
      description: {
        pt: 'Utilizado para automação de testes, criação de scripts e melhoria de processos em qualidade de software.',
        en: 'Used for test automation, scripting, and process improvements in software quality.',
        es: 'Utilizado para automatización de pruebas, creación de scripts y mejora de procesos de calidad de software.'
      },
      progress: '75%',
      icon: 'fab fa-python',
      features: {
        pt: [
          'Automação de testes',
          'Criação de scripts',
          'Manipulação de dados',
          'Integração com ferramentas QA'
        ],
        en: [
          'Test automation',
          'Script creation',
          'Data manipulation',
          'Integration with QA tools'
        ],
        es: [
          'Automatización de pruebas',
          'Creación de scripts',
          'Manipulación de datos',
          'Integración con herramientas QA'
        ]
      }
    },
    {
      name: {
        pt: 'Java',
        en: 'Java',
        es: 'Java'
      },
      level: {
        pt: 'Intermediário',
        en: 'Intermediate',
        es: 'Intermedio'
      },
      description: {
        pt: 'Desenvolvimento de aplicações empresariais com Maven e integração com Firebase.',
        en: 'Enterprise application development with Maven and integration with Firebase.',
        es: 'Desarrollo de aplicaciones empresariales con Maven y integración con Firebase.'
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
        ],
        es: [
          'Proyectos Maven',
          'Integración con Firebase',
          'POO Avanzada',
          'Manejo de Excepciones',
          'Marco de Colecciones'
        ]
      }
    }
  ];

  toolsSkills: Skill[] = [
    {
      name: {
        pt: 'Git & GitHub',
        en: 'Git & GitHub',
        es: 'Git & GitHub'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced',
        es: 'Avanzado'
      },
      description: {
        pt: 'Controle de versão e colaboração em projetos de software.',
        en: 'Version control and collaboration in software projects.',
        es: 'Control de versiones y colaboración en proyectos de software.'
      },
      progress: '90%',
      icon: 'fab fa-git-alt',
      features: {
        pt: [
          'Git Flow',
          'Branching strategy',
          'Code Review',
          'Pull Requests'
        ],
        en: [
          'Git Flow',
          'Branching strategy',
          'Code Review',
          'Pull Requests'
        ],
        es: [
          'Git Flow',
          'Estrategia de ramas',
          'Code Review',
          'Pull Requests'
        ]
      }
    },
    {
      name: {
        pt: 'SourceTree',
        en: 'SourceTree',
        es: 'SourceTree'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced',
        es: 'Avanzado'
      },
      description: {
        pt: 'Gerenciamento visual de repositórios Git com fluxos de trabalho avançados.',
        en: 'Visual repository management with advanced workflow.',
        es: 'Gestión visual de repositorios Git con flujos de trabajo avanzados.'
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
        ],
        es: [
          'Interfaz gráfica para Git',
          'Gestión visual de ramas',
          'Resolución de conflictos',
          'Integración con GitHub/Bitbucket',
          'Stashing y cherry-picking'
        ]
      }
    },
    {
      name: {
        pt: 'Docker',
        en: 'Docker',
        es: 'Docker'
      },
      level: {
        pt: 'Básico/Intermediário',
        en: 'Basic/Intermediate',
        es: 'Básico/Intermedio'
      },
      description: {
        pt: 'Criação e gerenciamento de ambientes isolados para testes e aplicações.',
        en: 'Creation and management of isolated environments for testing and applications.',
        es: 'Creación y gestión de entornos aislados para pruebas y aplicaciones.'
      },
      progress: '70%',
      icon: 'fab fa-docker',
      features: {
        pt: [
          'Dockerfiles',
          'Docker Compose',
          'Ambientes de teste',
          'Containers para automação'
        ],
        en: [
          'Dockerfiles',
          'Docker Compose',
          'Test environments',
          'Containers for automation'
        ],
        es: [
          'Dockerfiles',
          'Docker Compose',
          'Entornos de prueba',
          'Contenedores para automatización'
        ]
      }
    },

    {
      name: {
        pt: 'DevOps',
        en: 'DevOps',
        es: 'DevOps'
      },
      level: {
        pt: 'Básico',
        en: 'Basic',
        es: 'Básico'
      },
      description: {
        pt: 'Conhecimentos básicos em CI/CD e automação de processos de entrega.',
        en: 'Basic knowledge of CI/CD and delivery process automation.',
        es: 'Conocimientos básicos de CI/CD y automatización de procesos de entrega.'
      },
      progress: '60%',
      icon: 'fas fa-cogs',
      features: {
        pt: [
          'CI/CD básico',
          'GitHub Actions',
          'Deploy automatizado',
          'Noções de AWS'
        ],
        en: [
          'Basic CI/CD',
          'GitHub Actions',
          'Automated deployment',
          'Basic AWS knowledge'
        ],
        es: [
          'CI/CD básico',
          'GitHub Actions',
          'Despliegue automatizado',
          'Conocimientos básicos de AWS'
        ]
      }
    },

    {
      name: {
        pt: 'Jira & Xray',
        en: 'Jira & Xray',
        es: 'Jira & Xray'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced',
        es: 'Avanzado'
      },
      description: {
        pt: 'Gestão de tarefas, bugs e testes com foco em qualidade de software.',
        en: 'Task, bug, and test management focused on software quality.',
        es: 'Gestión de tareas, bugs y pruebas enfocada en calidad de software.'
      },
      progress: '90%',
      icon: 'fab fa-jira',
      features: {
        pt: [
          'Gestão de bugs',
          'Planejamento de sprints',
          'Xray (gestão de testes)',
          'Rastreabilidade de testes'
        ],
        en: [
          'Bug tracking',
          'Sprint planning',
          'Xray test management',
          'Test traceability'
        ],
        es: [
          'Gestión de bugs',
          'Planificación de sprints',
          'Xray (gestión de pruebas)',
          'Trazabilidad de pruebas'
        ]
      }
    }
  ];

  qaSkills: Skill[] = [
    {
      name: {
        pt: 'Testes Automatizados',
        en: 'Automated Testing',
        es: 'Pruebas Automatizadas'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced',
        es: 'Avanzado'
      },
      description: {
        pt: 'Desenvolvimento e execução de testes automatizados para aplicações web e APIs.',
        en: 'Development and execution of automated tests for web applications and APIs.',
        es: 'Desarrollo y ejecución de pruebas automatizadas para aplicaciones web y APIs.'
      },
      progress: '90%',
      icon: 'fas fa-vial',
      features: {
        pt: [
          'Cypress / Playwright',
          'Selenium / Robot Framework',
          'Postman (API Testing)',
          'Testes E2E',
          'Integração com CI/CD'
        ],
        en: [
          'Cypress / Playwright',
          'Selenium / Robot Framework',
          'Postman (API Testing)',
          'E2E testing',
          'CI/CD integration'
        ],
        es: [
          'Cypress / Playwright',
          'Selenium / Robot Framework',
          'Postman (API Testing)',
          'Pruebas E2E',
          'Integración CI/CD'
        ]
      }
    },
    {
      name: {
        pt: 'Testes Manuais',
        en: 'Manual Testing',
        es: 'Pruebas Manuales'
      },
      level: {
        pt: 'Avançado',
        en: 'Advanced',
        es: 'Avanzado'
      },
      description: {
        pt: 'Planejamento e execução de testes manuais com foco em qualidade e validação de sistemas.',
        en: 'Planning and execution of manual tests focused on quality and system validation.',
        es: 'Planificación y ejecución de pruebas manuales enfocadas en calidad y validación de sistemas.'
      },
      progress: '90%',
      icon: 'fas fa-check-circle',
      features: {
        pt: [
          'Casos de Teste',
          'Relatórios de Bugs',
          'Testes de Regressão',
          'Testes de Usabilidade',
          'Validação de dados com SQL'
        ],
        en: [
          'Test Cases',
          'Bug Reports',
          'Regression Testing',
          'Usability Testing',
          'Data validation with SQL'
        ],
        es: [
          'Casos de Prueba',
          'Reportes de Bugs',
          'Pruebas de Regresión',
          'Pruebas de Usabilidad',
          'Validación de datos con SQL'
        ]
      }
    },
    {
      name: {
        pt: 'QA Processes',
        en: 'QA Processes',
        es: 'Procesos de QA'
      },
      level: {
        pt: 'Intermediário/Avançado',
        en: 'Intermediate/Advanced',
        es: 'Intermedio/Avanzado'
      },
      description: {
        pt: 'Aplicação de práticas de qualidade em ambientes ágeis e colaboração com equipes de desenvolvimento.',
        en: 'Application of quality practices in agile environments and collaboration with development teams.',
        es: 'Aplicación de prácticas de calidad en entornos ágiles y colaboración con equipos de desarrollo.'
      },
      progress: '85%',
      icon: 'fas fa-tasks',
      features: {
        pt: [
          'Metodologias Ágeis (Scrum/Kanban)',
          'Gestão de bugs no Jira & Xray',
          'Documentação técnica',
          'Padrões de qualidade'
        ],
        en: [
          'Agile methodologies (Scrum/Kanban)',
          'Bug management in Jira & Xray',
          'Technical documentation',
          'Quality standards'
        ],
        es: [
          'Metodologías ágiles (Scrum/Kanban)',
          'Gestión de bugs en Jira & Xray',
          'Documentación técnica',
          'Estándares de calidad'
        ]
      }
    },
    {
  name: {
    pt: 'API Testing',
    en: 'API Testing',
    es: 'Pruebas de API'
  },
  level: {
    pt: 'Avançado',
    en: 'Advanced',
    es: 'Avanzado'
  },
  description: {
    pt: 'Validação e automação de APIs REST garantindo integridade e qualidade dos serviços.',
    en: 'Validation and automation of REST APIs ensuring service integrity and quality.',
    es: 'Validación y automatización de APIs REST asegurando integridad y calidad de servicios.'
  },
  progress: '90%',
  icon: 'fas fa-plug',
  features: {
    pt: [
      'Testes de API REST',
      'Validação de JSON',
      'Status codes HTTP',
      'Integração com Postman e Newman'
    ],
    en: [
      'REST API testing',
      'JSON validation',
      'HTTP status codes',
      'Postman and Newman integration'
    ],
    es: [
      'Pruebas de API REST',
      'Validación de JSON',
      'Códigos HTTP',
      'Integración con Postman y Newman'
    ]
  }
}
  ];

  constructor(private translationService: TranslationService) { }

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
