import './styles.less';

const menu = document.querySelector('.menu');
const botonMenu = document.querySelector('.boton-menu');

botonMenu.addEventListener('click', () => {
  menu.classList.toggle('abierto');
});

document.querySelector('#anio').textContent = new Date().getFullYear();
