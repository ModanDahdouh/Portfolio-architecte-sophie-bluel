document.addEventListener("DOMContentLoaded", async function () {
    // Charger les données des œuvres
    const responseWorks = await fetch("http://localhost:5678/api/works");
    const dataWorks = await responseWorks.json();

    // Sélectionner l'élément "portfolio"
    const portfolio = document.getElementById("portfolio");

    // Ajouter un titre "Mes Projets"
    const h2 = document.createElement("h2");
    h2.textContent = "Mes Projets";
    portfolio.appendChild(h2);

    // Charger les données des catégories
    const responseCategories = await fetch(
        "http://localhost:5678/api/categories"
    );
    const dataCategories = await responseCategories.json();

    // Créer le conteneur du filtre
    const filter = document.createElement("div");
    filter.classList.add("filter");
    portfolio.appendChild(filter);

    // Ajouter le filtre "Tous"
    const filterAll = document.createElement("div");
    filterAll.classList.add("filtersTous");
    filterAll.textContent = "Tous";
    filter.appendChild(filterAll);

    // Ajouter les filtres de catégorie
    dataCategories.forEach((category) => {
        const filterCategory = document.createElement("div");
        filterCategory.classList.add("filters");
        filterCategory.textContent = category.name;
        filterCategory.id = category.id;
        filter.appendChild(filterCategory);
    });

    // Créer la galerie d'œuvres
    const gallery = document.createElement("div");
    gallery.classList.add("gallery");

    // Ajouter les images et légendes des œuvres
    dataWorks.forEach((work) => {
        const figure = document.createElement("figure");
        gallery.appendChild(figure);

        const img = document.createElement("img");
        img.src = work.imageUrl;
        img.alt = work.title;
        figure.appendChild(img);

        const figcaption = document.createElement("figcaption");
        figcaption.textContent = work.title;
        figure.appendChild(figcaption);
    });

    // Ajouter la galerie au portfolio
    portfolio.appendChild(gallery);

    // Gestionnaire d'événement de clic pour chaque filtre
    const filters = document.querySelectorAll(".filters");
    filters.forEach((filter) => {
        filter.addEventListener("click", function () {
            const categoryId = this.id;
            filterWorksByCategory(dataWorks, categoryId);
        });
    });

    // Gestionnaire d'événement de clic pour le filtre "Tous"
    filterAll.addEventListener("click", function () {
        showAllWorks(dataWorks);
    });
    // Filtrer les œuvres par catégorie
    function filterWorksByCategory(dataWorks, categoryId) {
        const filteredWorks = dataWorks.filter((work) => {
            return work.categoryId === parseInt(categoryId);
        });

        updateGallery(filteredWorks);
    }

    // Afficher toutes les œuvres
    function showAllWorks(dataWorks) {
        updateGallery(dataWorks);
    }

    // Mettre à jour la galerie d'œuvres
    function updateGallery(filteredWorks) {
        const gallery = document.querySelector(".gallery");
        gallery.innerHTML = "";

        filteredWorks.forEach((work) => {
            const figure = document.createElement("figure");
            gallery.appendChild(figure);

            const img = document.createElement("img");
            img.src = work.imageUrl;
            img.alt = work.title;
            figure.appendChild(img);

            const figcaption = document.createElement("figcaption");
            figcaption.textContent = work.title;
            figure.appendChild(figcaption);
        });
    }
});
