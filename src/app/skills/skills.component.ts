import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  activeTab: string = 'frontend';

  frontendSkills = [
    {
      name: 'Angular',
      level: 'Avançado - 4 anos de experiência',
      description: 'Desenvolvimento de aplicações SPA com componentes reutilizáveis, serviços e RxJS.',
      progress: '95%',
      icon: 'fab fa-angular',
      features: [
        'Componentes reutilizáveis',
        'RxJS e Observables',
        'NgRx para state management'
      ]
    },
    {
      name: 'React',
      level: 'Avançado - 3 anos de experiência',
      description: 'Criação de interfaces com componentes funcionais, hooks e context API.',
      progress: '90%',
      icon: 'fab fa-react',
      features: [
        'Hooks (useState, useEffect, etc)',
        'Context API',
        'Redux e Redux Toolkit'
      ]
    },
    {
      name: 'HTML5/CSS3',
      level: 'Especialista - 5+ anos de experiência',
      description: 'Criação de layouts responsivos e semânticos com as melhores práticas.',
      progress: '98%',
      icon: 'fab fa-html5',
      features: [
        'HTML Semântico',
        'Flexbox e Grid Layout',
        'Animações CSS'
      ]
    }
  ];

  backendSkills = [
    {
      name: 'Node.js',
      level: 'Avançado - 3 anos de experiência',
      description: 'Desenvolvimento de APIs RESTful e aplicações server-side com JavaScript.',
      progress: '85%',
      icon: 'fab fa-node-js',
      features: [
        'Express.js',
        'Autenticação JWT',
        'WebSockets'
      ]
    },
    {
      name: 'Bancos de Dados',
      level: 'Intermediário/Avançado',
      description: 'Experiência com bancos relacionais e não-relacionais.',
      progress: '75%',
      icon: 'fas fa-database',
      features: [
        'MongoDB',
        'PostgreSQL',
        'Firebase'
      ]
    },
    {
      name: 'Python',
      level: 'Intermediário',
      description: 'Desenvolvimento de scripts e automações, com conhecimento em frameworks web.',
      progress: '65%',
      icon: 'fab fa-python',
      features: [
        'Flask',
        'Django (básico)',
        'Automações'
      ]
    }
  ];

  toolsSkills = [
    {
      name: 'Git/GitHub',
      level: 'Avançado',
      description: 'Controle de versão e trabalho colaborativo em equipe.',
      progress: '90%',
      icon: 'fab fa-git-alt',
      features: [
        'Git Flow',
        'GitHub Actions',
        'Pull Requests'
      ]
    },
    {
      name: 'Docker',
      level: 'Intermediário',
      description: 'Containerização de aplicações e microserviços.',
      progress: '70%',
      icon: 'fab fa-docker',
      features: [
        'Docker Compose',
        'Dockerfiles',
        'Containerização'
      ]
    },
    {
      name: 'CLI & DevOps',
      level: 'Intermediário',
      description: 'Automação de tarefas e conhecimentos básicos em DevOps.',
      progress: '75%',
      icon: 'fas fa-terminal',
      features: [
        'Scripting Bash',
        'CI/CD Básico',
        'Deploy em Cloud'
      ]
    }
  ];

  changeTab(tab: string): void {
    this.activeTab = tab;
  }

  getLevelClass(level: string): string {
    const lowerLevel = level.toLowerCase();
    if (lowerLevel.includes('básico')) return 'basic';
    if (lowerLevel.includes('intermediário')) return 'intermediate';
    if (lowerLevel.includes('avançado') || lowerLevel.includes('especialista')) return 'advanced';
    return '';
  }
}
