/* ==================================================
   EVENTS PAGE SLIDER — NO AUTOMATIC CHANGES
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
   ❌ REMOVED CLICK ANYWHERE ❌
   No more changing slides on click
================================================== */


/* ==================================================
   MOUSE WHEEL — WITH DEBOUNCE
   Only way to change slides is scroll
================================================== */

let wheelTimeout;

document.addEventListener(
    "wheel",
    function(event) {

        if (isAnimating) {
            return;
        }

        /* Debounce wheel events to prevent multiple triggers */
        if (wheelTimeout) {
            return;
        }

        wheelTimeout = setTimeout(() => {
            wheelTimeout = null;
        }, 800);


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
   KEYBOARD — Arrow Keys Only
================================================== */

let keyTimeout;

document.addEventListener(
    "keydown",
    function(event) {

        if (isAnimating) {
            return;
        }

        /* Debounce keyboard to prevent rapid firing */
        if (keyTimeout) {
            return;
        }

        if (event.key === "ArrowDown") {

            keyTimeout = setTimeout(() => {
                keyTimeout = null;
            }, 800);

            changeSlide("next");

        }

        if (event.key === "ArrowUp") {

            keyTimeout = setTimeout(() => {
                keyTimeout = null;
            }, 800);

            changeSlide("previous");

        }

    }
);


/* ==================================================
   EVENT PHOTO GALLERIES
================================================== */

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
            image: "Assets/huddles3.jpg",
            title: "1st year huddle",
            year: "October 13, 2024"
        },

        {
            image: "Assets/huddles4.jpg",
            title: "1st year huddle",
            year: "October 13, 2024"
        },

        {
            image: "Assets/huddles2.jpg",
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
            image: "Assets/christmas3.jpg",
            title: "CPE Thanks Giving",
            year: "December 19, 2024"
        },

        {
            image: "Assets/christmas4.jpg",
            title: "CPE Thanks Giving",
            year: "December 19, 2024"
        },

        {
            image: "Assets/christmas2.jpg",
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
       ACTIVITIES & WORKSHOPS
    ================================================== */

    "activities-workshops": [

        {
            image: "Assets/activities-workshops2.jpg",
            title: "3rd and 4th year students, 3D Printing",
            year: "December 17, 2025"
        },

        {
            image: "Assets/activities-workshops3.jpg",
            title: "3rd and 4th year students, 3D Printing",
            year: "December 17, 2025"
        },

        {
            image: "Assets/activities-workshops1.jpg",
            title: "𝗥𝗲𝗴𝗶𝗼𝗻𝗮𝗹 𝗦𝗰𝗶𝗲𝗻𝗰𝗲, 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆, 𝗮𝗻𝗱 𝗜𝗻𝗻𝗼𝘃𝗮𝘁𝗶𝗼𝗻 𝗪𝗲𝗲𝗸 (𝗥𝗦𝗧𝗪",
            year: "August 6, 2026"
        },

        {
            image: "Assets/activities-workshops5.jpg",
            title: "𝗥𝗲𝗴𝗶𝗼𝗻𝗮𝗹 𝗦𝗰𝗶𝗲𝗻𝗰𝗲, 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆, 𝗮𝗻𝗱 𝗜𝗻𝗻𝗼𝘃𝗮𝘵𝗶𝗼𝗻 𝗪𝗲𝗲𝗸 (𝗥𝗦𝗧𝗪",
            year: "August 6, 2026"
        },

        {
            image: "Assets/activities-workshops4.jpg",
            title: "𝗥𝗲𝗴𝗶𝗼𝗻𝗮𝗹 𝗦𝗰𝗶𝗲𝗻𝗰𝗲, 𝗧𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆, 𝗮𝗻𝗱 𝗜𝗻𝗻𝗼𝘃𝗮𝘵𝗶𝗼𝗻 𝗪𝗲𝗲𝗸 (𝗥𝗦𝗧𝗪",
            year: "August 6, 2026"
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

    "activities-workshops": 0,

    "more-events": 0

};


/* ==================================================
   PHOTO CHANGE LOCK
================================================== */

const photoAnimating = {};


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


    /* Prevent overlapping photo animations */

    if (photoAnimating[eventID]) {
        return;
    }


    photoAnimating[eventID] = true;


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

        photoAnimating[eventID] = false;

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


        photoAnimating[eventID] = false;


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
   ❌ NO AUTOMATIC PHOTO CHANGING ❌
   
   Photos ONLY change via carousel buttons
   No automatic timers at all!
================================================== */


/* ==================================================
   CAROUSEL BUTTONS — MANUAL ONLY
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