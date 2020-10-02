function cloneField() {
  const newFieldContainer = document
    .querySelector('.campo-jogador')
    .cloneNode(true);

  document.querySelector('.container').appendChild(newFieldContainer);
}

document.querySelector('.btn').addEventListener('click', cloneField);
