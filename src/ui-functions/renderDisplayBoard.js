export function renderDisplayBoard(displayContent) {
  // outerDiv and displayContenrt are both actual element of DOM not the name
  const outerDiv = document.querySelector(".multi-purpose-board");
  outerDiv.innerHTML = " ";

  outerDiv.appendChild(displayContent);
}
