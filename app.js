const btnSave = document.querySelector("#save");
const btnDelete = document.querySelector("#delete");
const textarea = document.querySelector("textarea");
textarea.value = window.localStorage.getItem("note");
btnSave.addEventListener("click", () => {
  console.log("click");
  window.localStorage.setItem("note", textarea.value);
});
btnDelete.addEventListener("click", () => {
  window.localStorage.removeItem("note");
  textarea.value = "";
});
