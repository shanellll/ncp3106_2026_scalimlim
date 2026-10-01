/* ==================================================
   EVENT PHOTO CAROUSEL
   - Automatic photo changing
   - Previous / Next buttons
   - Each event has its own gallery
================================================== */

const photoGalleries = {

    huddles: [
        {
            image: "Assets/huddles1.jpg",
            title: "1st year huddle",
            year: "October 13, 2024"
        },
        {
            image: "Assets/huddles3.jpg",
            title: "2nd year huddle",
            year: "2024"
        },
        {
            image: "Assets/huddles4.jpg",
            title: "3rd year huddle",
            year: "2024"
        },
        {
            image: "Assets/huddles2.jpg",
            title: "4th year huddle",
            year: "2024"
        },
        {
            image: "Assets/huddles5.jpg",
            title: "Computer Engineering Huddle",
            year: "2024"
        }
    ],

    seminars: [
        {
            image: "Assets/seminars1.jpg",
            title: "1st year, Arduino workshops",
            year: "September 18, 2026"
        },
        {
            image: "Assets/seminars4.jpg",
            title: "Computer Engineering Seminar",
            year: "2026"
        },
        {
            image: "Assets/seminars2.jpg",
            title: "Learning and Development",
            year: "2026"
        },
        {
            image: "Assets/seminars3.jpg",
            title: "Technology Seminar",
            year: "2026"
        },
        {
            image: "Assets/seminars5.jpg",
            title: "Computer Engineering Workshop",
            year: "2026"
        }
    ],

    christmas: [
        {
            image: "Assets/christmas1.jpg",
            title: "CPE Thanks Giving",
            year: "December 19, 2024"
        },
        {
            image: "Assets/christmas3.jpg",
            title: "Year End Celebration",
            year: "2024"
        },
        {
            image: "Assets/christmas4.jpg",
            title: "CPE Christmas Party",
            year: "2024"
        },
        {
            image: "Assets/christmas2.jpg",
            title: "Holiday Celebration",
            year: "2024"
        },
        {
            image: "Assets/christmas5.jpg",
            title: "Computer Engineering Celebration",
            year: "2024"
        }
    ],

    "activities-workshops": [
        {
            image: "Assets/activities-workshops2.jpg",
            title: "Activities & Workshops",
            year: "2025"
        },
        {
            image: "Assets/activities-workshops3.jpg",
            title: "Hands-on Activity",
            year: "2025"
        },
        {
            image: "Assets/activities-workshops1.jpg",
            title: "Activities & Workshops",
            year: "2025"
        },
        {
            image: "Assets/activities-workshops5.jpg",
            title: "Computer Engineering Activity",
            year: "2025"
        },
        {
            image: "Assets/activities-workshops4.jpg",
            title: "Student Workshop",
            year: "2025"
        }
    ],

    "more-events": [
        {
            image: "Assets/more-events1.jpg",
            title: "PHOTOBOOTH",
            year: "September 15, 2026"
        },
        {
            image: "Assets/more-events2.jpg",
            title: "More Events",
            year: "2026"
        },
        {
            image: "Assets/more-events3.jpg",
            title: "Student Activity",
            year: "2026"
        },
        {
            image: "Assets/more-events4.jpg",
            title: "Organization Event",
            year: "2026"
        },
        {
            image: "Assets/more-events5.jpg",
            title: "Computer Engineering Event",
            year: "2026"
        }
    ]
};


/* ==================================================
   CURRENT PHOTO INDEX
================================================== */

const photoIndexes = {
    huddles: 0,
    seminars: 0,
    christmas: 0,
    "activities-workshops": 0,
    "more-events": 0
};


/* ==================================================
   CHANGE PHOTO
================================================== */

function changePhoto(frame, direction) {

    const slide = frame.closest(".event-slide");

    if (!slide) return;

    const eventID = slide.id;

    const gallery = photoGalleries[eventID];

    if (!gallery || gallery.length === 0) return;

    const image = frame.querySelector(".event-photo");
    const title = frame.querySelector(".photo-title");
    const year = frame.querySelector(".photo-year");

    if (!image) return;


    /* NEXT */

    if (direction === "next") {

        photoIndexes[eventID]++;

        if (photoIndexes[eventID] >= gallery.length) {
            photoIndexes[eventID] = 0;
        }
    }


    /* PREVIOUS */

    if (direction === "previous") {

        photoIndexes[eventID]--;

        if (photoIndexes[eventID] < 0) {
            photoIndexes[eventID] = gallery.length - 1;
        }
    }


    const newPhoto = gallery[photoIndexes[eventID]];


    /* PHOTO ANIMATION */

    image.classList.add("photo-changing");


    setTimeout(() => {

        image.src = newPhoto.image;

        if (title) {
            title.textContent = newPhoto.title;
        }

        if (year) {
            year.textContent = newPhoto.year;
        }

        image.classList.remove("photo-changing");

    }, 300);
}


/* ==================================================
   AUTOMATIC SLIDESHOW
   Change this number to adjust the time.

   5000 = 5 seconds
   4000 = 4 seconds
   3000 = 3 seconds
   2500 = 2.5 seconds
   2000 = 2 seconds
================================================== */

const AUTO_CHANGE_TIME = 5000;


/* ==================================================
   START CAROUSEL
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const imageFrames = document.querySelectorAll(".image-frame");


    imageFrames.forEach(function (frame) {

        /* ------------------------------------------
           NEXT BUTTON
        ------------------------------------------ */

        const nextButton = frame.querySelector(".next-btn");

        if (nextButton) {

            nextButton.addEventListener("click", function (event) {

                event.preventDefault();
                event.stopPropagation();

                changePhoto(frame, "next");

            });
        }


        /* ------------------------------------------
           PREVIOUS BUTTON
        ------------------------------------------ */

        const previousButton = frame.querySelector(".prev-btn");

        if (previousButton) {

            previousButton.addEventListener("click", function (event) {

                event.preventDefault();
                event.stopPropagation();

                changePhoto(frame, "previous");

            });
        }


        /* ------------------------------------------
           AUTOMATIC PHOTO CHANGE
        ------------------------------------------ */

        setInterval(function () {

            changePhoto(frame, "next");

        }, AUTO_CHANGE_TIME);

    });

});