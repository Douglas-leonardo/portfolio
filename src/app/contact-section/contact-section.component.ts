import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslationService, Language } from '../services/translation.service';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit, OnDestroy {
  currentLanguage: Language = 'pt';
  private subscription = new Subscription();

  formData = { name: '', email: '', message: '' };
  formStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  submitted = false;

  private readonly FORMSPREE_URL = 'https://formspree.io/f/mbgordwn';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.translationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    if (this.formStatus === 'sending') return;
    this.formStatus = 'sending';

    try {
      const response = await fetch(this.FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(this.formData)
      });

      if (response.ok) {
        this.formStatus = 'success';
        this.formData = { name: '', email: '', message: '' };
        this.submitted = false;
        setTimeout(() => { this.formStatus = 'idle'; }, 5000);
      } else {
        this.formStatus = 'error';
        setTimeout(() => { this.formStatus = 'idle'; }, 5000);
      }
    } catch {
      this.formStatus = 'error';
      setTimeout(() => { this.formStatus = 'idle'; }, 5000);
    }
  }

  get label() {
    const l = this.currentLanguage;
    return {
      title:       l === 'pt' ? 'Contato'            : l === 'en' ? 'Contact'            : 'Contacto',
      subtitle:    l === 'pt' ? 'Vamos conversar'   : l === 'en' ? "Let's talk"        : 'Hablemos',
      name:        l === 'pt' ? 'Nome'               : l === 'en' ? 'Name'              : 'Nombre',
      email:       'Email',
      message:     l === 'pt' ? 'Mensagem'           : l === 'en' ? 'Message'           : 'Mensaje',
      send:        l === 'pt' ? 'Enviar Mensagem'    : l === 'en' ? 'Send Message'      : 'Enviar Mensaje',
      sending:     l === 'pt' ? 'Enviando...'        : l === 'en' ? 'Sending...'        : 'Enviando...',
      success:     l === 'pt' ? '✓ Mensagem enviada com sucesso!' : l === 'en' ? '✓ Message sent successfully!' : '✓ ¡Mensaje enviado con éxito!',
      error:       l === 'pt' ? '✕ Erro ao enviar. Tente novamente.' : l === 'en' ? '✕ Failed to send. Please try again.' : '✕ Error al enviar. Intenta de nuevo.',
      namePh:      l === 'pt' ? 'Seu nome'           : l === 'en' ? 'Your name'         : 'Tu nombre',
      emailPh:     l === 'pt' ? 'seu@email.com'      : l === 'en' ? 'your@email.com'    : 'tu@email.com',
      messagePh:   l === 'pt' ? 'Sua mensagem...'    : l === 'en' ? 'Your message...'   : 'Tu mensaje...',
    };
  }
}
