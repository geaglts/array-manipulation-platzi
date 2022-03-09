const list = ["✨", "🎎", "🧵", "🧤", "🎭"];

const app = document.querySelector("#app");
list.forEach((item) => (app.innerHTML += `<li>${item}</li>`));
