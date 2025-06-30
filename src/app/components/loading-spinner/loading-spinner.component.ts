import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-container" *ngIf="isLoading">
      <div class="spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-text">{{ message }}</div>
      </div>
    </div>
  `,
  styles: [`
    .loading-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      backdrop-filter: blur(5px);
    }

    .spinner {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .spinner-ring {
      position: absolute;
      width: 60px;
      height: 60px;
      border: 3px solid transparent;
      border-top: 3px solid #007bff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    .spinner-ring:nth-child(2) {
      width: 50px;
      height: 50px;
      border-top-color: #28a745;
      animation-delay: -0.3s;
    }

    .spinner-ring:nth-child(3) {
      width: 40px;
      height: 40px;
      border-top-color: #ffc107;
      animation-delay: -0.6s;
    }

    .spinner-text {
      margin-top: 80px;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .spinner-ring {
        animation: none;
      }
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() isLoading: boolean = false;
  @Input() message: string = 'Carregando...';
} 