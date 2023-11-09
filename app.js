const btn = document.querySelector("button");
const textarea = document.querySelector("textarea");
btn.addEventListener("click", () => {
  console.log("click");
  window.localStorage.setItem("note", textarea.value);
});
