import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from '../../services/translation.service';

interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
  ariaLabel: string;
}

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="language-switcher" role="region" aria-label="Language selector">
      <div class="language-select-container">
        <label for="language-select" class="sr-only">Select language</label>
        <select 
          id="language-select"
          class="language-select" 
          [value]="currentLanguage"
          (change)="changeLanguage($any($event.target).value)"
          [attr.aria-label]="'Selecionar idioma'"
          role="combobox"
          aria-haspopup="listbox"
        >
          <option 
            *ngFor="let lang of languages" 
            [value]="lang.code"
            class="language-option"
            [attr.aria-label]="lang.ariaLabel"
          >
            {{ lang.flag }} {{ lang.name }}
          </option>
        </select>
        <div class="select-arrow" aria-hidden="true">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .language-switcher {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 1000;
    }

    .language-select-container {
      position: relative;
      display: inline-block;
    }

    .language-select {
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      padding: 10px 40px 10px 15px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      min-width: 120px;
    }

    .language-select:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }

    .language-select:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.25);
      border-color: rgba(255, 255, 255, 0.4);
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
    }

    .language-option {
      background: #2a2a2a;
      color: #fff;
      padding: 8px 12px;
    }

    .select-arrow {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: rgba(255, 255, 255, 0.7);
      font-size: 12px;
      transition: transform 0.3s ease;
    }

    .language-select:focus + .select-arrow {
      transform: translateY(-50%) rotate(180deg);
    }

    /* Screen reader only class */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    @media (max-width: 768px) {
      .language-switcher {
        bottom: 15px;
        left: 15px;
      }
      
      .language-select {
        padding: 8px 35px 8px 12px;
        font-size: 13px;
        min-width: 100px;
      }
    }

    @media (max-width: 480px) {
      .language-switcher {
        bottom: 10px;
        left: 10px;
      }
      
      .language-select {
        padding: 6px 30px 6px 10px;
        font-size: 12px;
        min-width: 90px;
      }
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .language-select {
        border: 2px solid #fff;
        background: #000;
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .language-select,
      .select-arrow {
        transition: none;
      }
    }
  `]
})
export class LanguageSwitcherComponent {
  currentLanguage: Language = 'pt';

  languages: LanguageOption[] = [
    {
      code: 'pt',
      name: 'Português',
      flag: '🇧🇷',
      ariaLabel: 'Mudar para português'
    },
    {
      code: 'en',
      name: 'English',
      flag: '🇺🇸',
      ariaLabel: 'Change to English'
    },
    {
      code: 'es',
      name: 'Español',
      flag: '🇪🇸',
      ariaLabel: 'Cambiar a español'
    }
  ];

  constructor(private translationService: TranslationService) {
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  changeLanguage(language: Language): void {
    this.translationService.setLanguage(language);
  }
} 