# Projeto Final - Desenvolvimento Front-End (Senac SC)

Este projeto é a entrega da atividade prática final da Unidade Curricular de **Desenvolvimento Front-End** do **Senac Santa Catarina**.

Trata-se de uma **Landing Page completa e responsiva** para uma imobiliária fictícia situada no município de **São Miguel do Oeste - SC**: a **São Miguel Imóveis**.

---

## 🌐 Acesso Online para Testes (GitHub Pages)

O projeto está publicado e disponível para visualização e testes em qualquer dispositivo através do link:

👉 **[https://crissbarichello.github.io/Projeto_integrador_2.0/](https://crissbarichello.github.io/Projeto_integrador_2.0/)**

---

## 🎨 Paleta de Cores Oficial (Clássica e Confiável: Azul Marinho e Dourado)

A identidade visual foi definida utilizando variáveis CSS no `:root`, garantindo máxima credibilidade e foco nas conversões:

* `#1B3B6F` - **Cor Principal (Azul Marinho):** Transmite estabilidade, segurança e profissionalismo. Utilizada no `<header>`, `<footer>`, na barra de navegação, títulos e destaques.
* `#EFA00B` - **Cor de Ação / Call to Action (Dourado/Mostarda):** Desperta urgência e valor. Utilizada nos botões de "Agendar Visita", "Ver Detalhes", envio de formulário e no ícone/botões do WhatsApp.
* `#F4F4F9` - **Fundo Secundário (Cinza Muito Claro):** Utilizado como fundo da seção principal dos cards de imóveis e da área de contato, destacando os cartões brancos sem cansar a vista.
* `#2D3142` - **Texto Principal (Chumbo Elegante):** Utilizado para os parágrafos e descrições, proporcionando uma leitura muito mais confortável e sofisticada do que o preto puro.

---

## 📂 Estrutura de Pastas e Arquivos

O repositório segue uma arquitetura semântica e tradicional para projetos web estáticos:

```text
Projeto_integrador_2.0/
├── index.html                   # Página principal (HTML5 semântico com Bootstrap 5)
├── README.md                    # Documentação do projeto para entrega
└── assets/                      # Todos os recursos estáticos do site
    ├── css/
    │   └── style.css            # Estilização customizada, Box Model, Flexbox e Media Queries
    ├── js/
    │   └── scripts.js           # Scripts simples para aprimoramento de usabilidade
    └── img/
        ├── imoveis/             # Fotos dos imóveis dos cards (casas, apartamentos, terrenos)
        └── icons/               # Logotipos e ícones do projeto
```

---

## 🚀 Tecnologias Utilizadas

1. **HTML5 Semântico:** Estruturação correta com `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` e `<form>`.
2. **CSS3 Puro:**
   * **Box Model:** Controle rigoroso de `padding`, `margin`, `border` e `box-sizing: border-box`.
   * **Flexbox:** Centralização da seção Hero, alinhamento dos atributos dos cards e organização do rodapé.
   * **Media Queries Próprias:** Breakpoints manuais (`@media`) para ajustes finos de tipografia e botões em smartphones e tablets.
   * **Classe Customizada dos Cards:** `.meu-card-imovel` com bordas, sombras e efeitos de transição no hover (`transform: translateY(-8px)`).
3. **Bootstrap 5 (CDN):** Sistema de Grid fluido (`container`, `row`, `col-*`), Navbar responsiva com menu retrátil e utilitários.
4. **Bootstrap Icons (CDN):** Ícones para especificações dos imóveis, redes sociais e WhatsApp.

---

## 💻 Como Executar o Projeto Localmente

Caso deseje executar os arquivos em seu próprio ambiente:

1. Baixe ou clone este repositório.
2. Dê um duplo clique no arquivo `index.html` ou abra-o em qualquer navegador web (Google Chrome, Firefox, Microsoft Edge).
3. Para testar a responsividade, basta redimensionar a janela do navegador ou pressionar `F12` e alternar para a visualização mobile.

---

**Desenvolvido com dedicação por estudante de Front-End do Senac SC - 2026**
