/* ==================================================
   CpE AT UE SLIDESHOW
================================================== */

const slides = document.querySelectorAll(".slide");

const transitionScreen =
    document.querySelector(".transition-screen");


let currentSlide = 0;

let isAnimating = false;


/* ==================================================
   CHANGE SLIDE
================================================== */

function showSlide(nextSlide) {

    /* Don't go outside the 8 slides */

    if (
        nextSlide < 0 ||
        nextSlide >= slides.length
    ) {
        return;
    }


    /* Prevent scrolling while animation is playing */

    if (isAnimating) {
        return;
    }


    isAnimating = true;


    /* ==================================================
       START TRANSITION
    ================================================== */

    transitionScreen.classList.remove("animate");

    /*
       This forces the browser to restart
       the transition animation.
    */

    void transitionScreen.offsetWidth;

    transitionScreen.classList.add("animate");


    /* ==================================================
       CHANGE SLIDE
    ================================================== */

    setTimeout(() => {

        slides[currentSlide]
            .classList
            .remove("active-slide");


        currentSlide = nextSlide;


        slides[currentSlide]
            .classList
            .add("active-slide");

    }, 500);


    /* ==================================================
       UNLOCK SCROLL
    ================================================== */

    setTimeout(() => {

        isAnimating = false;

    }, 1100);

}


/* ==================================================
   MOUSE WHEEL
================================================== */

window.addEventListener(
    "wheel",
    function(event) {

        /*
           Stop the browser's normal scrolling.
        */

        event.preventDefault();


        /*
           Don't do anything while transition
           is currently playing.
        */

        if (isAnimating) {
            return;
        }


        /* ==========================================
           SCROLL DOWN
        ========================================== */

        if (event.deltaY > 0) {

            if (
                currentSlide <
                slides.length - 1
            ) {

                showSlide(
                    currentSlide + 1
                );

            }

        }


        /* ==========================================
           SCROLL UP
        ========================================== */

        else if (event.deltaY < 0) {

            if (currentSlide > 0) {

                showSlide(
                    currentSlide - 1
                );

            }

        }

    },
    {
        passive: false
    }
);


/* ==================================================
   KEYBOARD CONTROLS
================================================== */

window.addEventListener(
    "keydown",
    function(event) {

        /* DOWN */

        if (
            event.key === "ArrowDown" ||
            event.key === "PageDown"
        ) {

            event.preventDefault();

            if (
                currentSlide <
                slides.length - 1
            ) {

                showSlide(
                    currentSlide + 1
                );

            }

        }


        /* UP */

        if (
            event.key === "ArrowUp" ||
            event.key === "PageUp"
        ) {

            event.preventDefault();

            if (currentSlide > 0) {

                showSlide(
                    currentSlide - 1
                );

            }

        }


        /* HOME */

        if (event.key === "Home") {

            event.preventDefault();

            showSlide(0);

        }


        /* END */

        if (event.key === "End") {

            event.preventDefault();

            showSlide(
                slides.length - 1
            );

        }

    }
);