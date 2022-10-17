var perguntas = document.getElementsByClassName("pergunta");
var i;

for (i = 0; i < perguntas.length; i++) {
	perguntas[i].addEventListener("click", function() {
		/* Alterna entre adicionar e remover a classe "ativa",
     para destacar o botão que controla a resposta */
		this.classList.toggle("active");
	
		/* Alterna entre  mostrar e ocultar a resposta */
		var respostas = this.nextElementSibling;
		if(respostas.style.display === "block") {
			respostas.style.display = "none";
		} else {
			respostas.style.display = "block";
		}

		if (respostas.style.maxHeight) {
      respostas.style.maxHeight = null;
    } else {
      respostas.style.maxHeight = respostas.scrollHeight + "px";
    }

		if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-xmark");
    } else {
      this.childNodes[1].classList.remove("fa-xmark");
      this.childNodes[1].classList.add("fa-plus");
    }
})
}
