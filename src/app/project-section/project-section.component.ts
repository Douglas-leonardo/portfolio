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
      title: 'Doceria Delícia',
      description: "Site estático de doceria com design responsivo",
      technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
      codeUrl: 'https://github.com/Douglas-leonardo/doceria/tree/main/doceria',
      projectUrl: 'https://doceria-eta.vercel.app/',
      imageUrl: "assets/images/doceria.png",
      featured: true
    },
    {
      id: 2,
      title: 'InDecor',
      description: "Landing page para evento de design de interiores com múltiplas seções interativas",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "Bootstrap Icons"],
      codeUrl: 'https://github.com/Douglas-leonardo/Condomio-vendas',
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
