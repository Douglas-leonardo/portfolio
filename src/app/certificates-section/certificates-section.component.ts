import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

interface Certificate {
  titulo: {
    pt: string;
    en: string;
  };
  instituicao: string;
  duracao: string;
  instrutor: string;
  ano: string;
  linkCertificado: string;
}

@Component({
  selector: 'app-certificates-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates-section.component.html',
  styleUrls: ['./certificates-section.component.scss']
})
export class CertificatesSectionComponent implements OnInit, OnDestroy {
  indiceSlideAtual = 1;
  arrastando = false;
  posicaoInicialX = 0;
  currentLanguage: Language = 'pt';
  translations: any;
  private subscription: Subscription = new Subscription();

  certificados: Certificate[] = [
    {
      titulo: {
        pt: 'Integração continua com testes Jenkins',
        en: 'Continuous Integration with Jenkins Testing'
      },
      instituicao: 'Udemy',
      duracao: '10 horas',
      instrutor: 'Francisco Wagner Costa Aquino',
      ano: '2024',
      linkCertificado: 'https://www.udemy.com/certificate/UC-54accf86-c392-468a-9e00-9fd9b3b55d07/'
    },
    {
      titulo: {
        pt: 'Investimentos: Aprenda a Investir seu Dinheiro',
        en: 'Investments: Learn to Invest Your Money'
      },
      instituicao: 'Udemy',
      duracao: '7,5 horas',
      instrutor: 'Leonardo Baldochi',
      ano: '2024',
      linkCertificado: 'https://www.udemy.com/certificate/UC-c4e67f11-464f-4e1c-a17d-68eb7638217b/'
    },
    {
      titulo: {
        pt: 'Projeto Completo NodeJS, React, React Native, TypeScript',
        en: 'Complete Project NodeJS, React, React Native, TypeScript'
      },
      instituicao: 'Udemy',
      duracao: '20,5 horas',
      instrutor: 'Matheus Fraga',
      ano: '2024',
      linkCertificado: 'https://www.udemy.com/certificate/UC-eef26846-8bc0-44ae-9923-3c227fde4011/'
    },
    {
      titulo: {
        pt: 'Dominando o TestComplete',
        en: 'Mastering TestComplete'
      },
      instituicao: 'Udemy',
      duracao: '2,5 horas',
      instrutor: 'Alan Voigt',
      ano: '2024',
      linkCertificado: 'https://www.udemy.com/certificate/UC-501e4bee-13ad-4fa0-b2df-9a9e9a197e1b/'
    },
    {
      titulo: {
        pt: 'Automação de testes de API com Postman',
        en: 'API Testing Automation with Postman'
      },
      instituicao: 'Udemy',
      duracao: '9 horas',
      instrutor: 'Erick Valentin',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-8465c76b-5112-4c6a-8c6b-b18904cdcc50/'
    },
    {
      titulo: {
        pt: 'Curso completo de PostgreSQL! Do Básico ao Avançado v2025!',
        en: 'Complete PostgreSQL Course! From Basic to Advanced v2025!'
      },
      instituicao: 'Udemy',
      duracao: '38 horas',
      instrutor: 'Vitor Mazuco',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-83c25325-5e32-400d-b5e5-a5a077d8e3b0/'
    },
    {
      titulo: {
        pt: 'Testes automatizados com Cypress - Avançado',
        en: 'Automated Testing with Cypress - Advanced'
      },
      instituicao: 'Udemy',
      duracao: '3 horas',
      instrutor: 'Walmyr Filho',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-9a24586f-d61f-4bc8-9a54-668258a372ac/'
    },
    {
      titulo: {
        pt: 'Testes automatizados com Cypress intermediário',
        en: 'Automated Testing with Cypress Intermediate'
      },
      instituicao: 'Udemy',
      duracao: '3,5 horas',
      instrutor: 'Walmyr Filho',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-a408bd55-8afd-4e14-a6ab-78a11a1de921/'
    },
    {
      titulo: {
        pt: 'Testes end-to-end com Cypress Basico',
        en: 'End-to-end Testing with Cypress Basic'
      },
      instituicao: 'Udemy',
      duracao: '4 horas',
      instrutor: 'Walmyr Filho',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-792919a6-d224-445a-b705-a8f812fcbda7/'
    },
    {
      titulo: {
        pt: 'Cybersecurity Essentials',
        en: 'Cybersecurity Essentials'
      },
      instituicao: 'Uninove',
      duracao: '40 horas',
      instrutor: 'Rosana Cordovil',
      ano: '2022',
      linkCertificado: 'https://drive.google.com/drive/u/0/folders/12tL8kD0VoyJ3kYkyJYcD5PgKsyGOL5LP'
    },
    {
      titulo: {
        pt: 'Formação Angular 13',
        en: 'Angular 13 Training'
      },
      instituicao: 'Udemy',
      duracao: '11 horas',
      instrutor: 'Marcio Casele de Souza',
      ano: '2022',
      linkCertificado: 'https://www.udemy.com/certificate/UC-1aca5323-3980-4905-8869-eb192d20aeab/'
    },
    {
      titulo: {
        pt: 'Testes unitários em JAVA: Domine JUnit 4, Mockito e TDD',
        en: 'Unit Testing in JAVA: Master JUnit 4, Mockito and TDD'
      },
      instituicao: 'Udemy',
      duracao: '8 horas',
      instrutor: 'Francisco Wagner Costa Aquino',
      ano: '2022',
      linkCertificado: 'https://www.udemy.com/certificate/UC-1aca5323-3980-4905-8869-eb192d20aeab/'
    },
    {
      titulo: {
        pt: 'Lógica de Programação',
        en: 'Programming Logic'
      },
      instituicao: 'Senai',
      duracao: '14 horas',
      instrutor: 'Material Online',
      ano: '2022',
      linkCertificado: 'https://drive.google.com/drive/u/0/folders/11cS-9UAAcmDqIb3p01EXAZHBBqw-mypH'
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
    this.configurarRolagemSuave();
    this.configurarAnimacoes();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  moverSlide(direcao: number): void {
    this.indiceSlideAtual = (this.indiceSlideAtual + direcao + this.certificados.length) % this.certificados.length;
  }

  obterEstiloSlide(indice: number): any {
    const totalSlides = this.certificados.length;
    const indiceAnterior = (this.indiceSlideAtual - 1 + totalSlides) % totalSlides;
    const indiceProximo = (this.indiceSlideAtual + 1) % totalSlides;

    if (indice === this.indiceSlideAtual) {
      return {
        transform: 'translateX(0%) scale(1)',
        zIndex: 2,
        opacity: 1
      };
    } else if (indice === indiceAnterior) {
      return {
        transform: 'translateX(-100%) scale(0.8)',
        zIndex: 1,
        opacity: 0.7
      };
    } else if (indice === indiceProximo) {
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

  private configurarRolagemSuave(): void {
    // Implementação para rolagem suave
  }

  private configurarAnimacoes(): void {
    // Implementação para animações de fade-in
  }

  // Manipuladores de eventos de toque
  aoIniciarToque(evento: TouchEvent): void {
    this.posicaoInicialX = evento.touches[0].clientX;
    this.arrastando = true;
  }

  aoMoverToque(evento: TouchEvent): void {
    if (!this.arrastando) return;
    // Opcional: Adicionar feedback visual durante o arrasto
  }

  aoTerminarToque(evento: TouchEvent): void {
    if (!this.arrastando) return;

    const posicaoX = evento.changedTouches[0].clientX;
    const deslocamento = this.posicaoInicialX - posicaoX;

    if (deslocamento > 50) {
      this.moverSlide(1);
    } else if (deslocamento < -50) {
      this.moverSlide(-1);
    }

    this.arrastando = false;
  }
}
