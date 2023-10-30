document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("ajou-modal");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementsByClassName("close")[0];
    const addForm = document.getElementById("addForm");
    const tabBody = document.getElementById("tab-body");

    openModalButton.addEventListener("click", function () {
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    addForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Récupérez les valeurs du formulaire
        const nomPrenom = document.getElementById("nomPrenom").value;
        const noteDS1 = document.getElementById("noteDS1").value;
        const examen1 = document.getElementById("examen1").value;
        const noteDS2 = document.getElementById("noteDS2").value;
        const examen2 = document.getElementById("examen2").value;

        // Calculez les moyennes
        const moyenne1 = (parseFloat(noteDS1) + (parseFloat(examen1)*2)) / 3;
        const moyenne2 = (parseFloat(noteDS2) + (parseFloat(examen2)*2))  / 3;
        const moyenneFinale = (moyenne1 + moyenne2) / 2;

        // Créez une nouvelle ligne pour le tableau
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${nomPrenom}</td>
            <td>${noteDS1}</td>
            <td>${examen1}</td>
            <td>${noteDS2}</td>
            <td>${examen2}</td>
            <td>${moyenne1}</td>
            <td>${moyenne2}</td>
            <td>${moyenneFinale}</td>
    
            <td><button class="remove">Modifier</button></td>
            <td><button class="btn btn-danger">Supprimer</button></td>
        `;

        tabBody.appendChild(newRow);
        // Réinitialisez les valeurs du formulaire
        addForm.reset();
        modal.style.display = "none";
    });

    // Gérer la suppression d'une ligne
    tabBody.addEventListener("click", function (e) {
        if (e.target && e.target.className === "remove") {
            e.target.parentElement.parentElement.remove();
            
        }
    });
});
