const scroller = scrollama();
const graphic = document.getElementById("graphic-content");

scroller
  .setup({
    step: ".step",
    offset: 0.5, // trigger when step hits middle of screen
  })
  .onStepEnter(response => {
    const step = response.element.dataset.step;
    graphic.textContent = `Step ${step}`;
  });

// Important: handle resize
window.addEventListener("resize", scroller.resize);
