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


        /*
        ==================================================
        START / STOP OFFICER CAROUSEL
        ==================================================
        */

        if (
            sections[index].classList.contains(
                "officers-section"
            )
        ) {

            startOfficerCarousel();

        } else {

            stopOfficerCarousel();

        }

    }


    /* ==================================================
       OFFICER DATA
       
       3 SETS
       SET 1 = OFFICERS 1-4
       SET 2 = OFFICERS 5-8
       SET 3 = OFFICERS 9-12
    ================================================== */

    const officerSets = [

        /* ==================================================
           SET 1
        ================================================== */

        [

            {
                title: "PRESIDENT",
                photo: "Assets/officer1.jpg",
                name: "OFFICER 1"
            },

            {
                title: "VICE PRESIDENT",
                photo: "Assets/officer2.jpg",
                name: "OFFICER 2"
            },

            {
                title: "SECRETARY",
                photo: "Assets/officer3.jpg",
                name: "OFFICER 3"
            },

            {
                title: "TREASURER",
                photo: "Assets/officer4.jpg",
                name: "OFFICER 4"
            }

        ],


        /* ==================================================
           SET 2
        ================================================== */

        [

            {
                title: "PRESIDENT",
                photo: "Assets/officer5.jpg",
                name: "OFFICER 5"
            },

            {
                title: "VICE PRESIDENT",
                photo: "Assets/officer6.jpg",
                name: "OFFICER 6"
            },

            {
                title: "SECRETARY",
                photo: "Assets/officer7.jpg",
                name: "OFFICER 7"
            },

            {
                title: "TREASURER",
                photo: "Assets/officer8.jpg",
                name: "OFFICER 8"
            }

        ],


        /* ==================================================
           SET 3
        ================================================== */

        [

            {
                title: "PRESIDENT",
                photo: "Assets/officer9.jpg",
                name: "OFFICER 9"
            },

            {
                title: "VICE PRESIDENT",
                photo: "Assets/officer10.jpg",
                name: "OFFICER 10"
            },

            {
                title: "SECRETARY",
                photo: "Assets/officer11.jpg",
                name: "OFFICER 11"
            },

            {
                title: "TREASURER",
                photo: "Assets/officer12.jpg",
                name: "OFFICER 12"
            }

        ]

    ];


    /* ==================================================
       OFFICER CAROUSEL SETTINGS
    ================================================== */

    let currentOfficerSet = 0;

    const officerInterval = 5000;

    let officerTimer = null;

    let officerAnimating = false;


    /* ==================================================
       OFFICER CARDS
    ================================================== */

    const officerCards =
        document.querySelectorAll(
            ".officer-card"
        );


    /* ==================================================
       CREATE OFFICER CONTENT
    ================================================== */

    function createOfficerContent(officer) {

        const content =
            document.createElement("div");

        content.className =
            "officer-slide officer-next";


        /* TITLE */

        const title =
            document.createElement("div");

        title.className =
            "officer-title";

        title.textContent =
            officer.title;


        /* PHOTO */

        const photo =
            document.createElement("img");

        photo.className =
            "officer-photo";

        photo.src =
            officer.photo;

        photo.alt =
            officer.name;


        /* NAME */

        const name =
            document.createElement("div");

        name.className =
            "officer-name";

        name.textContent =
            officer.name;


        /* ADD CONTENT */

        content.appendChild(title);

        content.appendChild(photo);

        content.appendChild(name);


        return content;

    }


    /* ==================================================
       NEXT OFFICER SET
       
       SET 1 → SET 2 → SET 3 → SET 1
    ================================================== */

    function nextOfficerSet() {

        /*
        ----------------------------------------------
        MAKE SURE OFFICERS SECTION IS ACTIVE
        ----------------------------------------------
        */

        const officersSection =
            document.querySelector(
                ".officers-section"
            );


        if (
            !officersSection ||
            !officersSection.classList.contains(
                "active-section"
            )
        ) {

            return;

        }


        /*
        ----------------------------------------------
        PREVENT ANIMATION OVERLAP
        ----------------------------------------------
        */

        if (officerAnimating) {

            return;

        }

        officerAnimating = true;


        /*
        ----------------------------------------------
        NEXT SET
        ----------------------------------------------
        */

        const nextSet =
            (currentOfficerSet + 1)
            % officerSets.length;


        /*
        ----------------------------------------------
        ALL 4 BOXES CHANGE TOGETHER
        ----------------------------------------------
        */

        officerCards.forEach(
            function (card, index) {

                const viewport =
                    card.querySelector(
                        ".officer-viewport"
                    );


                const current =
                    viewport.querySelector(
                        ".officer-current"
                    );


                /*
                ------------------------------------------
                GET NEXT OFFICER
                ------------------------------------------
                */

                const nextOfficer =
                    officerSets[nextSet][index];


                /*
                ------------------------------------------
                CREATE NEW CONTENT
                ------------------------------------------
                */

                const next =
                    createOfficerContent(
                        nextOfficer
                    );


                /*
                ------------------------------------------
                NEW CONTENT STARTS ON RIGHT
                ------------------------------------------
                */

                next.style.transform =
                    "translateX(100%)";


                viewport.appendChild(next);


                /*
                ------------------------------------------
                OLD CONTENT MOVES LEFT
                ------------------------------------------
                */

                current.classList.add(
                    "slide-out-left"
                );


                /*
                ------------------------------------------
                NEW CONTENT MOVES
                RIGHT → LEFT
                ------------------------------------------
                */

                next.classList.remove(
                    "officer-next"
                );

                next.classList.add(
                    "slide-in-right"
                );

            }
        );


        /*
        ----------------------------------------------
        WAIT FOR SLIDE ANIMATION
        ----------------------------------------------
        */

        setTimeout(
            function () {

                officerCards.forEach(
                    function (card) {

                        const viewport =
                            card.querySelector(
                                ".officer-viewport"
                            );


                        const oldContent =
                            viewport.querySelector(
                                ".officer-current"
                            );


                        const newContent =
                            viewport.querySelector(
                                ".officer-slide.slide-in-right"
                            );


                        /*
                        ----------------------------------
                        REMOVE OLD CONTENT
                        ----------------------------------
                        */

                        if (oldContent) {

                            oldContent.remove();

                        }


                        /*
                        ----------------------------------
                        MAKE NEW CONTENT CURRENT
                        ----------------------------------
                        */

                        if (newContent) {

                            newContent.classList.remove(
                                "slide-in-right"
                            );

                            newContent.classList.add(
                                "officer-current"
                            );

                            newContent.style.transform =
                                "";

                        }

                    }
                );


                /*
                ----------------------------------------------
                UPDATE SET
                ----------------------------------------------
                */

                currentOfficerSet =
                    nextSet;


                officerAnimating =
                    false;

            },

            800

        );

    }


    /* ==================================================
       START OFFICER CAROUSEL
    ================================================== */

    function startOfficerCarousel() {

        /*
        ----------------------------------------------
        DO NOT CREATE MULTIPLE TIMERS
        ----------------------------------------------
        */

        if (officerTimer !== null) {

            return;

        }


        officerTimer =
            setInterval(
                nextOfficerSet,
                officerInterval
            );

    }


    /* ==================================================
       STOP OFFICER CAROUSEL
    ================================================== */

    function stopOfficerCarousel() {

        if (officerTimer !== null) {

            clearInterval(
                officerTimer
            );

            officerTimer = null;

        }

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