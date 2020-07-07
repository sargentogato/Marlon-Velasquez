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
      addClass(
        domElement,
        "https://1drv.ms/b/s!AuDwzFWCb33QgrZz_dI81pzf7VHPzA"
      );
      break;

    case "flexbox":
      addClass(
        domElement,
        "https://1drv.ms/b/s!AuDwzFWCb33QgrZ2ANAr9dB4jNGKgw"
      );
      break;

    case "grid":
      addClass(
        domElement,
        "https://1drv.ms/b/s!AuDwzFWCb33QgrZ3_8ePGi5v6A2QGQ"
      );
      break;

    case "html":
      addClass(
        domElement,
        "https://1drv.ms/b/s!AuDwzFWCb33QgrZ5hyB_K5pmpvfpvg"
      );
      break;

    case "git":
      addClass(
        domElement,
        "https://1drv.ms/u/s!AuDwzFWCb33QgrZ6S-2pxUnrgoyQqw?e=y1AGlY"
      );
      break;

    case "linux":
      addClass(
        domElement,
        "https://1drv.ms/b/s!AuDwzFWCb33QgrcBt2ScDJGbd-z_Kw?e=tdbukp"
      );
      break;

    case "cli":
      addClass(
        domElement,
        "https://1drv.ms/x/s!AuDwzFWCb33QgrZ-JXPR5iHRccVIRA?e=j2EabM"
      );
      break;

    case "vscode":
      addClass(
        domElement,
        "https://1drv.ms/b/s!AuDwzFWCb33QgrcDkk_sgui_0d7aZA?e=wgewBr"
      );
      break;

    case "adobexd":
      addClass(
        domElement,
        "https://1drv.ms/u/s!AuDwzFWCb33QgrcFbSjDzWh59zgmdQ?e=IjU0Ky"
      );
      break;

    default:
      break;
  }
});
