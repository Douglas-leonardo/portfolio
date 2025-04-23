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
      titulo: 'Docker para Desenvolvedores',
      instituicao: 'Udemy',
      duracao: '12 horas',
      instrutor: 'Mathieu Battieit',
      ano: '2023',
      linkCertificado: '#'
    },
    {
      titulo: 'Node.js do Zero a Maestria',
      instituicao: 'Udemy',
      duracao: '38 horas',
      instrutor: 'Mathieu Battieit',
      ano: '2023',
      linkCertificado: '#'
    },
    {
      titulo: 'JavaScript Completo ES6',
      instituicao: 'Origamid',
      duracao: '74 horas',
      instrutor: 'André Rafael',
      ano: '2022',
      linkCertificado: '#'
    },
    {
      titulo: 'React Avançado',
      instituicao: 'Origamid',
      duracao: '50 horas',
      instrutor: 'André Rafael',
      ano: '2022',
      linkCertificado: '#'
    }
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
