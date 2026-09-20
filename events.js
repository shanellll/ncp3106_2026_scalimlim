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

/* ==================================================
   EVENT PHOTO GALLERIES
================================================== */

const photoGalleries = {

    huddles: [
        "Assets/events/huddles-1.jpg",
        "Assets/events/huddles-2.jpg",
        "Assets/events/huddles-3.jpg"
    ],

    seminars: [
        "Assets/events/seminars-1.jpg",
        "Assets/events/seminars-2.jpg",
        "Assets/events/seminars-3.jpg"
    ],

    christmas: [
        "Assets/events/christmas-1.jpg",
        "Assets/events/christmas-2.jpg",
        "Assets/events/christmas-3.jpg"
    ],

    "more-events": [
        "Assets/events/more-events-1.jpg",
        "Assets/events/more-events-2.jpg",
        "Assets/events/more-events-3.jpg"
    ]

};


/* ==================================================
   CURRENT PHOTO NUMBER
================================================== */

const photoIndexes = {

    huddles: 0,

    seminars: 0,

    christmas: 0,

    "more-events": 0

};


/* ==================================================
   CLICK PHOTO TO CHANGE PHOTO
================================================== */

document.querySelectorAll(".image-frame").forEach(
    function(frame) {

        frame.addEventListener(
            "click",
            function(event) {

                /*
                   IMPORTANT:

                   Stop this click from reaching
                   the main slide click function.

                   Therefore:

                   CLICK PHOTO
                   = CHANGE PHOTO

                   NOT

                   NEXT EVENT
                */

                event.stopPropagation();


                /* Find the event slide */

                const slide =
                    frame.closest(".event-slide");


                if (!slide) {
                    return;
                }


                /* Get event ID */

                const eventID =
                    slide.id;


                /* Get photos for this event */

                const gallery =
                    photoGalleries[eventID];


                if (!gallery) {
                    return;
                }


                /* Get current photo */

                let photoIndex =
                    photoIndexes[eventID];


                /* Go to next photo */

                photoIndex++;


                /* Return to first photo */

                if (
                    photoIndex >= gallery.length
                ) {

                    photoIndex = 0;

                }


                /* Save photo number */

                photoIndexes[eventID] =
                    photoIndex;


                /* Find the image */

                const image =
                    frame.querySelector(".event-photo");


                if (!image) {
                    return;
                }


                /* Start fade animation */

                image.classList.add(
                    "photo-changing"
                );


                /* Change image */

                setTimeout(
                    function() {

                        image.src =
                            gallery[photoIndex];


                        image.classList.remove(
                            "photo-changing"
                        );

                    },
                    200
                );

            }
        );

    }
);