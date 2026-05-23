const btnGenerate = document.getElementById("btnGerar");
const result = document.getElementById("resultado");
const input = document.getElementById("qtde");

btnGenerate.addEventListener("click", async () => {

    const quantity = Number(input.value);

    if (quantity <= 0) {
        result.innerHTML = "<p>Digite um valor válido</p>";
        return;
    }

    const response = await fetch(`/lorem?qtd=${quantity}`);

    const data = await response.json();

    result.innerHTML = "";

    const paragraphs = data.texto.split("\n");

    paragraphs.forEach(paragraph => {

        result.innerHTML += `
            <p>${paragraph}</p>
        `;
    });
});