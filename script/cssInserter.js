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
