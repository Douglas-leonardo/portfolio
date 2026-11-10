import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

interface Translation {
  title: string;
  tagline: string;
  bio1: string;
  quote: string;
}

interface TimelineRole {
  period: {
    pt: string;
    en: string;
    es: string;
  };
  title: {
    pt: string;
    en: string;
    es: string;
  };
  description: {
    pt: string;
    en: string;
    es: string;
  };
}

interface TimelineCompany {
  company: string;
  period: {
    pt: string;
    en: string;
    es: string;
  };
  roles: TimelineRole[];
}

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss']
})
export class AboutSectionComponent implements OnInit, OnDestroy {
  translations: any;
  currentLanguage: Language = 'pt';
  private subscription: Subscription = new Subscription();

  timelineItems: TimelineCompany[] = [
    {
      company: 'IBM',
      period: {
        pt: 'Jul/2026 - Nov/2026',
        en: 'Jul/2026 - Nov/2026',
        es: 'Jul/2026 - Nov/2026'
      },
      roles: [
        {
          period: {
            pt: 'Julho/2026 – Novembro/2026',
            en: 'July/2026 – November/2026',
            es: 'Julio/2026 – Noviembre/2026'
          },
          title: {
            pt: 'QA Automation Engineer – Projeto Vivo',
            en: 'QA Automation Engineer – Vivo Project',
            es: 'QA Automation Engineer – Proyecto Vivo'
          },
          description: {
            pt: `
          • Atuação em Quality Assurance de agentes conversacionais baseados em Inteligência Artificial, realizando testes manuais e automatizados para garantir a qualidade, o comportamento e a confiabilidade das jornadas de atendimento nos canais CHAT e VOZ.<br><br>

          • Execução de testes funcionais, exploratórios, regressivos e end-to-end em agentes de IA utilizando IBM Watson Orchestrate.<br><br>

          • Validação de intenções, contexto, jornadas conversacionais, integrações e regras de negócio.<br><br>

          • Avaliação de respostas de LLMs por meio de LLM Judge, critérios semânticos e validações funcionais.<br><br>

          • Testes de RAG (Retrieval-Augmented Generation), verificando a recuperação de informações e a aderência às bases de conhecimento.<br><br>

          • Desenvolvimento e evolução de framework de automação de testes em Python, com simulação de interações reais entre usuários e agentes de IA.<br><br>

          • Automação de cenários multicanais (CHAT e VOZ), incluindo envio de mensagens, captura de respostas e validação dos resultados esperados.<br><br>

          • Validação de integrações por meio de APIs REST.<br><br>

          • Integração com IBM Watson Orchestrate e Langfuse para coleta de dados, rastreabilidade e observabilidade das execuções.<br><br>

          • Geração automatizada de relatórios, evidências e indicadores de qualidade.<br><br>

          • Análise de logs, identificação de falhas e acompanhamento de defeitos utilizando Jira.<br><br>

          <strong>Tecnologias:</strong> Python, JSON, APIs REST, IBM Watson Orchestrate (wxO), Langfuse, LLMs, RAG, LLM Judge, Git e Jira.`,
            en: `
          • Worked in Quality Assurance for AI-based conversational agents, performing manual and automated testing to ensure quality, behavior, and reliability of customer service journeys across CHAT and VOICE channels.<br><br>

          • Executed functional, exploratory, regression, and end-to-end tests on AI agents using IBM Watson Orchestrate.<br><br>

          • Validated intents, context, conversational journeys, integrations, and business rules.<br><br>

          • Evaluated LLM responses through LLM Judge, semantic criteria, and functional validations.<br><br>

          • Performed RAG (Retrieval-Augmented Generation) testing, verifying information retrieval and adherence to knowledge bases.<br><br>

          • Developed and evolved a Python-based test automation framework simulating real interactions between users and AI agents.<br><br>

          • Automated multichannel scenarios (CHAT and VOICE), including message sending, response capture, and expected result validation.<br><br>

          • Validated integrations through REST APIs.<br><br>

          • Integrated with IBM Watson Orchestrate and Langfuse for data collection, traceability, and observability of test executions.<br><br>

          • Automated generation of reports, evidence, and quality indicators.<br><br>

          • Analyzed logs, identified failures, and tracked defects using Jira.<br><br>

          <strong>Technologies:</strong> Python, JSON, REST APIs, IBM Watson Orchestrate (wxO), Langfuse, LLMs, RAG, LLM Judge, Git and Jira.`,
            es: `
          • Trabajo en Quality Assurance de agentes conversacionales basados en Inteligencia Artificial, realizando pruebas manuales y automatizadas para garantizar la calidad, el comportamiento y la confiabilidad de los recorridos de atención en los canales CHAT y VOZ.<br><br>

          • Ejecución de pruebas funcionales, exploratorias, de regresión y end-to-end en agentes de IA utilizando IBM Watson Orchestrate.<br><br>

          • Validación de intenciones, contexto, recorridos conversacionales, integraciones y reglas de negocio.<br><br>

          • Evaluación de respuestas de LLMs mediante LLM Judge, criterios semánticos y validaciones funcionales.<br><br>

          • Pruebas de RAG (Retrieval-Augmented Generation), verificando la recuperación de información y la adherencia a las bases de conocimiento.<br><br>

          • Desarrollo y evolución de framework de automatización de pruebas en Python, con simulación de interacciones reales entre usuarios y agentes de IA.<br><br>

          • Automatización de escenarios multicanal (CHAT y VOZ), incluyendo envío de mensajes, captura de respuestas y validación de resultados esperados.<br><br>

          • Validación de integraciones mediante APIs REST.<br><br>

          • Integración con IBM Watson Orchestrate y Langfuse para recolección de datos, trazabilidad y observabilidad de las ejecuciones.<br><br>

          • Generación automatizada de informes, evidencias e indicadores de calidad.<br><br>

          • Análisis de logs, identificación de fallas y seguimiento de defectos utilizando Jira.<br><br>

          <strong>Tecnologías:</strong> Python, JSON, APIs REST, IBM Watson Orchestrate (wxO), Langfuse, LLMs, RAG, LLM Judge, Git y Jira.`
          }
        }
      ]
    },
    {
      company: 'Contmatic Phoenix',
      period: {
        pt: 'Fev/2021 – Mar/2026',
        en: 'Feb/2021 – Mar/2026',
        es: 'Feb/2021 – Mar/2026'
      },
      roles: [
        {
          period: {
            pt: 'Fev/2021 – Mar/2026',
            en: 'Feb/2021 – Mar/2026',
            es: 'Feb/2021 – Mar/2026'
          },
          title: {
            pt: 'Quality Assurance Engineer',
            en: 'Quality Assurance Engineer',
            es: 'Quality Assurance Engineer'
          },
          description: {
            pt: `
          • Atuei no desenho, manutenção e evolução de frameworks de automação, ampliando a cobertura e a eficiência do processo de testes.<br><br>

          • Desenvolvi testes automatizados de regressão para aplicações desktop, reduzindo o tempo manual e aumentando a previsibilidade das validações.<br><br>

          • Estruturei pipelines de CI/CD para execução da suíte automatizada e publicação de resultados em servidor Linux com Nginx.<br><br>

          • Criei ferramentas em Python para configuração automatizada de ambientes de teste em máquinas virtuais.<br><br>

          • Executei testes funcionais, exploratórios, smoke e regressivos, garantindo qualidade contínua nas entregas.<br><br>

          • Realizei testes de APIs REST com Postman e Newman, validando integrações, contratos e respostas de serviços.<br><br>

          • Utilizei stack diversificado de automação: Cypress, Selenium, Playwright, Robot Framework, Appium e TestComplete.<br><br>

          • Implementei dashboards e relatórios com Allure Reports, melhorando a visibilidade e o debug das execuções.<br><br>

          • Apoiei a adoção da automação por outros QA engineers, contribuindo com treinamento, framework e padronização técnica.<br><br>

          • Atuei em ambiente ágil (Scrum), colaborando com desenvolvedores e produto para prevenir defeitos desde as fases iniciais.`,
            en: `
          • Designed, maintained, and evolved test automation frameworks, increasing test coverage and process efficiency.<br><br>

          • Developed regression automated tests for desktop applications, reducing manual effort and improving validation predictability.<br><br>

          • Built CI/CD pipelines for automated test suite execution and result publishing on a Linux server with Nginx.<br><br>

          • Created Python tools for automated test environment setup on virtual machines.<br><br>

          • Executed functional, exploratory, smoke, and regression tests, ensuring continuous quality across deliveries.<br><br>

          • Performed REST API testing with Postman and Newman, validating integrations, contracts, and service responses.<br><br>

          • Used a diverse automation stack: Cypress, Selenium, Playwright, Robot Framework, Appium, and TestComplete.<br><br>

          • Implemented dashboards and reports with Allure Reports, improving test visibility and debugging.<br><br>

          • Supported QA automation adoption by other engineers through training, framework design, and technical standardization.<br><br>

          • Worked in Agile (Scrum) environments, collaborating with developers and product teams to prevent defects early.`,
            es: `
          • Diseñé, mantuve y evolucé frameworks de automatización de pruebas, ampliando la cobertura y la eficiencia del proceso.<br><br>

          • Desarrollé pruebas automatizadas de regresión para aplicaciones de escritorio, reduciendo el esfuerzo manual y mejorando la previsibilidad.<br><br>

          • Estructuré pipelines de CI/CD para ejecución de la suite automatizada y publicación de resultados en servidor Linux con Nginx.<br><br>

          • Creé herramientas en Python para configuración automatizada de entornos de prueba en máquinas virtuales.<br><br>

          • Ejecuté pruebas funcionales, exploratorias, smoke y de regresión, garantizando calidad continua en las entregas.<br><br>

          • Realicé pruebas de APIs REST con Postman y Newman, validando integraciones, contratos y respuestas de servicios.<br><br>

          • Utilicé un stack diverso de automatización: Cypress, Selenium, Playwright, Robot Framework, Appium y TestComplete.<br><br>

          • Implementé dashboards e informes con Allure Reports, mejorando la visibilidad y el debugging de ejecuciones.<br><br>

          • Apoyé la adopción de la automatización por otros QA engineers mediante capacitación, diseño de framework y estandarización técnica.<br><br>

          • Trabajé en entornos ágiles (Scrum), colaborando con desarrolladores y producto para prevenir defectos desde etapas tempranas.`
          }
        }
      ]
    }
  ];

  constructor(private translationService: TranslationService) { }

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
}
