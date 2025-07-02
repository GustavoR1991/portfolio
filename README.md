# 📁 Portfolio GitHub React

Um portfolio moderno e responsivo que exibe informações do GitHub de forma elegante, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Perfil Dinâmico**: Busca automaticamente dados do perfil GitHub
- **Repositórios em Destaque**: Exibe os repositórios mais relevantes
- **Design Responsivo**: Adapta-se perfeitamente a diferentes tamanhos de tela
- **Interface Moderna**: Design limpo e profissional
- **Integração LinkedIn**: Link direto para o perfil profissional
- **Carregamento Otimizado**: Estados de loading elegantes

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool moderna e rápida
- **GitHub API** - Integração com dados do GitHub

## 📦 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/GustavoR1991/portfolio-react.git
cd portfolio-react
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

```bash
# Crie um arquivo .env.local na raiz do projeto
VITE_GITHUB_TOKEN=seu_token_aqui
VITE_GITHUB_USERNAME=seu_usuario_github
```

4. **Execute o projeto**

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🔧 Configuração da API do GitHub

Para usar a API do GitHub, você precisa:

1. Acessar [GitHub Developer Settings](https://github.com/settings/tokens)
2. Gerar um novo token pessoal
3. Adicionar o token no arquivo `.env.local`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   │   └── index.tsx        # Componente do cabeçalho
│   └── Repositories/
│       └── index.tsx        # Componente dos repositórios
├── services/
│   └── githubApi.ts         # Serviços da API GitHub
├── types/
│   └── GitHub.ts            # Tipagens TypeScript
└── App.tsx                  # Componente principal
```

## 🎨 Personalização

### Cores

As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#3b82f6',
        600: '#2563eb',
        // ...outras cores
      }
    }
  }
}
```

### Informações Pessoais

Edite o componente `Header` para personalizar:

- Link do LinkedIn
- Nome de usuário do GitHub
- Outras informações pessoais

## 🚀 Build e Deploy

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

### Deploy Sugeridos

- **Vercel**: Deploy automático via GitHub
- **Netlify**: Build contínua e CDN global
- **GitHub Pages**: Hospedagem gratuita GitHub

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Roadmap

- [ ] Adicionar gráficos de atividade GitHub
- [ ] Implementar filtros por linguagem
- [ ] Adicionar seção de skills
- [ ] Criar tema dark/light
- [ ] Adicionar animações avançadas

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Gustavo Rosa**

- GitHub: [@GustavoR1991](https://github.com/GustavoR1991)
- LinkedIn: [Gustavo Rosa de Sousa](https://www.linkedin.com/in/gustavo-rosa-de-sousa/)

## 🙏 Agradecimentos

- GitHub pela API pública
- Tailwind CSS pela facilidade de estilização
- React team pelo framework incrível

---

⭐ Se este projeto te ajudou, considere dar uma star!
