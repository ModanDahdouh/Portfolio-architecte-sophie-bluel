document.addEventListener("DOMContentLoaded", async function () {
    const introduction = document.getElementById("introduction");
    const figure = document.createElement("figure");
    introduction.appendChild(figure);

    const img = document.createElement("img");
    img.src = `./assets/images/sophie-bluel.png`;
    figure.appendChild(img);

    const article = document.createElement("article");
    introduction.appendChild(article);

    const h2 = document.createElement("h2");
    h2.innerHTML = "Designer d'espace";
    article.appendChild(h2);

    const p = document.createElement("p");
    p.innerHTML = `<p>Je raconte votre histoire, je valorise vos idées. Je vous accompagne de la conception à la livraison
        finale du chantier.</p>
        <p>Chaque projet sera étudié en commun, de façon à mettre en valeur les volumes, les matières et les
        couleurs dans le respect de l’esprit des lieux et le choix adapté des matériaux. Le suivi du
        chantier sera assuré dans le souci du détail, le respect du planning et du budget.</p>
        <p>En cas de besoin, une équipe pluridisciplinaire peut-être constituée : architecte DPLG,
        décorateur(trice)</p>`;
    article.appendChild(p);
});
