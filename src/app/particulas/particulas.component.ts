import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-particulas',
  templateUrl: './particulas.component.html',
  standalone: true,
  styleUrls: ['./particulas.component.css']
})
export class ParticulasComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Adiciona fundo escuro
    ctx.fillStyle = '#121212'; // Cor escura de fundo
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const particles: any[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 100 };
    const particleCount = 203;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        density: Math.random() * 10 + 5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(40, 167, 69, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      // Em vez de clearRect, preenchemos com a cor escura
      ctx.fillStyle = '#121212'; // Mesma cor do fundo
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(40, 167, 69, 0.8)";

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (Math.random() < 0.01) {
          p.vx += (Math.random() - 0.5) * 0.1;
          p.vy += (Math.random() - 0.5) * 0.1;
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 0.4) {
          p.vx = (p.vx / speed) * 0.4;
          p.vy = (p.vy / speed) * 0.4;
        }

        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;

          if (distance < maxDistance) {
            p.x -= forceDirectionX * force * p.density * 0.7;
            p.y -= forceDirectionY * force * p.density * 0.7;
          }
        }

        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          if (p.x < 0 || p.x > canvas.width) p.vx *= -0.8;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      connect();
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.fillStyle = '#121212';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
  }
}
