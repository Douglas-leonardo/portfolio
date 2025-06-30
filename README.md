# 🚀 Portfólio Profissional - Douglas Leonardo

Portfólio profissional desenvolvido em Angular com suporte completo a internacionalização (português e inglês), design responsivo e otimizado para performance.

## ✨ Características

- 🌍 **Internacionalização Completa**: Suporte a português e inglês
- 📱 **Design Responsivo**: Otimizado para todos os dispositivos
- ⚡ **Performance Otimizada**: Lazy loading, cache de traduções, otimizações de bundle
- ♿ **Acessibilidade**: WCAG 2.1 compliant, suporte a screen readers
- 🔍 **SEO Otimizado**: Meta tags dinâmicas, Open Graph, Twitter Cards
- 📊 **Analytics**: Rastreamento de eventos e interações
- 🎨 **UI/UX Moderna**: Design clean e profissional

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Angular 19, TypeScript, SCSS
- **Internacionalização**: Sistema customizado com cache
- **Ícones**: Font Awesome
- **Deploy**: Vercel (recomendado)

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm start

# Acesse http://localhost:4200
```

### Build para Produção
```bash
# Build otimizado
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── language-switcher/     # Seletor de idioma
│   │   └── loading-spinner/       # Componente de loading
│   ├── services/
│   │   ├── translation.service.ts # Serviço de tradução
│   │   └── analytics.service.ts   # Serviço de analytics
│   ├── pipes/
│   │   └── translate.pipe.ts      # Pipe de tradução
│   ├── home-section/              # Seção inicial
│   ├── about-section/             # Sobre mim
│   ├── skills-section/            # Habilidades
│   ├── project-section/           # Projetos
│   ├── certificates-section/      # Certificados
│   ├── header/                    # Cabeçalho
│   ├── footer/                    # Rodapé
│   └── portfolio/                 # Componente principal
├── assets/
│   └── images/                    # Imagens do projeto
└── styles.scss                    # Estilos globais
```

## 🌍 Sistema de Internacionalização

O projeto utiliza um sistema de tradução customizado com as seguintes funcionalidades:

### Uso Básico
```typescript
// No componente
constructor(private translationService: TranslationService) {}

ngOnInit() {
  this.translationService.currentLanguage$.subscribe(lang => {
    // Reagir a mudanças de idioma
  });
}
```

### No Template
```html
<!-- Usando o serviço -->
<h1>{{ translations?.home?.title }}</h1>

<!-- Usando o pipe (recomendado) -->
<h1>{{ 'home.title' | translate }}</h1>
```

### Adicionando Novas Traduções
```typescript
// Em translation.service.ts
private translations: Record<Language, Translations> = {
  pt: {
    novaSecao: {
      titulo: 'Título em Português',
      descricao: 'Descrição em português'
    }
  },
  en: {
    novaSecao: {
      titulo: 'Title in English',
      descricao: 'Description in English'
    }
  }
};
```

## 🎨 Personalização

### Cores e Temas
As variáveis de cor estão definidas em `src/styles.scss`:

```scss
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --accent-color: #28a745;
  --text-color: #333;
  --bg-color: #fff;
}
```

### Componentes
Cada seção é um componente standalone que pode ser facilmente customizado:

- `home-section/`: Seção inicial com hero
- `about-section/`: Informações pessoais e timeline
- `skills-section/`: Habilidades técnicas organizadas por categoria
- `project-section/`: Portfólio de projetos
- `certificates-section/`: Certificações e cursos

## 📊 Analytics

O projeto inclui um serviço de analytics para rastrear:

- Mudanças de idioma
- Visualizações de projetos
- Cliques em contato
- Navegação entre seções

### Configuração do Google Analytics
```typescript
// Adicione o script do GA4 no index.html
// O serviço detectará automaticamente e enviará eventos
```

## ♿ Acessibilidade

O projeto segue as diretrizes WCAG 2.1:

- ✅ Navegação por teclado
- ✅ Suporte a screen readers
- ✅ Contraste adequado
- ✅ Textos alternativos
- ✅ Estrutura semântica
- ✅ Suporte a `prefers-reduced-motion`

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel

# Para produção
vercel --prod
```

### Outras Plataformas
- **Netlify**: Arraste a pasta `dist/` para o Netlify
- **GitHub Pages**: Configure o GitHub Actions
- **Firebase**: Use `firebase deploy`

## 🔧 Scripts Disponíveis

```bash
npm start          # Servidor de desenvolvimento
npm run build      # Build para produção
npm run preview    # Preview do build
npm run test       # Executar testes
npm run lint       # Linting do código
```

## 📈 Performance

O projeto está otimizado para performance:

- **Lazy Loading**: Componentes carregados sob demanda
- **Cache de Traduções**: Evita recálculos desnecessários
- **Otimização de Imagens**: WebP com fallback
- **Minificação**: CSS e JS otimizados
- **Tree Shaking**: Remoção de código não utilizado

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Email**: dougbriet@gmail.com
- **LinkedIn**: [Douglas Leonardo](https://www.linkedin.com/in/douglas-leonardo-8152a219a/)
- **GitHub**: [@Douglas-leonardo](https://github.com/Douglas-leonardo)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
