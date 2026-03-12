const diceImage = document.getElementById('dice-image');
const message = document.getElementById('message');
const customTextInput = document.getElementById('custom-text');
const rollButton = document.getElementById('roll-button');
const toast = document.getElementById('toast');

const frasesPadrao = {
  1: 'Você tirou 1. Respire fundo e tente novamente!',
  2: 'Saiu 2. O aquecimento da sorte começou!',
  3: 'Número 3! Já está melhorando!',
  4: 'Você tirou 4. Sorte equilibrada!',
  5: 'Número 5! Quase lá!',
  6: '🎉 Incrível! Você tirou 6!'
};

let toastTimeout;

function mostrarToast(texto) {
  toast.textContent = texto;
  toast.classList.add('visible');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 1800);
}

function sortearNumero() {
  const numero = Math.floor(Math.random() * 6) + 1;
  diceImage.src = `assets/dice-${numero}.svg`;
  diceImage.alt = `Face ${numero} do dado`;

  const textoInserido = customTextInput.value.trim();
  const fraseBase = frasesPadrao[numero];

  message.textContent = textoInserido
    ? `${fraseBase} ${textoInserido}`
    : fraseBase;

  mostrarToast(`Dado sorteado: ${numero}`);
}

rollButton.addEventListener('click', sortearNumero);
