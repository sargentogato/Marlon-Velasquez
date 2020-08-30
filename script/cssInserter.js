function addClass(domElement, link) {
  let getElement = document.getElementById(`${domElement}`);

  if(screen.width > 770){
    getElement.classList.remove("zoomOut");
    getElement.classList.add("zoomIn");
  
    getElement.addEventListener("mouseleave", (event) => {
      if (`${domElement} ` !== `${event.target.id}`) {
        getElement.classList.remove("zoomIn");
        getElement.classList.add("zoomOut");
      }
    });
  }
  
  $(`#${domElement}`).click(function (event) {
    event.stopImmediatePropagation()
    window.open(link, "_blank");
  });
}
