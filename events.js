/* ==================================================
   EVENTS PAGE SLIDER
================================================== */

const slides = document.querySelectorAll(".event-slide");

let currentSlide = 0;

let isAnimating = false;


/* ==================================================
   INITIAL SLIDE
================================================== */

slides.forEach((slide, index) => {

    slide.classList.remove(
        "active",
        "exit-up",
        "exit-down",
        "prepare-up",
        "prepare-down"
    );

    if (index === 0) {

        slide.classList.add("active");

    }

});


/* ==================================================
   CHANGE SLIDE
================================================== */

function changeSlide(direction) {

    /* Stop if animation is still running */

    if (isAnimating) {

        return;

    }


    /* ==================================================
       DON'T GO PAST THE LAST SLIDE
    ================================================== */

    if (
        direction === "next" &&
        currentSlide >= slides.length - 1
    ) {

        return;

    }


    /* ==================================================
       DON'T GO BEFORE FIRST SLIDE
    ================================================== */

    if (
        direction === "previous" &&
        currentSlide <= 0
    ) {

        return;

    }


    isAnimating = true;


    /* ==================================================
       CURRENT SLIDE
    ================================================== */

    const oldSlide = slides[currentSlide];


    /* ==================================================
       FIND NEW SLIDE
    ================================================== */

    let newIndex;


    if (direction === "next") {

        newIndex = currentSlide + 1;

    } else {

        newIndex = currentSlide - 1;

    }


    const newSlide = slides[newIndex];


    /* ==================================================
       PREPARE NEW SLIDE
    ================================================== */

    if (direction === "next") {

        newSlide.classList.add("prepare-up");

    } else {

        newSlide.classList.add("prepare-down");

    }


    /* ==================================================
       FORCE BROWSER REFRESH
    ================================================== */

    newSlide.offsetHeight;


    /* ==================================================
       REMOVE PREPARE CLASS
    ================================================== */

    newSlide.classList.remove(
        "prepare-up",
        "prepare-down"
    );


    /* ==================================================
       ACTIVATE NEW SLIDE
    ================================================== */

    newSlide.classList.add("active");


    /* ==================================================
       MOVE OLD SLIDE
    ================================================== */

    if (direction === "next") {

        oldSlide.classList.add("exit-up");

    } else {

        oldSlide.classList.add("exit-down");

    }


    /* ==================================================
       UPDATE CURRENT SLIDE
    ================================================== */

    currentSlide = newIndex;


    /* ==================================================
       CLEAN ANIMATION
    ================================================== */

    setTimeout(() => {

        oldSlide.classList.remove(
            "active",
            "exit-up",
            "exit-down",
            "prepare-up",
            "prepare-down"
        );


        newSlide.classList.remove(
            "prepare-up",
            "prepare-down"
        );


        isAnimating = false;

    }, 950);

}


/* ==================================================
   CLICK TO NEXT EVENT
================================================== */

document.addEventListener(
    "click",
    function(event) {

        /*
           If the user clicks a link,
           don't change the event slide.
        */

        if (
            event.target.closest("a") ||
            event.target.closest(".nav-container") ||
            event.target.closest(".event-navigation")
        ) {

            return;

        }


        /* Go to next event */

        changeSlide("next");

    }
);


/* ==================================================
   MOUSE WHEEL
================================================== */

document.addEventListener(
    "wheel",
    function(event) {

        /* Don't allow another movement
           while animation is running */

        if (isAnimating) {

            return;

        }


        /* Scroll DOWN = NEXT */

        if (event.deltaY > 0) {

            changeSlide("next");

        }


        /* Scroll UP = PREVIOUS */

        else if (event.deltaY < 0) {

            changeSlide("previous");

        }

    },
    {
        passive: true
    }
);


/* ==================================================
   KEYBOARD
================================================== */

document.addEventListener(
    "keydown",
    function(event) {


        /* ==================================================
           ARROW DOWN
        ================================================== */

        if (
            event.key === "ArrowDown"
        ) {

            changeSlide("next");

        }


        /* ==================================================
           ARROW UP
        ================================================== */

        if (
            event.key === "ArrowUp"
        ) {

            changeSlide("previous");

        }

    }
);