function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Imagem de Marcos sorrindo com fundo escuro");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Imagem de Marcos sorrindo com fundo claro");
  }
}
