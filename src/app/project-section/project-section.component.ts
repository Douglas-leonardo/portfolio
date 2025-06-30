import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

interface Project {
  id: number;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
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
export class ProjectSectionComponent implements OnInit, OnDestroy {
  showAllProjects = false;
  currentLanguage: Language = 'pt';
  translations: any;
  private subscription: Subscription = new Subscription();

  projects: Project[] = [
    {
      id: 1,
      title: {
        pt: 'Doceria Delícia',
        en: 'Doceria Delícia'
      },
      description: {
        pt: "Site estático de doceria com design responsivo",
        en: "Static bakery website with responsive design"
      },
      technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
      codeUrl: 'https://github.com/Douglas-leonardo/doceria/tree/main/doceria',
      projectUrl: 'https://doceria-eta.vercel.app/',
      imageUrl: "assets/images/doceria.png",
      featured: true
    },
    {
      id: 2,
      title: {
        pt: 'InDecor',
        en: 'InDecor'
      },
      description: {
        pt: "Landing page para evento de design de interiores com múltiplas seções interativas",
        en: "Landing page for interior design event with multiple interactive sections"
      },
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "Bootstrap Icons"],
      codeUrl: 'https://github.com/Douglas-leonardo/Condomio-vendas',
      projectUrl: 'https://condomio-vendas.vercel.app/',
      imageUrl: "assets/images/condominio.png",
      featured: true
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
