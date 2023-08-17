document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Empêcher l'envoi du formulaire par défaut

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            // Vous pouvez personnaliser l'URL de votre API ici
            const apiUrl = "http://localhost:5678/api/users/login";

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }), // Envoyer les données de connexion dans le corps de la requête
            });

            const data = await response.json();
            console.log(data);

            if (response.ok && data.userId) {
                localStorage.setItem("userId", "true");
                // Si la connexion réussit, redirigez l'utilisateur vers une autre page
                window.location.href = "../Frontend/index.html"; // Correction de la faute de frappe
            } else {
                if (response.status === 401) {
                    errorMessage.textContent =
                        "Mot de passe incorrect. Veuillez réessayer.";
                } else if (response.status === 404) {
                    errorMessage.textContent =
                        "Identifiants incorrects. Veuillez réessayer.";
                } else {
                    errorMessage.textContent =
                        "Une erreur est survenue. Veuillez réessayer ultérieurement.";
                }
            }
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            errorMessage.textContent =
                "Une erreur est survenue. Veuillez réessayer ultérieurement.";
        }
    });
    const logoutButton = document.getElementById("logout-button");

    logoutButton.addEventListener("click", async () => {
        localStorage.removeItem("userId", "true");
    });
});
