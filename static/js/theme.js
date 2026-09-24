document.addEventListener("DOMContentLoaded", () => {


const themeButton = document.getElementById("theme_button");
const themeIcon = document.getElementById("theme_icon");
const themeText = document.getElementById("theme_text");

// Verifica se os elementos existem
if (!themeButton || !themeIcon || !themeText) {
    console.error("Elementos do botão de tema não encontrados.");
    return;
}


// =========================================================
// TEMA SALVO
// =========================================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");

    themeIcon.textContent = "☀";
    themeText.textContent = "Claro";
} else {
    document.body.classList.remove("dark-theme");

    themeIcon.textContent = "☾";
    themeText.textContent = "Escuro";
}


// =========================================================
// ALTERAR TEMA
// =========================================================

themeButton.addEventListener("click", () => {

    const isDark =
        document.body.classList.toggle("dark-theme");


    if (isDark) {

        // Mudou para escuro
        localStorage.setItem("theme", "dark");

        themeIcon.textContent = "☀";
        themeText.textContent = "Claro";

    } else {

        // Mudou para claro
        localStorage.setItem("theme", "light");

        themeIcon.textContent = "☾";
        themeText.textContent = "Escuro";

    }

});


// =========================================================
// CONTAGEM REGRESSIVA
// =========================================================

const eventDate =
    new Date("2026-10-26T00:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        eventDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(updateCountdown, 1000);


});
