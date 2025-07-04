import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

interface Certificate {
  titulo: {
    pt: string;
    en: string;
    es: string;
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
  currentLanguage: Language = 'pt';
  translations: any;
  private subscription: Subscription = new Subscription();
  showAllCertificates = false;

  certificados: Certificate[] = [
    {
      titulo: {
        pt: 'Integração continua com testes Jenkins',
        en: 'Continuous Integration with Jenkins Testing',
        es: 'Integración continua con pruebas Jenkins'
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
        en: 'Investments: Learn to Invest Your Money',
        es: 'Inversiones: Aprenda a Invertir Su Dinero'
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
        en: 'Complete Project NodeJS, React, React Native, TypeScript',
        es: 'Proyecto Completo NodeJS, React, React Native, TypeScript'
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
        en: 'Mastering TestComplete',
        es: 'Dominando TestComplete'
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
        en: 'API Testing Automation with Postman',
        es: 'Automatización de pruebas de API con Postman'
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
        en: 'Complete PostgreSQL Course! From Basic to Advanced v2025!',
        es: 'Curso completo de PostgreSQL! De Básico a Avanzado v2025!'
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
        en: 'Automated Testing with Cypress - Advanced',
        es: 'Pruebas automatizadas con Cypress - Avanzado'
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
        en: 'Automated Testing with Cypress Intermediate',
        es: 'Pruebas automatizadas con Cypress Intermedio'
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
        en: 'End-to-end Testing with Cypress Basic',
        es: 'Pruebas end-to-end con Cypress Básico'
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
        en: 'Cybersecurity Essentials',
        es: 'Fundamentos de Ciberseguridad'
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
        en: 'Angular 13 Training',
        es: 'Formación Angular 13'
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
        en: 'Unit Testing in JAVA: Master JUnit 4, Mockito and TDD',
        es: 'Pruebas unitarias en JAVA: Domine JUnit 4, Mockito y TDD'
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
        en: 'Programming Logic',
        es: 'Lógica de Programación'
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
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get certificadosFiltradosLimitados() {
    const lista = this.certificados;
    if (this.showAllCertificates || lista.length <= 3) {
      return lista;
    }
    return lista.slice(0, 3);
  }

  toggleShowAllCertificates() {
    this.showAllCertificates = !this.showAllCertificates;
  }
}
