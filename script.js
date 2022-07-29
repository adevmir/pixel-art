/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable max-lines-per-function */
const tabelaExsite = 1;
let tamanho = 5;
function colorSelect(colorId) {
  const selectElement = document.querySelector('.selected');
  selectElement.classList.remove('selected');
  const newSelect = document.getElementById(colorId);
  newSelect.classList.add('selected');
}

function paintPixel(pixelSelect) {
  const event = document.getElementById(pixelSelect);
  const corSelecionada = document.querySelector('.selected');
  const bgColor = corSelecionada.getAttribute('style');
  event.setAttribute('style', bgColor);
}

function limpaQuadro(clear) {
  for (let i = 1; i < (tamanho * tamanho); i += 1) {
    const pixelClear = `${clear}${i}`;
    const quadro = document.getElementById(pixelClear);
    quadro.setAttribute('style', 'background-color: rgb(255, 255, 255)');
  }
}

function geraPixels(table, i, pixelId) {
  for (let a = 1; a <= tamanho; a += 1) {
    const pixel = document.createElement('button');
    pixel.setAttribute('onclick', `paintPixel('pixel${pixelId}')`);
    pixel.setAttribute('id', `pixel${pixelId}`);
    pixel.setAttribute('class', 'pixel');
    pixel.setAttribute('style', 'background-color: rgb(255, 255, 255);');

    var create = document.getElementById(`#pixelLine${i}`);
    create.appendChild(pixel);
    document.querySelector('#pixel-board').value = '';
    pixelId += 1;
  }
  return pixelId;
}

function gerador(tamanhoRecebido) {
  tamanho = tamanhoRecebido;
  const table = document.getElementById('pixel-board');
  let pixelId = 1;
  for (let i = 1; i <= tamanho; i += 1) {
    const pixel = document.createElement('div');
    pixel.setAttribute('class', 'pixelLine');
    pixel.setAttribute('id', `#pixelLine${i}`);
    table.appendChild(pixel);
    pixelId = geraPixels(table, i, pixelId);
  }
}

function gerarTabela() {
  tamanho = document.getElementById('board-size').value;
  if (tamanho === '') {
    alert('Board inválido!');
  } else {
    if (tamanho > 50) {
      tamanho = 50;
    } else if (tamanho < 5) {
      tamanho = 5;
    }
    const div = document.querySelector('#pixel-board');
    div.innerHTML = '';
    gerador(tamanho);
  }
}

function gerarCor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b})`;
}

function paletaCores() {
  let corPaletId = 2;
  for (let i = 0; i < 3; i += 1) {
    const corPalet = `color${corPaletId}`;
    const cor = document.getElementById(corPalet);
    cor.setAttribute('style', `background-color: ${gerarCor()};`);
    corPaletId += 1;
  }
}

function carregarPagina() {
  paletaCores();
  gerador(tamanho);
}

function valorTamanho() {
  tamanho = document.getElementById('board-size').value;
  return value;
}

window.onload = carregarPagina;
