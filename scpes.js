/* ==================================================
   SCPES CLICK-TO-ADVANCE GLITCH PRESENTATION
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const sections =
        document.querySelectorAll(".scpes-section");

    const glitchScreen =
        document.getElementById("glitchScreen");

    const counter =
        document.getElementById("sectionCounter");


    /* ==================================================
       SETTINGS
    ================================================== */

    let currentSection = 0;

    const glitchDuration = 800;

    let isTransitioning = false;


    /* ==================================================
       SHOW SECTION
    ================================================== */

    function showSection(index) {

        sections.forEach(function (section) {

            section.classList.remove("active-section");

        });

        sections[index].classList.add("active-section");

        counter.textContent =
            "SECTION " +
            String(index + 1).padStart(2, "0") +
            " / " +
            String(sections.length).padStart(2, "0");
    }


    /* ==================================================
       NEXT SECTION
    ================================================== */

    function nextSection() {

        if (isTransitioning) {
            return;
        }

        if (currentSection >= sections.length - 1) {
            return;
        }

        isTransitioning = true;


        /* START GLITCH */

        glitchScreen.classList.add("active");


        /* CHANGE SECTION */

        setTimeout(function () {

            currentSection++;

            showSection(currentSection);

        }, glitchDuration / 2);


        /* END GLITCH */

        setTimeout(function () {

            glitchScreen.classList.remove("active");

            isTransitioning = false;

        }, glitchDuration);

    }


    /* ==================================================
       INITIAL SECTION
    ================================================== */

    showSection(currentSection);


    /* ==================================================
       BACKGROUND CLICK ONLY
    ================================================== */

    document.addEventListener("click", function (event) {

        /*
        ================================================
        IGNORE THESE ELEMENTS
        ================================================
        */

        if (
            event.target.closest(".scpes-section h1") ||
            event.target.closest(".scpes-section p") ||
            event.target.closest(".info-card") ||
            event.target.closest(".objective-item") ||
            event.target.closest(".officer-card") ||
            event.target.closest(".activity-box") ||
            event.target.closest(".event-card") ||
            event.target.closest(".involvement-grid div") ||
            event.target.closest(".achievement-box") ||
            event.target.closest(".page-button") ||
            event.target.closest("header") ||
            event.target.closest("nav") ||
            event.target.closest(".logo")
        ) {

            return;

        }


        /*
        ================================================
        ONLY BACKGROUND
        ================================================
        */

        if (
            event.target === document.body ||
            event.target === document.querySelector(".scpes-page") ||
            event.target === document.querySelector(".scpes-content") ||
            event.target.classList.contains("scpes-section")
        ) {

            nextSection();

        }

    });

});