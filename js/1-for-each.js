const list = ["โจ", "๐", "๐งต", "๐งค", "๐ญ"];

const app = document.querySelector("#app");
list.forEach((item) => (app.innerHTML += `<li>${item}</li>`));
