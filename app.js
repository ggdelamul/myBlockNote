/* apparition de la fenetre de creation de nouvelle note*/
const newLink = document.querySelector(".newLink");
const newNoteInputContainer = document.querySelector(".newNoteInput-container");
console.log(newNoteInputContainer);
newLink.addEventListener("click", () => {
  newNoteInputContainer.style.display = "flex";
});
/* creation de la la clé au nom de la nouvelle note */
const newNoteInput = document.getElementById("#newNote");
console.log(newNoteInput); /*  BUG ICI*/
const saveNoteBtn = document.getElementById("#saveNote");
let newNote = newNoteInput.value; /* BUG ici */
console.log(newNote);
saveNoteBtn.addEventListener("click", () => {
  window.localStorage.setItem(newNote, "");
});
/*enregistrement et effacement de la note */

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
