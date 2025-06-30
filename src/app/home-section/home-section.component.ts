import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit, OnDestroy {
  translations: any;
  private subscription: Subscription = new Subscription();

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.translationService.currentLanguage$.subscribe(() => {
        this.translations = this.translationService.getTranslations();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
