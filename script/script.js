/**
 * Estoy escuchando a todo el DOM
 * En el primer listener, capturo el id del elemento escuchado, el
 * cual es el que ha sido asignado en el html. Luego con el switch
 * llamo a la función addClass que agrega y quita la clase al
 * elemento que recibe cuando ha sido llamada. Esa función recibe
 * el id del elemento.
 */

document.addEventListener("mouseover", (event) => {
  let element = event.target.parentElement.id;

  switch (element) {
    case "boardGame":
      addClass(element);
      break;

    case "tetris":
      addClass(element);
      break;

    case "crazyQuote":
      addClass(element);
      break;

    case "js":
      addClass(element);
      break;

    case "css":
      addClass(element);
      break;

    case "html":
      addClass(element);
      break;

    case "git":
      addClass(element);
      break;

    case "linux":
      addClass(element);
      break;

    case "adobexd":
      addClass(element);
      break;

    default:
      break;
  }
});

function addClass(element) {
  let getElement = document.getElementById(`${element}`);
  getElement.classList.remove("zoomOut");
  getElement.classList.add("zoomIn");

  getElement.addEventListener("mouseleave", (event) => {
    console.log(typeof element);
    console.log(typeof event.target.id);
    if (`${element} ` !== `${event.target.id}`) {
      getElement.classList.remove("zoomIn");
      getElement.classList.add("zoomOut");
      console.log("ajaaaa", event.target.id);
    }
  });
}
