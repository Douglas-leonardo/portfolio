import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-certificates-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates-section.component.html',
  styleUrl: './certificates-section.component.scss'
})
export class CertificatesSectionComponent {

  @Injectable({ providedIn: 'root' })

  ngOnInit(): void {
    this.setupSmoothScroll();
    this.setupFadeInAnimations();
    this.setupTouchGestures();
  }

  slideIndex = 1;


  slides = [
    {
      title: 'Docker para Desenvolvedores',
      institution: 'Udemy',
      duration: '12 horas',
      instructor: 'Mathieu Battieit',
      year: '2023',
      certificateLink: '#'
    },
    {
      title: 'Node.js do Zero a Maestria',
      institution: 'Udemy',
      duration: '38 horas',
      instructor: 'Mathieu Battieit',
      year: '2023',
      certificateLink: '#'
    },
    {
      title: 'JavaScript Completo ES6',
      institution: 'Origamid',
      duration: '74 horas',
      instructor: 'André Rafael',
      year: '2022',
      certificateLink: '#'
    },
    {
      title: 'React Avançado',
      institution: 'Origamid',
      duration: '50 horas',
      instructor: 'André Rafael',
      year: '2022',
      certificateLink: '#'
    },
    {
      title: 'Banco de Dados SQL',
      institution: 'Udemy',
      duration: '20 horas',
      instructor: 'João Silva',
      year: '2021',
      certificateLink: '#'
    },
    {
      title: 'Python para Data Science',
      institution: 'Coursera',
      duration: '30 horas',
      instructor: 'Maria Souza',
      year: '2021',
      certificateLink: '#'
    }
  ];


  moveSlide(n: number): void {
    this.slideIndex = (this.slideIndex + n + this.slides.length) % this.slides.length;
  }

  getSlideStyle(index: number): any {
    const totalSlides = this.slides.length;
    const previousIndex = (this.slideIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (this.slideIndex + 1) % totalSlides;

    if (index === this.slideIndex) {
      return {
        transform: 'translateX(0%) scale(1)',
        zIndex: 2,
        opacity: 1
      };
    } else if (index === previousIndex) {
      return {
        transform: 'translateX(-100%) scale(0.8)',
        zIndex: 1,
        opacity: 0.7
      };
    } else if (index === nextIndex) {
      return {
        transform: 'translateX(100%) scale(0.8)',
        zIndex: 1,
        opacity: 0.7
      };
    } else {
      return {
        transform: 'translateX(0%) scale(0)',
        zIndex: 0,
        opacity: 0
      };
    }
  }

  resetSlider() {
    const slider = document.querySelector('.slider') as HTMLElement;
    if (slider) {
      slider.style.transform = 'translateX(0)';
    }
  }

  private setupSmoothScroll(): void {
    document.querySelectorAll('.nav-link').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId) {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  private setupFadeInAnimations(): void {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  }

  private setupTouchGestures(): void {
    const slider = document.querySelector('.slider');
    let startX = 0;
    let isDragging = false;

    if (slider) {
      slider.addEventListener('touchstart', (e: Event) => {
        const touchEvent = e as TouchEvent;
        startX = touchEvent.touches[0].clientX;
        isDragging = true;
      });

      slider.addEventListener('touchmove', (e: Event) => {
        if (!isDragging) return;

        const touchEvent = e as TouchEvent;
        const moveX = touchEvent.touches[0].clientX;
        const offset = startX - moveX;

        (slider as HTMLElement).style.transform = `translateX(${-offset}px)`;
      });

      slider.addEventListener('touchend', (e: Event) => {
        if (!isDragging) return;

        const touchEvent = e as TouchEvent;
        const moveX = touchEvent.changedTouches[0].clientX;
        const offset = startX - moveX;

        if (offset > 50) {
          this.moveSlide(1);
        } else if (offset < -50) {
          this.moveSlide(-1);
        }

        (slider as HTMLElement).style.transform = 'translateX(0%)';
        isDragging = false;
      });
    }
  }

}


