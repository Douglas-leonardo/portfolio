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
      company: 'Contmatic Phoenix',
      period: {
        pt: '2021 - 2026',
        en: '2021 - 2026',
        es: '2021 - 2026'
      },
      roles: [
        {
          period: {
            pt: '2021 - 2023',
            en: '2021 - 2023',
            es: '2021 - 2023'
          },
          title: {
            pt: 'QA Engineer Júnior',
            en: 'Junior QA Engineer',
            es: 'QA Engineer Junior'
          },
          description: {
            pt: `
          • Atuei no processo de garantia de qualidade em aplicações web e desktop, executando testes para validação de novas funcionalidades antes dos releases, garantindo estabilidade e qualidade das entregas.<br><br>

          • Desenvolvi e mantive testes automatizados utilizando Cypress, Selenium e Playwright, cobrindo fluxos críticos de usuário, regressão e comportamento da aplicação.<br><br>

          • Contribuí para a evolução de frameworks de automação utilizando Python, JavaScript e Java, auxiliando na padronização e escalabilidade das práticas de QA no time.<br><br>

          • Realizei testes de APIs REST utilizando Postman, validando integrações, contratos e respostas de serviços.<br><br>

          • Identifiquei, documentei e acompanhei defeitos ao longo do ciclo de desenvolvimento, colaborando com desenvolvedores na reprodução e resolução de problemas.<br><br>

          • Atuei na automação de regressão de aplicações desktop, ampliando a cobertura de testes e reduzindo esforço manual em cenários críticos.<br><br>

          • Participei ativamente de rotinas ágeis (Scrum), apoiando planejamento de sprints, refinamento de histórias e validação contínua das entregas.<br><br>

          • Contribuí para a melhoria contínua da cultura de qualidade, incluindo práticas de CI/CD, automação de testes e suporte ao time de QA.`,
            en: `
          • Worked in quality assurance for web and desktop applications, executing tests to validate new features before releases and ensuring stability and delivery quality.<br><br>

          • Developed and maintained automated tests using Cypress, Selenium, and Playwright, covering critical user flows, regression suites, and application behavior.<br><br>

          • Contributed to the evolution of test automation frameworks using Python, JavaScript, and Java, helping standardize and scale QA practices within the team.<br><br>

          • Performed REST API testing using Postman, validating integrations, contracts, and service responses.<br><br>

          • Identified, documented, and tracked defects throughout the development lifecycle, collaborating closely with developers to reproduce and resolve issues.<br><br>

          • Worked on desktop application regression automation, increasing test coverage and reducing manual effort in critical scenarios.<br><br>

          • Participated in Agile (Scrum) ceremonies, supporting sprint planning, backlog refinement, and continuous validation of deliverables.<br><br>

          • Contributed to continuous improvement of QA practices, including CI/CD adoption, test automation, and team support initiatives.`,
            es: `
          • Trabajé en el proceso de aseguramiento de calidad en aplicaciones web y de escritorio, ejecutando pruebas para validar nuevas funcionalidades antes de los releases, garantizando estabilidad y calidad en las entregas.<br><br>

          • Desarrollé y mantuve pruebas automatizadas utilizando Cypress, Selenium y Playwright, cubriendo flujos críticos de usuario, regresión y comportamiento de la aplicación.<br><br>

          • Contribuí a la evolución de frameworks de automatización utilizando Python, JavaScript y Java, ayudando a estandarizar y escalar las prácticas de QA dentro del equipo.<br><br>

          • Realicé pruebas de APIs REST utilizando Postman, validando integraciones, contratos y respuestas de servicios.<br><br>

          • Identifiqué, documenté y realicé seguimiento de defectos durante todo el ciclo de desarrollo, colaborando estrechamente con desarrolladores en la reproducción y resolución de problemas.<br><br>

          • Trabajé en la automatización de regresión de aplicaciones de escritorio, aumentando la cobertura de pruebas y reduciendo el esfuerzo manual en escenarios críticos.<br><br>

          • Participé activamente en ceremonias ágiles (Scrum), apoyando la planificación de sprints, refinamiento del backlog y validación continua de entregas.<br><br>

          • Contribuí a la mejora continua de las prácticas de QA, incluyendo adopción de CI/CD, automatización de pruebas y soporte al equipo.`
          }
        },
        {
          period: {
            pt: '2023 - 2026',
            en: '2023 - 2026',
            es: '2023 - 2026'
          },
          title: {
            pt: 'QA Engineer Pleno',
            en: 'Mid-Level QA Engineer',
            es: 'QA Engineer Semi-Senior'
          },
          description: {
            pt: `
      • Assumi responsabilidade pela automação de testes, desenvolvendo e evoluindo frameworks que tornaram o processo de QA mais rápido, confiável e escalável.<br><br>

      • Transformei o processo de regressão ao automatizar fluxos críticos, reduzindo o tempo de execução de horas para cerca de 1 hora, acelerando ciclos de release.<br><br>

      • Integrei testes automatizados em pipelines de CI/CD, tornando a qualidade parte contínua do processo de entrega.<br><br>

      • Melhorei a visibilidade dos testes e o debug ao implementar relatórios estruturados com Allure Reports.<br><br>

      • Desenvolvi ferramentas internas em Python para facilitar setup de ambientes e reduzir fricção na execução dos testes.<br><br>

      • Atuei em diferentes camadas da aplicação (web, APIs e desktop/mobile), garantindo cobertura end-to-end da qualidade.<br><br>

      • Realizei validações de serviços backend via testes de API (Postman/Newman), garantindo estabilidade e consistência das integrações.<br><br>

      • Utilizei um stack diversificado de automação (Cypress, Selenium, Playwright, Robot Framework e Appium), escolhendo a melhor ferramenta para cada contexto.<br><br>

      • Atuei em ambiente ágil (Scrum), colaborando com desenvolvedores e produto para prevenir defeitos e melhorar a qualidade desde cedo.<br><br>

      • Contribuí ativamente para a cultura de automação no time, apoiando outros QA engineers e promovendo boas práticas de qualidade.`,
            en: `
      • Took ownership of test automation by designing and evolving frameworks that improved speed, reliability, and scalability of QA processes.<br><br>

      • Transformed regression testing by automating critical flows, reducing execution time from hours to approximately 1 hour, enabling faster release cycles.<br><br>

      • Integrated automated tests into CI/CD pipelines, making quality a continuous and embedded part of the delivery process.<br><br>

      • Improved test visibility and debugging by implementing structured reporting using Allure dashboards.<br><br>

      • Developed internal Python tools to simplify environment setup and reduce friction in test execution.<br><br>

      • Worked across multiple application layers (web, API, desktop/mobile), ensuring end-to-end quality coverage.<br><br>

      • Validated backend services through API testing (Postman/Newman), ensuring stable and reliable system integrations.<br><br>

      • Used a diverse automation stack (Cypress, Selenium, Playwright, Robot Framework, and Appium), selecting the most suitable tool for each scenario.<br><br>

      • Actively contributed in Agile (Scrum) environments, collaborating closely with developers and product teams to prevent issues early in the lifecycle.<br><br>

      • Helped drive a strong automation culture within the team, supporting QA peers and promoting best practices.`,
            es: `
      • Asumí la responsabilidad de la automatización de pruebas, diseñando y evolucionando frameworks que mejoraron la velocidad, confiabilidad y escalabilidad de los procesos de QA.<br><br>

      • Transformé el proceso de regresión al automatizar flujos críticos, reduciendo el tiempo de ejecución de horas a aproximadamente 1 hora, acelerando los ciclos de entrega.<br><br>

      • Integré pruebas automatizadas en pipelines de CI/CD, convirtiendo la calidad en una parte continua del proceso de entrega.<br><br>

      • Mejoré la visibilidad de las pruebas y el debugging mediante la implementación de reportes estructurados con Allure.<br><br>

      • Desarrollé herramientas internas en Python para simplificar la configuración de entornos y reducir la fricción en la ejecución de pruebas.<br><br>

      • Trabajé en múltiples capas de la aplicación (web, APIs y desktop/mobile), garantizando cobertura end-to-end.<br><br>

      • Realicé validaciones de servicios backend mediante pruebas de API (Postman/Newman), asegurando integraciones estables entre sistemas.<br><br>

      • Utilicé un stack diverso de automatización (Cypress, Selenium, Playwright, Robot Framework y Appium), seleccionando la mejor herramienta para cada contexto.<br><br>

      • Participé activamente en entornos ágiles (Scrum), colaborando estrechamente con desarrolladores y producto para prevenir defectos desde etapas tempranas.<br><br>

      • Contribuí al fortalecimiento de la cultura de automatización en el equipo, apoyando a otros QA y promoviendo buenas prácticas.`
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
