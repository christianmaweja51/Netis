// la liste de boutons a ajouter un evenement de click

document
    .querySelector(".site-lock .add-icon")
    .addEventListener("click", () => addImages("site-lock"));

document
    .querySelector(".site-entry-img .add-icon")
    .addEventListener("click", () => addImages("site-entry-img"));

document
    .querySelector(".generator-img .add-icon")
    .addEventListener("click", () => addImages("generator-img"));

document
    .querySelector(".deep-sea-img .add-icon")
    .addEventListener("click", () => addImages("deep-sea-img"));

document
    .querySelector(".smps-img .add-icon")
    .addEventListener("click", () => addImages("smps-img"));

document
    .querySelector(".Janitorial .add-icon")
    .addEventListener("click", () => addImages("Janitorial"));

document
    .querySelector(".items .add-icon")
    .addEventListener("click", () => addImages("items"));
document
    .querySelector("#download")
    .addEventListener("click", downloadPageAsPDF);

document
    .querySelector(".Extinct .add-icon")
    .addEventListener("click", () => addImages("Extinct"));

document
    .querySelector(".site-sherk .add-icon")
    .addEventListener("click", () => addImages("site-sherk"));


// la fonction qui ajoute dynamiquement les images
function addImages(containerName) {
    // creer un input de type file
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = true;

    // ajouter un ecouteur d'evenement pour quand les images sont selectionnees
    fileInput.addEventListener("change", function () {
        const files = fileInput.files;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            const reader = new FileReader();

            reader.addEventListener("load", function () {
                const pictureDiv = document.createElement("div");
                pictureDiv.classList.add("picture");

                const image = document.createElement("img");
                image.src = reader.result;

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Supprimer";

                deleteButton.addEventListener("click", function () {
                    pictureDiv.remove();
                });

                pictureDiv.appendChild(image);
                pictureDiv.appendChild(deleteButton);

                const picturesContainer = document.querySelector(
                    `.${containerName} .pictures-container`
                );
                picturesContainer.appendChild(pictureDiv);
            });

            reader.readAsDataURL(file);
        }
    });
    fileInput.click();
}

// la fonction pour telecharger au format pdf
function downloadPageAsPDF() {
    const content = document.querySelector(".main")

    var opt = {
        margin: 0,
        filename: "rapportdmp.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(content).set(opt).save();
}