
# 💱 Conversor de Moedas

Um conversor de moedas moderno e funcional, desenvolvido para transformar valores em **Real (BRL)** para **Dólar Americano (USD)**, **Euro (EUR)** ou **Libra Esterlina (GBP)**.  
O projeto foi criado com foco em **simplicidade**, **usabilidade** e **design responsivo**, combinando boas práticas de **HTML**, **CSS** e **JavaScript**.

---

## 🚀 Tecnologias Utilizadas

### 🧱 **HTML5**
- Estrutura semântica e organizada.  
- Uso de elementos `<main>`, `<section>` e `<label>` para acessibilidade e SEO.  
- Integração de **Google Fonts** para tipografia moderna (Roboto).  
- Inclusão otimizada de scripts e folhas de estilo.

### 🎨 **CSS3**
- Estilização totalmente personalizada com foco em **interface limpa e intuitiva**.  
- Uso de propriedades modernas:
  - `flexbox` para alinhamento central e responsividade.  
  - `border-radius` e `box-sizing` para um visual arredondado e consistente.  
  - Paleta de cores com contraste suave (roxo + branco).  
- Implementação de **efeitos de hover e active** nos botões.  
- Ajuste visual através de `transform: scale()` e centralização vertical completa com `flexbox`.  
- Layout encapsulado em `.container-geral`, garantindo que o conteúdo fique sempre centralizado na tela.

### ⚙️ **JavaScript (Vanilla JS)**
- Manipulação dinâmica do DOM usando `querySelector()` e `addEventListener()`.  
- Conversão automática entre moedas com valores fixos de referência:
  - **Dólar Americano (USD)** – R$ 5,20  
  - **Euro (EUR)** – R$ 6,20  
  - **Libra Esterlina (GBP)** – R$ 6,90  
- Formatação monetária com **`Intl.NumberFormat`** e suporte completo a:
  - `pt-BR` → para Real (R$)
  - `en-US` → para Dólar ($)
  - `de-DE` → para Euro (€)
  - `en-GB` → para Libra (£)
- Formatação em tempo real no campo de entrada (`input`) — o valor digitado é exibido instantaneamente como moeda brasileira.  
- Conversão acionável tanto pelo **botão** quanto pela **tecla Enter**.  
- Atualização automática de bandeiras e nomes das moedas ao trocar o `<select>`.

---

## 🖼️ Layout

O design foi pensado para ser **claro e acessível**, com:
- Fundo roxo principal (`#8A51FC`) e contraste com o conteúdo branco.  
- Ícones e bandeiras que representam visualmente as moedas.  
- Elementos centralizados, criando uma interface agradável e intuitiva.  

📸 *Exemplo visual*

<img src="assets/Mockup - Conversor de moedas.png" alt="Muckup mobile e desktop" width="800">

---

## 🧠 Conceitos Aplicados

- Manipulação de eventos (`click`, `input`, `change`, `keydown`)  
- Conversão de strings para números (`parseFloat`, `replace`, `toFixed`)  
- Controle de fluxo e funções puras  
- Boas práticas de separação de responsabilidades entre HTML, CSS e JS

---

## 🌐 Acesse o Projeto Online

👉 [**Clique aqui para testar o Dia de Sorte**](https://tarcisioguedes.github.io/Conversor-de-Moedas/)

