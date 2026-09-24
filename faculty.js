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
       SCROLL-IN ANIMATION
    ================================================== */

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

        card.style.transitionDelay =
            (index * 0.12) + "s";

        cardObserver.observe(card);

    });



    /* ==================================================
       FACULTY MOUSE INTERACTION
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



    /* ==================================================
       SCPES TRANSITION
    ================================================== */

    const scpesTransition =
        document.getElementById(
            "scpesTransition"
        );


    let isTransitioning = false;


    /* ==================================================
       CHECK PAGE BOTTOM
    ================================================== */

    function checkPageBottom() {

        if (isTransitioning) {

            return;

        }


        const currentPosition =
            window.innerHeight +
            window.scrollY;


        const totalHeight =
            document.documentElement.scrollHeight;


        const bottomTolerance = 35;


        if (
            currentPosition >=
            totalHeight - bottomTolerance
        ) {

            startSCPES();

        }

    }



    /* ==================================================
       START SCPES TRANSITION
    ================================================== */

    function startSCPES() {

        if (isTransitioning) {

            return;

        }


        isTransitioning = true;


        /* ==================================================
           SHOW TRANSITION SCREEN
        ================================================== */

        scpesTransition.classList.add(
            "active"
        );


        /* ==================================================
           STOP PAGE SCROLL
        ================================================== */

        document.body.style.overflow =
            "hidden";


        /* ==================================================
           WAIT FOR IMAGE ANIMATION
        ================================================== */

        setTimeout(function () {


            /* ==================================================
               OPEN SCPES PAGE
            ================================================== */

            window.location.href =
                "scpes.html";


        }, 1800);

    }



    /* ==================================================
       NORMAL SCROLL EVENT
    ================================================== */

    window.addEventListener(
        "scroll",
        checkPageBottom,
        {
            passive: true
        }
    );



    /* ==================================================
       MOUSE WHEEL
    ================================================== */

    window.addEventListener(
        "wheel",
        function () {

            setTimeout(
                checkPageBottom,
                80
            );

        },
        {
            passive: true
        }
    );



    /* ==================================================
       TOUCH SCROLL
    ================================================== */

    window.addEventListener(
        "touchmove",
        function () {

            setTimeout(
                checkPageBottom,
                80
            );

        },
        {
            passive: true
        }
    );


});


