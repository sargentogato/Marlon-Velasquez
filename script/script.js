/**
 * Estoy escuchando a todo el DOM
 * En el primer listener, capturo el id del elemento escuchado, el
 * cual es el que ha sido asignado en el html. Luego con el switch
 * llamo a la función addClass que agrega y quita la clase al
 * elemento que recibe cuando ha sido llamada. Esa función recibe
 * el id del elemento.
 */

document.addEventListener("mouseover", (event) => {
  let domElement = event.target.parentElement.id;

  switch (domElement) {
    case "boardGame":
      addClass(
        domElement,
        "https://sargentogato.github.io/turn-based-game-in-javaScript/"
      );
      break;

    case "tetris":
      addClass(domElement, "https://sargentogato.github.io/Tetris-sg/");
      break;

    case "crazyQuote":
      addClass(
        domElement,
        "https://sargentogato.github.io/crazyquotegenerator/"
      );
      break;

    case "js":
      addClass(
        domElement,
        "https://1drv.ms/x/s!AuDwzFWCb33QgrZtIVvj3SoU3cNlRg?e=TSTNrO"
      );
      break;

    case "css":
      addClass(domElement);
      break;

    case "flexbox":
      addClass(domElement);
      break;

    case "grid":
      addClass(domElement);
      break;

    case "html":
      addClass(domElement);
      break;

    case "git":
      addClass(domElement);
      break;

    case "linux":
      addClass(domElement);
      break;

    case "cli":
      addClass(domElement);
      break;

    case "vscode":
      addClass(domElement);
      break;

    case "adobexd":
      addClass(domElement);
      break;

    default:
      break;
  }
});

function addClass(domElement, link) {
  let getElement = document.getElementById(`${domElement}`);
  getElement.classList.remove("zoomOut");
  getElement.classList.add("zoomIn");

  getElement.addEventListener("mouseleave", (event) => {
    if (`${domElement} ` !== `${event.target.id}`) {
      getElement.classList.remove("zoomIn");
      getElement.classList.add("zoomOut");
    }
  });

  $(`#${domElement}`).click(function () {
    window.open(link, "_blank");
    stopPropagation();
  });
}
