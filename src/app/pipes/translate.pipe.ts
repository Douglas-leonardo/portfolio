import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // Impure pipe para reatividade
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private subscription: Subscription = new Subscription();
  private lastKey: string = '';
  private lastLanguage: string = '';
  private lastResult: string = '';

  constructor(private translationService: TranslationService) {}

  transform(key: string): string {
    const currentLanguage = this.translationService.getCurrentLanguage();
    
    // Cache simples para evitar recálculos desnecessários
    if (this.lastKey === key && this.lastLanguage === currentLanguage) {
      return this.lastResult;
    }

    this.lastKey = key;
    this.lastLanguage = currentLanguage;
    this.lastResult = this.translationService.getTranslation(key);
    
    return this.lastResult;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
} 