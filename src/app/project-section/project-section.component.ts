import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  codeUrl: string;
  category: string;
  year: number;
  technologies: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-project-section',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {

  allProjects = [
    {
      title: 'Projeto Angular 1',
      description: 'Aplicação web desenvolvida com Angular e Firebase',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      githubUrl: 'https://github.com/seu-usuario/projeto1',
      demoUrl: 'https://demo-projeto1.com',
      image: 'assets/images/projeto1.jpg'
    },
    {
      title: 'Projeto Angular 2',
      description: 'Dashboard administrativo com Angular Material',
      technologies: ['Angular', 'Material', 'RxJS'],
      githubUrl: 'https://github.com/seu-usuario/projeto2',
      demoUrl: 'https://demo-projeto2.com',
      image: 'assets/images/projeto2.jpg'
    },
    {
      title: 'Projeto Angular 3',
      description: 'E-commerce com carrinho de compras',
      technologies: ['Angular', 'NgRx', 'SCSS'],
      githubUrl: 'https://github.com/seu-usuario/projeto3',
      demoUrl: 'https://demo-projeto3.com',
      image: 'assets/images/projeto3.jpg'
    },
    {
      title: 'Projeto Angular 4',
      description: 'Aplicativo de gerenciamento de tarefas',
      technologies: ['Angular', 'Firebase', 'PWA'],
      githubUrl: 'https://github.com/seu-usuario/projeto4',
      demoUrl: 'https://demo-projeto4.com',
      image: 'assets/images/projeto4.jpg'
    },
    {
      title: 'Projeto Angular 5',
      description: 'Plataforma de aprendizado online',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/seu-usuario/projeto5',
      demoUrl: 'https://demo-projeto5.com',
      image: 'assets/images/projeto5.jpg'
    },
    {
      title: 'Projeto Angular 3',
      description: 'E-commerce com carrinho de compras',
      technologies: ['Angular', 'NgRx', 'SCSS'],
      githubUrl: 'https://github.com/seu-usuario/projeto3',
      demoUrl: 'https://demo-projeto3.com',
      image: 'assets/images/projeto3.jpg'
    },
    {
      title: 'Projeto Angular 4',
      description: 'Aplicativo de gerenciamento de tarefas',
      technologies: ['Angular', 'Firebase', 'PWA'],
      githubUrl: 'https://github.com/seu-usuario/projeto4',
      demoUrl: 'https://demo-projeto4.com',
      image: 'assets/images/projeto4.jpg'
    },
    {
      title: 'Projeto Angular 5',
      description: 'Plataforma de aprendizado online',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/seu-usuario/projeto5',
      demoUrl: 'https://demo-projeto5.com',
      image: 'assets/images/projeto5.jpg'
    },
    {
      title: 'Projeto Angular 3',
      description: 'E-commerce com carrinho de compras',
      technologies: ['Angular', 'NgRx', 'SCSS'],
      githubUrl: 'https://github.com/seu-usuario/projeto3',
      demoUrl: 'https://demo-projeto3.com',
      image: 'assets/images/projeto3.jpg'
    },
    {
      title: 'Projeto Angular 4',
      description: 'Aplicativo de gerenciamento de tarefas',
      technologies: ['Angular', 'Firebase', 'PWA'],
      githubUrl: 'https://github.com/seu-usuario/projeto4',
      demoUrl: 'https://demo-projeto4.com',
      image: 'assets/images/projeto4.jpg'
    },
    {
      title: 'Projeto Angular 5',
      description: 'Plataforma de aprendizado online',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/seu-usuario/projeto5',
      demoUrl: 'https://demo-projeto5.com',
      image: 'assets/images/projeto5.jpg'
    }
  ];

  showAll = false;
  isMenuActive = false;

  get displayedProjects() {
    return this.showAll ? this.allProjects : this.allProjects.slice(0, 3);
  }


  toggleShowAll() {
    this.showAll = !this.showAll;
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
