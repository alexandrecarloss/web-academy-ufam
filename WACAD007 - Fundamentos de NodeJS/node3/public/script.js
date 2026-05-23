const btnGenerate = document.getElementById("btnGerar");
const result = document.getElementById("resultado");
const input = document.getElementById("qtde");

const lorem = `Lorem ipsum dolor `;
btnGenerate.addEventListener("click", () => {
    const quantity = Number(input.value);

    result.innerHTML = "";

    if (quantity <= 0) {
        result.innerHTML = "<p>Digite um valor válido</p>";
        return;
    }

    for (let i = 0; i< quantity; i++) {
        result.innerHTML += `<p>${lorem}</p>`;
    }
})