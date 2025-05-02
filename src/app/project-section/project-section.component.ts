import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  codeUrl: string;
  technologies: string[];
  featured?: boolean;
}

@Component({
  selector: 'app-project-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {
  showAllProjects = false;

  projects: Project[] = [
    {
      id: 1,
      title: 'Doceria',
      description: 'Uma loja de docer online',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      codeUrl: 'https://github.com/seu-usuario/projeto1',
      projectUrl: 'https://doceria-eta.vercel.app/',
      imageUrl: "assets/images/doceria.png",
      featured: true
    },
    {
      id: 2,
      title: 'Venda de imoveis',
      description: 'Aplicação web desenvolvida com Angular e Firebase',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      codeUrl: 'https://github.com/seu-usuario/projeto1',
      projectUrl: 'https://condomio-vendas.vercel.app/',
      imageUrl: "assets/images/condominio.png",
      featured: true
    }
  ];

  get visibleProjects() {
    return this.showAllProjects ? this.projects : this.projects.filter(project => project.featured).slice(0, 3);
  }

  toggleProjectsView() {
    this.showAllProjects = !this.showAllProjects;
  }

  trackByProjectId(index: number, project: Project) {
    return project.id;
  }
}
