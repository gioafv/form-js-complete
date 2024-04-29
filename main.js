document.addEventListener("DOMContentLoaded", function () {
    let formContatos = document.querySelector(".formContatos");

    formContatos.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        let nomeContato = document.getElementById("contact-name").value;
        let telefoneContato = document.getElementById("tel-contact").value;

        let tbody = document.getElementById("corpoTabela");
        let newRow = tbody.insertRow();

        let cellNome = newRow.insertCell(0);
        let cellTelefone = newRow.insertCell(1);

        cellNome.textContent = nomeContato;
        cellTelefone.textContent = telefoneContato;

        document.getElementById("contact-name").value = "";
        document.getElementById("tel-contact").value = "";
    });
});
