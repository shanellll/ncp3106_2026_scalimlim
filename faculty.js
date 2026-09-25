/* ==================================================
   FACULTY PAGE JAVASCRIPT
================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       FACULTY CARDS
    ================================================== */

    const facultyCards =
        document.querySelectorAll(".faculty-card");


    /* ==================================================
       SCPES NEXT SECTION
    ================================================== */

    const facultyNext =
        document.querySelector(".faculty-next");


    /* ==================================================
       FACULTY CARD ANIMATION
    ================================================== */

    if (facultyCards.length) {

        const cardObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                        }

                    });

                },

                {
                    threshold: 0.15
                }

            );


        /* ==================================================
           OBSERVE EVERY FACULTY CARD
        ================================================== */

        facultyCards.forEach(function (card, index) {

            /*
             * Makes each faculty card
             * appear slightly after the previous one.
             */

            card.style.transitionDelay =
                (index * 0.12) + "s";

            cardObserver.observe(card);

        });


        /* ==================================================
           FACULTY HOVER EFFECT
        ================================================== */

        facultyCards.forEach(function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.classList.add(
                        "faculty-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.classList.remove(
                        "faculty-hover"
                    );

                }
            );

        });

    }


    /* ==================================================
       SCPES BOTTOM SECTION ANIMATION
    ================================================== */

    if (facultyNext) {

        const nextObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "next-show"
                            );

                        }

                    });

                },

                {
                    threshold: 0.25
                }

            );


        nextObserver.observe(facultyNext);

    }


    /* ==================================================
       SCPES BUTTON
    ================================================== */

    const scpesButton =
        document.querySelector(
            ".faculty-next-button"
        );


    if (scpesButton) {

        scpesButton.addEventListener(
            "mouseenter",
            function () {

                scpesButton.classList.add(
                    "button-hover"
                );

            }
        );


        scpesButton.addEventListener(
            "mouseleave",
            function () {

                scpesButton.classList.remove(
                    "button-hover"
                );

            }
        );

    }

});