let containerz = document.querySelector(".containerz");
let heading = document.querySelector("h1");

let load = 0;

let scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

let displayFunction = () => {
  load++;
  heading.textContent = `${load}%`;
  if (load > 99) {
    clearInterval(interval);
  }
  heading.style.opacity = scale(load, 1, 100, 1, 0);
  containerz.style.filter = `blur(${scale(load, 1, 100, 10, 0)}px)`;
};

let interval = setInterval(displayFunction, 30);
