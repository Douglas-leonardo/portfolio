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
}
