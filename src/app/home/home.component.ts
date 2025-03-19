import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Hammer from 'hammerjs'; // Importação correta do Hammer.js

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slideIndex = 1; // Índice do slide central (destaque)

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

  constructor() { }

  ngOnInit(): void {
    this.setupSmoothScroll();
    this.setupFadeInAnimations();
    this.setupSwipeGestures(); // Configura os gestos de swipe
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

  // Configura os gestos de swipe
  private setupSwipeGestures(): void {
    const sliderElement = document.querySelector('.slider');

    if (sliderElement) {
      const hammer = new Hammer.Manager(sliderElement); // Inicializa o Hammer.js no slider

      // Configura o gesto de swipe
      const swipe = new Hammer.Swipe();
      hammer.add(swipe);

      // Detecta o gesto de swipe para a esquerda
      hammer.on('swipeleft', () => {
        this.moveSlide(1); // Passa para o próximo slide
      });

      // Detecta o gesto de swipe para a direita
      hammer.on('swiperight', () => {
        this.moveSlide(-1); // Volta para o slide anterior
      });
    }
  }

  // Função para mover os slides
  moveSlide(n: number): void {
    this.slideIndex = (this.slideIndex + n + this.slides.length) % this.slides.length;
  }

  // Função para calcular a posição e o tamanho de cada slide
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
}
