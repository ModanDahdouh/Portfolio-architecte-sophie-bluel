document.addEventListener("DOMContentLoaded", async function () {
    const reponse = await fetch("http://localhost:5678/api/works");
    console.log(reponse);
    const dataCategorie = await reponse.json();
    console.log(dataCategorie);

    const portfolio = document.getElementById("portfolio");
    const contact = document.getElementById("contact");

    // section Portfolio
    const h2 = document.createElement("h2");
    h2.innerHTML = "Mes Projets";
    portfolio.appendChild(h2);
    const gallery = document.createElement("div");
    gallery.classList.add("gallery");

    dataCategorie.forEach((dataCategorie, index) => {
        const figure = document.createElement("figure");
        gallery.appendChild(figure);

        const img = document.createElement("img");
        img.src = `${dataCategorie.imageUrl}`;
        img.alt = `${dataCategorie.title}`;
        figure.appendChild(img);

        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = dataCategorie.title;
        figure.appendChild(figcaption);
    });
    portfolio.appendChild(gallery);
});
