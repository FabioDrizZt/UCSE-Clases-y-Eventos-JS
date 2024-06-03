function saludar() {
  alert('hola mundo')
}
// Seleccionar el elemento al cual aplicar el evento
const boton = document.querySelector('.boton-saludo')
// cersiorarme que seleccione bien el elemento
console.log(boton)
// Agregar el evento (obviar la palabra ON)
boton.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})
