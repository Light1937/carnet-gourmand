const form = document.querySelector("#comment-form");
const authorInput = document.querySelector("#author");
const messageInput = document.querySelector("#message");
const errorMessage = document.querySelector("#error-message");
const commentList = document.querySelector("#comment-list");

function addComment(author, text) {
  const comment = document.createElement("div");
  comment.classList.add("comment");

  const authorElement = document.createElement("p");
  authorElement.classList.add("comment-author");
  authorElement.textContent = author;

  const textElement = document.createElement("p");
  textElement.classList.add("comment-text");
  textElement.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.classList.add("btn-delete");
  deleteButton.textContent = "🗑️ Supprimer";

  deleteButton.addEventListener("click", function () {
    comment.remove();
  });

  comment.appendChild(authorElement);
  comment.appendChild(textElement);
  comment.appendChild(deleteButton);

  commentList.appendChild(comment);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const author = authorInput.value.trim();
  const text = messageInput.value.trim();

  if (author.length < 2) {
    errorMessage.textContent = "Le nom doit contenir au moins 2 caractères.";
    return;
  }

  if (text.length < 10) {
    errorMessage.textContent = "Le commentaire doit contenir au moins 10 caractères.";
    return;
  }

  errorMessage.textContent = "";
  addComment(author, text);
  form.reset();
});