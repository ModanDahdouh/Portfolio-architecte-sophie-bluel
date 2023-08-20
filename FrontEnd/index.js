document.addEventListener("DOMContentLoaded", async function () {
    const body = document.querySelectorAll("body");
    console.log(body);
    // Sélectionner l'élément "portfolio"
    const portfolio = document.getElementById("portfolio");

    const title = document.createElement("div");
    title.classList.add("boxTitle");
    // Ajouter un titre "Mes Projets"
    const h2 = document.createElement("h2");
    h2.textContent = "Mes Projets";
    h2.classList.add("h2Projet");

    const buttonModifierGallerie = document.createElement("button");
    buttonModifierGallerie.textContent = "modifier";
    buttonModifierGallerie.classList.add("buttonModifierGallerie");

    const modaleGallery = document.createElement("div");
    modaleGallery.id = "modaleGallery";
    modaleGallery.style.display = "none";
    title.appendChild(modaleGallery);

    const isButtonHidden = localStorage.getItem("buttonHidden") === "true";
    if (isButtonHidden) {
        buttonModifierGallerie.style.display = "flex";
    }

    const isModaleOpen = localStorage.getItem("modaleOpen") === "true";
    if (isModaleOpen) {
        modaleGallery.style.display = "flex";
        buttonModifierGallerie.style.display = "none";
    } else {
        localStorage.setItem("modaleOpen", "false");
    }

    buttonModifierGallerie.addEventListener("click", () => {
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.30)";
        modaleGallery.style.display = "flex";
        modaleGallery.style.position = "absolute";
        buttonModifierGallerie.style.display = "none";
        localStorage.setItem("modaleOpen", "true");
    });

    // Créez l'élément SVG
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.classList.add("svg");

    // Définissez les attributs SVG
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "24");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");

    // Créez le chemin SVG
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute(
        "d",
        "M17.6546 8.05106C18.1235 7.58214 18.1235 6.82061 17.6546 6.35169C17.1856 5.88277 16.4241 5.88277 15.9552 6.35169L12.005 10.3056L8.05106 6.35544C7.58214 5.88652 6.82061 5.88652 6.35169 6.35544C5.88277 6.82436 5.88277 7.58589 6.35169 8.05481L10.3056 12.005L6.35544 15.9589C5.88652 16.4279 5.88652 17.1894 6.35544 17.6583C6.82436 18.1272 7.58589 18.1272 8.05481 17.6583L12.005 13.7044L15.9589 17.6546C16.4279 18.1235 17.1894 18.1235 17.6583 17.6546C18.1272 17.1856 18.1272 16.4241 17.6583 15.9552L13.7044 12.005L17.6546 8.05106Z"
    );
    path.setAttribute("fill", "black");

    // Ajoutez le chemin au SVG
    svg.appendChild(path);

    modaleGallery.appendChild(svg);

    svg.addEventListener("click", () => {
        modaleGallery.style.display = "none";
        buttonModifierGallerie.style.display = "flex";
        document.body.style.backgroundColor = "#fff";

        localStorage.setItem("modaleOpen", "false");
        localStorage.setItem("buttonHidden", "true");
    });

    const h2modale = document.createElement("h2");
    h2modale.classList.add("h2");
    h2modale.textContent = "Galerie photo";
    modaleGallery.appendChild(h2modale);

    const galleryModale = document.createElement("div");
    galleryModale.classList.add("galleryModale");
    modaleGallery.appendChild(galleryModale);

    const btnModale = document.createElement("button");
    btnModale.classList.add("btnModale");
    btnModale.textContent = "Ajouter une photo";
    modaleGallery.appendChild(btnModale);

    // Créer un élément <a>
    const link = document.createElement("a");
    link.href = "#";
    link.id = "link";
    link.textContent = "Mot de passe oublié";
    modaleGallery.appendChild(link);

    const svgNamespace = "http://www.w3.org/2000/svg";

    // Création de l'élément SVG
    const svgElement = document.createElementNS(svgNamespace, "svg");
    svgElement.classList.add("svgElement");
    svgElement.setAttributeNS(null, "width", "16");
    svgElement.setAttributeNS(null, "height", "16");
    svgElement.setAttributeNS(null, "viewBox", "0 0 16 16");
    svgElement.setAttributeNS(null, "fill", "none");

    // Création de l'élément path
    const pathElement = document.createElementNS(svgNamespace, "path");
    pathElement.setAttributeNS(
        null,
        "d",
        "M13.5229 1.68576L13.8939 2.05679C14.1821 2.34503 14.1821 2.81113 13.8939 3.0963L13.0016 3.99169L11.5879 2.57808L12.4803 1.68576C12.7685 1.39751 13.2346 1.39751 13.5198 1.68576H13.5229ZM6.43332 7.73578L10.5484 3.61759L11.9621 5.03121L7.84387 9.14633C7.75494 9.23525 7.64455 9.29964 7.52496 9.33337L5.73111 9.84546L6.2432 8.05162C6.27693 7.93203 6.34133 7.82164 6.43025 7.73271L6.43332 7.73578ZM11.4408 0.646245L5.39074 6.6932C5.12397 6.95998 4.93078 7.28808 4.82959 7.64685L3.9526 10.7133C3.879 10.9708 3.94953 11.2468 4.13965 11.4369C4.32977 11.627 4.60574 11.6976 4.86332 11.624L7.92973 10.747C8.29156 10.6427 8.61967 10.4495 8.88338 10.1858L14.9334 4.13888C15.7951 3.27722 15.7951 1.87894 14.9334 1.01728L14.5624 0.646245C13.7007 -0.215415 12.3024 -0.215415 11.4408 0.646245ZM2.69844 1.84214C1.20816 1.84214 0 3.05031 0 4.54058V12.8812C0 14.3715 1.20816 15.5796 2.69844 15.5796H11.0391C12.5293 15.5796 13.7375 14.3715 13.7375 12.8812V9.44683C13.7375 9.039 13.4094 8.71089 13.0016 8.71089C12.5937 8.71089 12.2656 9.039 12.2656 9.44683V12.8812C12.2656 13.5589 11.7167 14.1078 11.0391 14.1078H2.69844C2.02076 14.1078 1.47188 13.5589 1.47188 12.8812V4.54058C1.47188 3.86291 2.02076 3.31402 2.69844 3.31402H6.13281C6.54065 3.31402 6.86875 2.98591 6.86875 2.57808C6.86875 2.17025 6.54065 1.84214 6.13281 1.84214H2.69844Z"
    );
    pathElement.setAttributeNS(null, "fill", "black");

    title.appendChild(h2);
    svgElement.appendChild(pathElement);
    title.appendChild(svgElement);
    title.appendChild(buttonModifierGallerie);
    portfolio.appendChild(title);

    // Charger les données des œuvres
    const responseWorks = await fetch("http://localhost:5678/api/works");
    const dataWorks = await responseWorks.json();

    // Charger les données des catégories
    const responseCategories = await fetch(
        "http://localhost:5678/api/categories"
    );
    const dataCategories = await responseCategories.json();

    // Créer le conteneur du filtre
    const filter = document.createElement("div");
    filter.classList.add("filter");
    portfolio.appendChild(filter);

    // login
    const filtre = document.querySelector(".filter");

    const loginLink = document.getElementById("login-link");

    const loginLink__a = document.createElement("a");
    loginLink__a.classList.add("login-link-a");
    loginLink__a.innerText = "login";
    loginLink__a.href = "login.html";
    loginLink.appendChild(loginLink__a);

    const isLoggedIn = localStorage.getItem("userId", "true");

    if (isLoggedIn === "true") {
        filtre.style.display = "none";
        svgElement.style.display = "flex";
        buttonModifierGallerie.style.display = "flex";
        h2.style.margin = "5rem 0 5rem 0";
        loginLink__a.innerText = "logout";
        modaleGallery.style.display = "none";
    } else {
        filtre.style.display = "flex";
        loginLink__a.innerText = "login";
        buttonModifierGallerie.style.display = "none";
    }
    // Ajouter le filtre "Tous"
    const filterAll = document.createElement("div");
    filterAll.classList.add("filtersTous");
    filterAll.textContent = "Tous";
    filterAll.style.cursor = "pointer";
    filter.appendChild(filterAll);

    // Ajouter les filtres de catégorie
    dataCategories.forEach((category) => {
        const filterCategory = document.createElement("div");
        filterCategory.classList.add("filters");
        filterCategory.textContent = category.name;
        filterCategory.id = category.id;
        filterCategory.style.cursor = "pointer";
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
