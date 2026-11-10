function poemGenerator(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  new Typewriter("#poem", {
    strings: "Oh water, you know the way,",
    autoStart: true,
    cursor: "",
    loop: false,
  });
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", poemGenerator);
