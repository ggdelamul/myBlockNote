/* apparition de la fenetre de creation de nouvelle note*/
const newLink = document.querySelector(".newLink");
const newNoteInputContainer = document.querySelector(".newNoteInput-container");
console.log(newNoteInputContainer);
newLink.addEventListener("click", () => {
  newNoteInputContainer.style.display = "flex";
});

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
