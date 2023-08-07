document.addEventListener("DOMContentLoaded", async function () {
    const reponse = await fetch("http://localhost:5678/api/works");
    console.log(reponse);
    const dataWorks = await reponse.json();
    console.log(dataWorks);

    const portfolio = document.getElementById("portfolio");

    const h2 = document.createElement("h2");
    h2.innerHTML = "Mes Projets";
    portfolio.appendChild(h2);

    const filterReponse = await fetch("http://localhost:5678/api/categories");
    console.log(filterReponse);
    const dataFilter = await filterReponse.json();

    const filter = document.createElement("div");
    filter.classList.add("filter");

    const tous = document.createElement("div");
    tous.classList.add("filtersTous");
    tous.innerHTML = "Tous";
    filter.appendChild(tous);

    dataFilter.forEach((dataFilter, index) => {
        const filters = document.createElement("div");
        filters.classList.add("filters");
        filters.innerHTML = dataFilter.name;
        filter.appendChild(filters);
    });

    portfolio.appendChild(filter);

    const gallery = document.createElement("div");
    gallery.classList.add("gallery");

    dataWorks.forEach((dataWorks, index) => {
        const figure = document.createElement("figure");
        gallery.appendChild(figure);

        const img = document.createElement("img");
        img.src = `${dataWorks.imageUrl}`;
        img.alt = `${dataWorks.title}`;
        figure.appendChild(img);

        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = dataWorks.title;
        figure.appendChild(figcaption);
    });
    portfolio.appendChild(gallery);
});
