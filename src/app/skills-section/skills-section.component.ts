import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  activeTab: string = 'frontend';

  frontendSkills = [
    {
      name: 'Angular',
      level: 'Avançado',
      description: 'Desenvolvimento de aplicações SPA complexas com RxJS, NgRx e componentes reutilizáveis.',
      progress: '95%',
      icon: 'fab fa-angular',
      features: [
        'Componentes reutilizáveis',
        'Gestão de estado com NgRx',
        'RxJS e Observables',
        'Pipes e Directives'
      ]
    },
    {
      name: 'TypeScript',
      level: 'Avançado',
      description: 'Tipagem estática e recursos avançados para JavaScript escalável.',
      progress: '90%',
      icon: 'fas fa-code',
      features: [
        'Interfaces e Types',
        'Generics',
        'Decorators',
        'Integração com Angular'
      ]
    },
    {
      name: 'UI/UX Design',
      level: 'Intermediário',
      description: 'Criação de interfaces responsivas e experiências de usuário intuitivas.',
      progress: '75%',
      icon: 'fas fa-paint-brush',
      features: [
        'Design System',
        'Prototipagem',
        'Figma/Adobe XD',
        'Acessibilidade'
      ]
    }
  ];

  backendSkills = [
    {
      name: 'Node.js',
      level: 'Intermediário',
      description: 'Construção de APIs RESTful e aplicações server-side eficientes.',
      progress: '60%',
      icon: 'fab fa-node-js',
      features: [
        'Express.js',
        'Autenticação JWT',
        'WebSockets',
        'Otimização de performance'
      ]
    },
    {
      name: 'Banco de Dados',
      level: 'Intermediário',
      description: 'Modelagem e consulta em bancos relacionais e NoSQL.',
      progress: '80%',
      icon: 'fas fa-database',
      features: [
        'MongoDB',
        'PostgreSQL',
        'Firebase',
        'ORM/ODM'
      ]
    },
    {
      name: 'Python',
      level: 'Básico',
      description: 'Scripts de automação e desenvolvimento web básico.',
      progress: '60%',
      icon: 'fab fa-python',
      features: [
        'Flask',
        'Automações',
        'Web Scraping',
        'Scripting'
      ]
    },
    {
      name: 'Java',
      level: 'Intermediário',
      description: 'Desenvolvimento de aplicações empresariais com Maven e integração com Firebase.',
      progress: '75%',
      icon: 'fab fa-java',
      features: [
        'Projetos Maven',
        'Integração com Firebase',
        'POO Avançada',
        'Tratamento de Exceções',
        'Collections Framework'
      ]
    }
  ];

  toolsSkills = [
    {
      name: 'Git & GitHub',
      level: 'Avançado',
      description: 'Controle de versão e trabalho colaborativo em equipe.',
      progress: '90%',
      icon: 'fab fa-git-alt',
      features: [
        'Git Flow',
        'GitHub Actions',
        'Code Review',
        'Gestão de Branches'
      ]
    },
    {
      name: 'SourceTree',
      level: 'Avançado',
      description: 'Gerenciamento visual de repositórios Git com fluxos de trabalho avançados.',
      progress: '90%',
      icon: 'fas fa-code-branch',
      features: [
        'Interface gráfica para Git',
        'Gestão visual de branches',
        'Resolução de conflitos',
        'Integração com GitHub/Bitbucket',
        'Stashing e cherry-picking'
      ]
    },
    {
      name: 'Docker',
      level: 'Básico',
      description: 'Containerização de aplicações e ambientes de desenvolvimento.',
      progress: '50%',
      icon: 'fab fa-docker',
      features: [
        'Docker Compose',
        'Dockerfiles',
        'Otimização de Imagens',
        'Integração CI/CD'
      ]
    },
    {
      name: 'DevOps',
      level: 'Básico',
      description: 'Conhecimentos iniciais em infraestrutura como código e CI/CD.',
      progress: '65%',
      icon: 'fas fa-cloud',
      features: [
        'GitHub Actions',
        'AWS Básico',
        'Deploy Automatizado',
        'Monitoramento'
      ]
    }
  ];

  qaSkills = [
    {
      name: 'Testes Automatizados',
      level: 'Avançado',
      description: 'Desenvolvimento e execução de testes automatizados para aplicações web e desktop.',
      progress: '85%',
      icon: 'fas fa-robot',
      features: [
        'Cypress',
        'Selenium',
        'Testes E2E',
        'Integração Contínua',
        'TestComplete',
        'Protractor',
        'Robot Framework'
      ]
    },
    {
      name: 'Testes Manuais',
      level: 'Avançado',
      description: 'Planejamento e execução de testes manuais com relatórios detalhados.',
      progress: '90%',
      icon: 'fas fa-clipboard-check',
      features: [
        'Casos de Teste',
        'Relatórios de Bugs',
        'Testes de Usabilidade',
        'Testes de Regressão'
      ]
    },
    {
      name: 'QA Processes',
      level: 'Intermediário',
      description: 'Implementação de processos de garantia de qualidade em projetos ágeis.',
      progress: '80%',
      icon: 'fas fa-tasks',
      features: [
        'Metodologias Ágeis',
        'Bugs Tracking',
        'Padrões de Qualidade',
        'Documentação Técnica'
      ]
    }
  ];

  changeTab(tab: string): void {
    this.activeTab = tab;
  }

  getLevelClass(level: string): string {
    if (level.includes('Básico')) return 'basic';
    if (level.includes('Intermediário')) return 'intermediate';
    if (level.includes('Avançado')) return 'advanced';
    return '';
  }
}
