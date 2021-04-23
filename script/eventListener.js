let elementToListen = document.querySelectorAll(".section__box");
let listenedSections = elementToListen.length;

for (const element of elementToListen) {
  element.addEventListener("mouseover", (event) => {
    let domElement = event.target.parentElement.id;
    console.log(domElement);

    switch (domElement) {
      case "politicalParty":
        addClass(domElement, "https://fernandocampodiputado.com/");
        break;

      case "testing":
        addClass(domElement, "https://devscola.gitlab.io/verano/");
        break;

      case "numbers":
        addClass(domElement, "https://sargentogato.github.io/Number-Training/");
        break;

      case "boardGame":
        addClass(domElement, "https://sargentogato.github.io/turn-based-game-in-javaScript/");
        break;

      case "tetris":
        addClass(domElement, "https://sargentogato.github.io/Tetris-sg/");
        break;

      case "crazyQuote":
        addClass(domElement, "https://sargentogato.github.io/crazyquotegenerator/");
        break;

      case "js":
        addClass(domElement, "https://1drv.ms/x/s!AuDwzFWCb33QgrZtIVvj3SoU3cNlRg?e=TSTNrO");
        break;

      case "css":
        addClass(domElement, "https://1drv.ms/b/s!AuDwzFWCb33QgrhHTvdSpkZX_mPAZg");
        break;

      case "flexbox":
        addClass(domElement, "https://1drv.ms/b/s!AuDwzFWCb33QgrZ2oXo3CEd7baoXaA");
        break;

      case "grid":
        addClass(domElement, "https://1drv.ms/b/s!AuDwzFWCb33QgrZ3VyRc-Nx1bmZbJw");
        break;

      case "html":
        addClass(domElement, "https://1drv.ms/b/s!AuDwzFWCb33QgrZ5hyB_K5pmpvfpvg");
        break;

      case "git":
        addClass(domElement, "https://1drv.ms/u/s!AuDwzFWCb33QgrZ6S-2pxUnrgoyQqw?e=y1AGlY");
        break;

      case "linux":
        addClass(domElement, "https://1drv.ms/b/s!AuDwzFWCb33QgrcBt2ScDJGbd-z_Kw?e=tdbukp");
        break;

      case "cli":
        addClass(domElement, "https://1drv.ms/x/s!AuDwzFWCb33QgrZ-JXPR5iHRccVIRA?e=j2EabM");
        break;

      case "vscode":
        addClass(domElement, "https://1drv.ms/b/s!AuDwzFWCb33QgrcDkk_sgui_0d7aZA?e=wgewBr");
        break;

      case "adobexd":
        addClass(domElement, "https://1drv.ms/u/s!AuDwzFWCb33QgrcFbSjDzWh59zgmdQ?e=IjU0Ky");
        break;

      default:
        break;
    }
  });
}
