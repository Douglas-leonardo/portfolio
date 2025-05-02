import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates-section.component.html',
  styleUrls: ['./certificates-section.component.scss']
})
export class CertificatesSectionComponent implements OnInit {
  indiceSlideAtual = 1;
  arrastando = false;
  posicaoInicialX = 0;

  certificados = [
    {
      titulo: 'Integração continua com testes Jenkins',
      instituicao: 'Udemy',
      duracao: '10 horas',
      instrutor: 'Francisco Wagner Costa Aquino',
      ano: '2024',
      linkCertificado: 'https://www.udemy.com/certificate/UC-54accf86-c392-468a-9e00-9fd9b3b55d07/'
    },
    {
      titulo: 'Investimentos: Aprenda a Investir seu Dinheiro',
      instituicao: 'Udemy',
      duracao: '7,5 horas',
      instrutor: 'Leonardo Baldochi',
      ano: '2024',
      linkCertificado: 'https://www.udemy.com/certificate/UC-c4e67f11-464f-4e1c-a17d-68eb7638217b/'
    },
    {
      titulo: 'Projeto Completo NodeJS, React, React Native, TypeScript',
      instituicao: 'Udemy',
      duracao: '20,5 horas',
      instrutor: 'Matheus Fraga',
      ano: '2024',
      linkCertificado: 'https://www.udemy.com/certificate/UC-eef26846-8bc0-44ae-9923-3c227fde4011/'
    },
    {
      titulo: 'Dominando o TestComplete',
      instituicao: 'Udemy',
      duracao: '2,5 horas',
      instrutor: 'Alan Voigt',
      ano: '2024',
      linkCertificado: 'https://www.udemy.com/certificate/UC-501e4bee-13ad-4fa0-b2df-9a9e9a197e1b/'
    },
    {
      titulo: 'Automação de testes de API com Postman',
      instituicao: 'Udemy',
      duracao: '9 horas',
      instrutor: 'Erick Valentin',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-8465c76b-5112-4c6a-8c6b-b18904cdcc50/'
    },
    {
      titulo: 'Curso completo de PostgreSQL! Do Básico ao Avançado v2025!',
      instituicao: 'Udemy',
      duracao: '38 horas',
      instrutor: 'Vitor Mazuco',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-83c25325-5e32-400d-b5e5-a5a077d8e3b0/'
    },
    {
      titulo: 'Testes automatizados com Cypress - Avançado',
      instituicao: 'Udemy',
      duracao: '3 horas',
      instrutor: 'Walmyr Filho',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-9a24586f-d61f-4bc8-9a54-668258a372ac/'
    },
    {
      titulo: 'Testes automatizados com Cypress intermediário',
      instituicao: 'Udemy',
      duracao: '3,5 horas',
      instrutor: 'Walmyr Filho',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-a408bd55-8afd-4e14-a6ab-78a11a1de921/'
    },
    {
      titulo: 'Testes end-to-end com Cypress Basico',
      instituicao: 'Udemy',
      duracao: '4 horas',
      instrutor: 'Walmyr Filho',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-792919a6-d224-445a-b705-a8f812fcbda7/'
    },
    {
      titulo: 'Cybersecurity Essentials',
      instituicao: 'Uninove',
      duracao: '40 horas',
      instrutor: 'Rosana Cordovil',
      ano: '2022',
      linkCertificado: 'https://drive.google.com/drive/u/0/folders/12tL8kD0VoyJ3kYkyJYcD5PgKsyGOL5LP'
    },
    {
      titulo: 'Curso completo de PostgreSQL! Do Básico ao Avançado v2025!',
      instituicao: 'Udemy',
      duracao: '38 horas',
      instrutor: 'Vitor Mazuco',
      ano: '2023',
      linkCertificado: 'https://www.udemy.com/certificate/UC-83c25325-5e32-400d-b5e5-a5a077d8e3b0/'
    },
    {
      titulo: 'Formação Angular 13',
      instituicao: 'Udemy',
      duracao: '11 horas',
      instrutor: 'Marcio Casele de Souza',
      ano: '2022',
      linkCertificado: 'https://www.udemy.com/certificate/UC-1aca5323-3980-4905-8869-eb192d20aeab/'
    },
    {
      titulo: 'Testes unitários em JAVA: Domine JUnit 4, Mockito e TDD',
      instituicao: 'Udemy',
      duracao: '8 horas',
      instrutor: 'Francisco Wagner Costa Aquino',
      ano: '2022',
      linkCertificado: 'https://www.udemy.com/certificate/UC-1aca5323-3980-4905-8869-eb192d20aeab/'
    },
    {
      titulo: 'Lógica de Programação',
      instituicao: 'Senai',
      duracao: '14 horas',
      instrutor: 'Material Online',
      ano: '2022',
      linkCertificado: 'https://drive.google.com/drive/u/0/folders/11cS-9UAAcmDqIb3p01EXAZHBBqw-mypH'
    },
  ];

  ngOnInit(): void {
    this.configurarRolagemSuave();
    this.configurarAnimacoes();
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
