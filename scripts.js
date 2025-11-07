// Seletores
const botaoConverter = document.querySelector(".botao-converter");
const selecionarMoeda = document.querySelector(".selecionar-moeda");
const inputValor = document.querySelector(".digita-valor");

// ---------- Formatação em tempo real (pt-BR, com R$) ----------
inputValor.addEventListener("input", function (event) {
  // Pega só os dígitos
  let digits = event.target.value.replace(/\D/g, "");

  // Se vazio, limpa o campo (sem mostrar R$ 0,00 automaticamente)
  if (digits === "") {
    event.target.value = "";
    return;
  }

  // Converte para número com 2 casas (centavos)
  const numberValue = (parseInt(digits, 10) / 100).toFixed(2);

  // Formata pra BRL
  event.target.value = Number(numberValue).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

});

// ---------- Função que converte (limpando o valor formatado antes) ----------
function converterValores() {
  const inputDigitaValor = document.querySelector(".digita-valor").value;

  // Remove tudo que não for dígito ou vírgula e transforma a vírgula em ponto
  const valorNumerico = parseFloat(
    inputDigitaValor
      .replace(/[^\d,]/g, "") // mantém só dígitos e vírgula
      .replace(",", ".")      // vírgula -> ponto (pra parseFloat entender)
  );


  const textoValorAConverter = document.querySelector(".texto-valor-a-converter");
  const textoValorConvertido = document.querySelector(".texto-valor");

  const DolarDia = 5.2;
  const EuroDia = 6.2;
  const LibraDia = 6.9;

  if (selecionarMoeda.value == "Dolar") {
    textoValorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(valorNumerico / DolarDia);
  }

  if (selecionarMoeda.value == "Euro") {
    textoValorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(valorNumerico / EuroDia);
  }

  if (selecionarMoeda.value == "Libra") {
    textoValorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(valorNumerico / LibraDia);
  }

  textoValorAConverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(valorNumerico);
}

// ---------- Troca do select (muda nome/imagem e atualiza) ----------
function trocaSelect() {
  const textoMoedaConvertida = document.getElementById("nome-moeda-dolar");
  const imagemMoedaConvertida = document.querySelector(".img-moeda-dolar");

  if (selecionarMoeda.value == "Dolar") {
    textoMoedaConvertida.innerHTML = "Dólar Americano";
    imagemMoedaConvertida.src = "./assets/dolar.png";
  }

  if (selecionarMoeda.value == "Euro") {
    textoMoedaConvertida.innerHTML = "Euro";
    imagemMoedaConvertida.src = "./assets/euro.png";
  }

  if (selecionarMoeda.value == "Libra") {
    textoMoedaConvertida.innerHTML = "Libra Esterlina";
    imagemMoedaConvertida.src = "./assets/libra.png";
  }

  converterValores();
}

// ---------- Event listeners ----------
selecionarMoeda.addEventListener("change", trocaSelect);
botaoConverter.addEventListener("click", converterValores);

// Enter dentro do input aciona a conversão
inputValor.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    converterValores();
  }
});
