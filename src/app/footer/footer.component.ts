import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  email = 'dougbriet@gmail.com';
  currentYear: number;
  currentLanguage: Language = 'pt';
  translations: any;
  private subscription: Subscription = new Subscription();

  constructor(private translationService: TranslationService) {
    this.currentYear = new Date().getFullYear();
  }

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

  downloadCV(): void {
    const cvFileName = this.currentLanguage === 'pt' ? 'Douglas_Leonardo_CV_PT.pdf' : 'Douglas_Leonardo_CV_EN.pdf';
    const cvPath = `assets/documents/${cvFileName}`;
    
    // Criar um link temporário para download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = cvFileName;
    link.target = '_blank';
    
    // Adicionar ao DOM, clicar e remover
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  openCVInNewTab(): void {
    const cvFileName = this.currentLanguage === 'pt' ? 'Douglas_Leonardo_CV_PT.pdf' : 'Douglas_Leonardo_CV_EN.pdf';
    const cvPath = `assets/documents/${cvFileName}`;
    
    window.open(cvPath, '_blank');
  }
}
