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

    if (isAnimating) {
        return;
    }


    /* Don't go past the last slide */

    if (
        direction === "next" &&
        currentSlide >= slides.length - 1
    ) {
        return;
    }


    /* Don't go before the first slide */

    if (
        direction === "previous" &&
        currentSlide <= 0
    ) {
        return;
    }


    isAnimating = true;


    const oldSlide = slides[currentSlide];


    let newIndex;

    if (direction === "next") {
        newIndex = currentSlide + 1;
    } else {
        newIndex = currentSlide - 1;
    }


    const newSlide = slides[newIndex];


    /* Prepare new slide */

    if (direction === "next") {
        newSlide.classList.add("prepare-up");
    } else {
        newSlide.classList.add("prepare-down");
    }


    newSlide.offsetHeight;


    newSlide.classList.remove(
        "prepare-up",
        "prepare-down"
    );


    /* Activate new slide */

    newSlide.classList.add("active");


    /* Move old slide */

    if (direction === "next") {
        oldSlide.classList.add("exit-up");
    } else {
        oldSlide.classList.add("exit-down");
    }


    currentSlide = newIndex;


    /* Clean animation */

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
   CLICK ANYWHERE TO CONTINUE
================================================== */

document.addEventListener(
    "click",
    function(event) {

        /*
           Don't move to another event when
           clicking navigation or carousel buttons.
        */

        if (
            event.target.closest("a") ||
            event.target.closest(".nav-container") ||
            event.target.closest(".carousel-btn")
        ) {
            return;
        }


        changeSlide("next");

    }
);


/* ==================================================
   MOUSE WHEEL
================================================== */

document.addEventListener(
    "wheel",
    function(event) {

        if (isAnimating) {
            return;
        }


        if (event.deltaY > 0) {
            changeSlide("next");
        }

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

        if (event.key === "ArrowDown") {
            changeSlide("next");
        }

        if (event.key === "ArrowUp") {
            changeSlide("previous");
        }

    }
);


/* ==================================================
   EVENT PHOTO GALLERIES
================================================== */

/*
   Each photo has its own:

   image = photo file
   title = title shown on photo
   year = year shown under title

   IMPORTANT:
   The title and year automatically change
   whenever the photo changes.
*/

const photoGalleries = {


    /* ==================================================
       HUDDLES
    ================================================== */

    huddles: [

        {
            image: "Assets/huddles1.jpg",
            title: "1st year huddle",
            year: "October 13, 2024"
        },

        {
            image: "Assets/huddles2.jpg",
            title: "1st year huddle",
            year: "September 17,2026"
        },

        {
            image: "Assets/huddles3.jpg",
            title: "1st yerar huddle",
            year: "September 17, 2026"
        },

        {
            image: "Assets/huddles4.jpg",
            title: "1st year huddle",
            year: "September 17, 2026"
        },

        {
            image: "Assets/huddles5.jpg",
            title: "1st year huddle",
            year: "September 17, 2026"
        }

    ],


    /* ==================================================
       SEMINARS
    ================================================== */

    seminars: [

        {
            image: "Assets/seminars1.jpg",
            title: "1st year, Arduino workshops",
            year: "September 18, 2026"
        },

        {
            image: "Assets/seminars4.jpg",
            title: "2nd year, Arduino workshops",
            year: "September 18, 2026"
        },

        {
            image: "Assets/seminars2.jpg",
            title: "Data Analitics Seminar",
            year: "September 22, 2026"
        },

        {
            image: "Assets/seminars3.jpg",
            title: "3rd year, Figma Design Workshop",
            year: "September 23, 2026"
        },

        {
            image: "Assets/seminars5.jpg",
            title: "3rd year, Cyber hygiene and Digital Forensics Semminar",
            year: "September 25, 2026"
        }

    ],


    /* ==================================================
       CHRISTMAS
    ================================================== */

    christmas: [

        {
            image: "Assets/christmas1.jpg",
            title: "CPE Thanks Giving",
            year: "December 19, 2024"
        },

        {
            image: "Assets/christmas2.jpg",
            title: "CPE Thanks Giving",
            year: "December 19, 2025"
        },

        {
            image: "Assets/christmas3.jpg",
            title: "CPE Thanks Giving",
            year: "December 19, 2025"
        },

        {
            image: "Assets/christmas4.jpg",
            title: "CPE Thanks Giving",
            year: "December 19, 2025"
        },

        {
            image: "Assets/christmas5.jpg",
            title: "CPE Thanks Giving",
            year: "December 19, 2025"
        }

    ],


    /* ==================================================
       MORE EVENTS
    ================================================== */

    "more-events": [

        {
            image: "Assets/more-events1.jpg",
            title: "PHOTOBOOTH",
            year: "September 15, 2026"
        },

        {
            image: "Assets/more-events2.jpg",
            title: "PINS FOR SALE",
            year: "September 15, 2026"
        },

        {
            image: "Assets/more-events3.jpg",
            title: "FOOTBALL",
            year: "September 15, 2026"
        },

        {
            image: "Assets/more-events4.jpg",
            title: "YOHOO SHOOT YOUR SHOT",
            year: "July 30, 2026"
        },

        {
            image: "Assets/more-events5.jpg",
            title: "PINS FOR SALE",
            year: "July 30, 2026"
        }

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
   PHOTO AUTO CHANGE SPEED
================================================== */

/*
   3000 = 3 seconds
   2500 = 2.5 seconds
   2000 = 2 seconds
   1500 = 1.5 seconds
*/

const AUTO_CHANGE_TIME = 3000;


/* ==================================================
   CHANGE PHOTO
================================================== */

function changePhoto(frame, direction) {

    const slide = frame.closest(".event-slide");

    if (!slide) {
        return;
    }


    const eventID = slide.id;

    const gallery = photoGalleries[eventID];

    if (!gallery) {
        return;
    }


    let photoIndex = photoIndexes[eventID];


    /* ==================================================
       NEXT PHOTO
    ================================================== */

    if (direction === "next") {

        photoIndex++;

        if (photoIndex >= gallery.length) {
            photoIndex = 0;
        }

    }


    /* ==================================================
       PREVIOUS PHOTO
    ================================================== */

    else if (direction === "previous") {

        photoIndex--;

        if (photoIndex < 0) {
            photoIndex = gallery.length - 1;
        }

    }


    /* Save current photo */

    photoIndexes[eventID] = photoIndex;


    /* Find image */

    const image =
        frame.querySelector(".event-photo");


    /* Find title */

    const title =
        frame.querySelector(".photo-title");


    /* Find year */

    const year =
        frame.querySelector(".photo-year");


    if (!image) {
        return;
    }


    /* ==================================================
       FADE OUT
    ================================================== */

    image.classList.add("photo-changing");


    /*
       Change image + title + year
       after 0.5 second.
    */

    setTimeout(function() {

        const photo =
            gallery[photoIndex];


        /* Change image */

        image.src =
            photo.image;


        /* Change title */

        if (title) {
            title.textContent =
                photo.title;
        }


        /* Change year */

        if (year) {
            year.textContent =
                photo.year;
        }


        /* Fade image back in */

        image.classList.remove(
            "photo-changing"
        );

    }, 500);

}


/* ==================================================
   SET INITIAL PHOTO INFORMATION
================================================== */

document.querySelectorAll(".image-frame").forEach(
    function(frame) {

        const slide =
            frame.closest(".event-slide");

        if (!slide) {
            return;
        }


        const eventID =
            slide.id;


        const gallery =
            photoGalleries[eventID];


        if (!gallery) {
            return;
        }


        const firstPhoto =
            gallery[0];


        const image =
            frame.querySelector(".event-photo");


        const title =
            frame.querySelector(".photo-title");


        const year =
            frame.querySelector(".photo-year");


        /* Set first image */

        if (image) {
            image.src =
                firstPhoto.image;
        }


        /* Set first title */

        if (title) {
            title.textContent =
                firstPhoto.title;
        }


        /* Set first year */

        if (year) {
            year.textContent =
                firstPhoto.year;
        }

    }
);


/* ==================================================
   AUTOMATIC PHOTO CHANGING
================================================== */

document.querySelectorAll(".image-frame").forEach(
    function(frame) {

        /*
           Automatically change photos
           even when the mouse is NOT
           over the image.
        */

        setInterval(function() {

            changePhoto(
                frame,
                "next"
            );

        }, AUTO_CHANGE_TIME);

    }
);


/* ==================================================
   CAROUSEL BUTTONS
================================================== */

document.querySelectorAll(".image-frame").forEach(
    function(frame) {


        /* ==================================================
           NEXT BUTTON
        ================================================== */

        const nextButton =
            frame.querySelector(".next-btn");


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                function(event) {

                    /*
                       Prevent this click from
                       changing the event slide.
                    */

                    event.preventDefault();

                    event.stopPropagation();


                    changePhoto(
                        frame,
                        "next"
                    );

                }
            );

        }


        /* ==================================================
           PREVIOUS BUTTON
        ================================================== */

        const previousButton =
            frame.querySelector(".prev-btn");


        if (previousButton) {

            previousButton.addEventListener(
                "click",
                function(event) {

                    event.preventDefault();

                    event.stopPropagation();


                    changePhoto(
                        frame,
                        "previous"
                    );

                }
            );

        }

    }
);