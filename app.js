const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");
textarea.value = window.localStorage.getItem("note");
btn.addEventListener("click", () => {
  console.log("click");
  window.localStorage.setItem("note", textarea.value);
});
