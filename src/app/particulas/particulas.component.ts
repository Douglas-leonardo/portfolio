import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-particulas',
  templateUrl: './particulas.component.html',
  standalone: true,
  styleUrls: ['./particulas.component.css']
})
export class ParticulasComponent implements AfterViewInit {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: any[] = [];
  private mouse = { x: null as number | null, y: null as number | null, radius: 100 };
  private animationId!: number;

  ngAfterViewInit(): void {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.initCanvas();
    this.createParticles();
    this.animate();
  }

  @HostListener('window:resize')
  onResize() {
    this.resetCanvas();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouse.x = e.x;
    this.mouse.y = e.y;
  }

  private initCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx.fillStyle = '#121212';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private resetCanvas() {
    cancelAnimationFrame(this.animationId);
    this.initCanvas();
    this.createParticles();
    this.animate();
  }

  private createParticles() {
    this.particles = [];
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 80 : 200; // Reduz drasticamente para mobile

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: isMobile ? Math.random() * 1 + 0.5 : Math.random() * 2 + 1, // Partículas menores
        baseX: Math.random() * this.canvas.width,
        baseY: Math.random() * this.canvas.height,
        density: Math.random() * 10 + 5,
        vx: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.3), // Movimento mais lento
        vy: (Math.random() - 0.5) * (isMobile ? 0.1 : 0.3)
      });
    }
  }

  private connectParticles() {
    const isMobile = window.innerWidth <= 768;
    const maxDistance = isMobile ? 60 : 100; // Conexões mais curtas

    for (let a = 0; a < this.particles.length; a++) {
      for (let b = a; b < this.particles.length; b++) {
        const dx = this.particles[a].x - this.particles[b].x;
        const dy = this.particles[a].y - this.particles[b].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          this.ctx.strokeStyle = `rgba(40, 167, 69, ${1 - distance / maxDistance})`;
          this.ctx.lineWidth = isMobile ? 0.3 : 0.5; // Linhas mais finas
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[a].x, this.particles[a].y);
          this.ctx.lineTo(this.particles[b].x, this.particles[b].y);
          this.ctx.stroke();
        }
      }
    }
  }

  private animate() {
    this.ctx.fillStyle = '#121212';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "rgba(40, 167, 69, 0.8)";

    const isMobile = window.innerWidth <= 768;
    const maxSpeed = isMobile ? 0.2 : 0.4; // Velocidade máxima reduzida

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (Math.random() < 0.01) {
        p.vx += (Math.random() - 0.5) * 0.1;
        p.vy += (Math.random() - 0.5) * 0.1;
      }

      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > maxSpeed) {
        p.vx = (p.vx / speed) * maxSpeed;
        p.vy = (p.vy / speed) * maxSpeed;
      }

      if (this.mouse.x && this.mouse.y) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = this.mouse.radius;
        let force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          p.x -= forceDirectionX * force * p.density * (isMobile ? 0.4 : 0.7);
          p.y -= forceDirectionY * force * p.density * (isMobile ? 0.4 : 0.7);
        }
      }

      if (p.x < 0 || p.x > this.canvas.width || p.y < 0 || p.y > this.canvas.height) {
        if (p.x < 0 || p.x > this.canvas.width) p.vx *= -0.8;
        if (p.y < 0 || p.y > this.canvas.height) p.vy *= -0.8;
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });

    this.connectParticles();
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationId);
  }
}
