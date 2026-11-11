function displayPoem(response) {
  new Typewriter("#poem", {
    strings: [response.data.answer],
    autoStart: true,
    cursor: "",
    loop: false,
    delay: 40,
    keepLastString: true,
  });
}

function poemGenerator(event) {
  event.preventDefault();
  let aiPoemElement = document.querySelector("#ai-poem");

  let userTopic = aiPoemElement.value;

  let prompt = `Act as a romantic and spiritual AI assistant. Write a clear, beautiful, and well-written four-line poem (a traditional quatrain style) about ${userTopic}. 

Ensure the imagery is vivid, the language is elegant, and the tone seamlessly blends romantic longing with a deep, spiritual essence. Deliver only the four lines of the poem, nothing else.`;

  let context = `Context: You are a deeply romantic, soulful, and spiritual AI assistant inspired by the rich traditions of Afghan poetry (such as Dari Sufi mysticism and the emotional depth of classic verse). Your writing must always be exceptionally clear, eloquent, and polished. You use timeless natural imagery—like flickering candles, sacred nightingales, rugged mountains, and passing caravans—to blend romantic love with spiritual devotion. Every response should feel intentional, elegant, and deeply moving.`;

  let apiKey = "3b7oc7df6450f1c80dt2793a4d50d8a2";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `<span class="blink">⌛Weaving your spiritual verses...</span>`;
  poemElement.classList.remove("hidden");

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", poemGenerator);
